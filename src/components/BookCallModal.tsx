import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Copy, Check, Mail, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { contact, brand } from "@/config/siteConfig";

// Form validation schema
const callRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional(),
  helpType: z.string().min(1, { message: "Please select what you need help with" }),
  budget: z.string().min(1, { message: "Please select a budget range" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type CallRequestFormData = z.infer<typeof callRequestSchema>;

const helpOptions = [
  { value: "website", label: "Website" },
  { value: "branding", label: "Branding" },
  { value: "seo", label: "SEO" },
  { value: "ads", label: "Ads" },
  { value: "strategy", label: "Strategy" },
  { value: "other", label: "Other" },
];

const budgetOptions = [
  { value: "under-1k", label: "Under $1k" },
  { value: "1k-3k", label: "$1k – $3k" },
  { value: "3k-10k", label: "$3k – $10k" },
  { value: "10k-plus", label: "$10k+" },
];

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("request");

  const form = useForm<CallRequestFormData>({
    resolver: zodResolver(callRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      helpType: "",
      budget: "",
      message: "",
    },
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      toast({
        title: "Email copied!",
        description: `${contact.email} has been copied to your clipboard.`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Failed to copy",
        description: "Please copy the email manually.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = (data: CallRequestFormData) => {
    // TODO: Integrate email sending service (e.g., SendGrid, Resend, or Supabase Edge Function)
    // Example integration point:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });

    // Store submission locally for now
    const submissions = JSON.parse(localStorage.getItem("callRequests") || "[]");
    submissions.push({
      ...data,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem("callRequests", JSON.stringify(submissions));

    // Show success toast
    toast({
      title: "Request sent!",
      description: "We'll reply within 24 hours.",
    });

    // Reset form and close modal
    form.reset();
    onClose();
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md sm:max-w-lg p-0 overflow-hidden" hideDefaultClose>
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-display font-medium text-foreground">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Let's discuss how {brand.name} can help grow your business.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-6">
            <TabsList className="grid w-full grid-cols-2 bg-secondary">
              <TabsTrigger value="request" className="data-[state=active]:bg-background">
                <Phone className="w-4 h-4 mr-2" />
                Request a Call
              </TabsTrigger>
              <TabsTrigger value="email" className="data-[state=active]:bg-background">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Request a Call Tab */}
          <TabsContent value="request" className="p-6 pt-4 space-y-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="helpType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What do you need help with? *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-background border border-border">
                            {helpOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget range *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-background border border-border">
                            {budgetOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project and goals..."
                          rows={4}
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="accent"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Request"}
                </Button>
              </form>
            </Form>
          </TabsContent>

          {/* Email Us Tab */}
          <TabsContent value="email" className="p-6 pt-4">
            <div className="space-y-6">
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Prefer to email us directly?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Drop us a line and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-4">
                <Label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Email Address
                </Label>
                <div className="flex items-center gap-3">
                  <span className="text-foreground font-medium flex-1 truncate">
                    {contact.email}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyEmail}
                    className="shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-1" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <Button variant="accent" className="w-full" asChild>
                  <a href={`mailto:${contact.email}`}>Open Email Client</a>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Or call us at{" "}
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-accent hover:underline">
                  {contact.phone}
                </a>
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
