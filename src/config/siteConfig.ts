// ============================================================
// SITE CONFIGURATION
// Edit this file to customize all content across the site.
// ============================================================

import { 
  Lightbulb, 
  Palette, 
  Code, 
  BarChart3, 
  Rocket, 
  Users,
  BookOpen,
  MessageSquare,
  Settings,
  Zap,
  Sparkles,
  Layers,
  Mail,
  LucideIcon
} from "lucide-react";

// ============================================================
// BRAND
// ============================================================
export const brand = {
  name: "GoLive",
  tagline: "We build brands that move markets.",
  description: "GoLive is a strategic creative agency for ambitious companies ready to transform their digital presence and capture market leadership.",
  foundingYear: 2020,
};

// ============================================================
// NAVIGATION
// ============================================================
export const navigation = {
  links: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  cta: {
    label: "Book a Call",
    href: "/contact",
  },
};

// ============================================================
// HERO SECTION
// ============================================================
export const hero = {
  headline: "We build brands that",
  headlineAccent: "move markets.",
  subheadline: "GoLive is a strategic creative agency for ambitious companies ready to transform their digital presence and capture market leadership.",
  primaryCta: {
    label: "Book a Call",
    href: "/contact",
  },
  secondaryCta: {
    label: "View Our Work",
    href: "/case-studies",
  },
};

// ============================================================
// SOCIAL PROOF / TRUSTED BY
// ============================================================
export const socialProof = {
  title: "Trusted by industry leaders",
  logos: [
    { name: "Stripe" },
    { name: "Notion" },
    { name: "Figma" },
    { name: "Linear" },
    { name: "Vercel" },
    { name: "Framer" },
  ],
};

// ============================================================
// SERVICES
// ============================================================
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "Define your market position and craft a narrative that resonates with your ideal customers.",
    features: [
      "Competitive analysis & market positioning",
      "Brand architecture & messaging framework",
      "Value proposition development",
      "Customer persona development",
    ],
  },
  {
    icon: Palette,
    title: "Visual Identity",
    description: "Create distinctive brand systems that communicate your values at every touchpoint.",
    features: [
      "Logo design & visual identity systems",
      "Brand guidelines & asset libraries",
      "Marketing collateral design",
      "Packaging & environmental design",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build high-performance websites and applications that convert visitors into customers.",
    features: [
      "Custom website design & development",
      "E-commerce platforms",
      "Web application development",
      "CMS implementation & optimization",
    ],
  },
  {
    icon: BarChart3,
    title: "Growth Marketing",
    description: "Data-driven campaigns that accelerate customer acquisition and retention.",
    features: [
      "Paid media strategy & management",
      "SEO & content marketing",
      "Marketing automation",
      "Analytics & attribution modeling",
    ],
  },
  {
    icon: Rocket,
    title: "Product Design",
    description: "User-centered design that creates intuitive digital experiences people love.",
    features: [
      "UX research & strategy",
      "UI design & prototyping",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    icon: Users,
    title: "Content Strategy",
    description: "Develop compelling content that builds authority and drives organic growth.",
    features: [
      "Content audit & strategy",
      "Editorial planning",
      "Copywriting & storytelling",
      "Video & multimedia production",
    ],
  },
];

// ============================================================
// PROCESS
// ============================================================
export const process = {
  title: "Our process",
  subtitle: "A proven methodology refined over hundreds of successful engagements.",
  steps: [
    {
      number: "01",
      title: "Discover",
      description: "We dive deep into your business, market, and audience to uncover insights that inform strategy.",
    },
    {
      number: "02",
      title: "Design",
      description: "We craft solutions that balance creativity with commercial objectives, iterating until it's right.",
    },
    {
      number: "03",
      title: "Deliver",
      description: "We launch, measure, and optimize—ensuring your investment generates measurable returns.",
    },
  ],
};

// ============================================================
// CASE STUDIES
// ============================================================
export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  description: string;
  thumbnail?: string;
  primaryMetric: { label: string; value: string };
  metrics: { label: string; value: string }[];
  tags: string[];
  featured: boolean;
  // Modal content
  problem: string;
  approach: string;
  result: string;
  deliverables: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "vertex-analytics",
    client: "Vertex Analytics",
    industry: "Enterprise Software",
    title: "Scaling to $50M ARR with a Complete Brand Transformation",
    description: "We repositioned Vertex from a generic analytics tool to the definitive enterprise platform, driving 340% growth in qualified leads.",
    primaryMetric: { label: "Lead increase", value: "+340%" },
    metrics: [
      { label: "Lead increase", value: "340%" },
      { label: "Conversion rate", value: "2.4x" },
      { label: "ARR achieved", value: "$50M" },
    ],
    tags: ["Brand Strategy", "Web Development", "Growth Marketing"],
    featured: true,
    problem: "Vertex had a powerful analytics platform but was struggling to differentiate in a crowded market. Their brand felt generic, and enterprise buyers couldn't understand their unique value proposition.",
    approach: "We conducted extensive market research and competitor analysis. We repositioned Vertex as the 'enterprise-grade' solution with a complete visual overhaul, new messaging framework, and a website redesign focused on conversion.",
    result: "Within 6 months, Vertex saw a 340% increase in qualified leads and achieved their $50M ARR target ahead of schedule. The new positioning opened doors to Fortune 500 accounts.",
    deliverables: [
      "Complete brand strategy and positioning",
      "Visual identity system and guidelines",
      "High-conversion website design and development",
      "Sales enablement materials and pitch deck",
    ],
  },
  {
    id: "streamline",
    client: "Streamline",
    industry: "Fintech",
    title: "Launching a Fintech Disruptor in 90 Days",
    description: "From concept to market-ready brand, we helped Streamline enter a crowded market with a distinctive presence.",
    primaryMetric: { label: "Seed funding", value: "$12M" },
    metrics: [
      { label: "Time to market", value: "90 days" },
      { label: "Seed funding", value: "$12M" },
      { label: "User signups", value: "15K+" },
    ],
    tags: ["Brand Strategy", "Visual Identity", "Product Design"],
    featured: false,
    problem: "Streamline's founders had a revolutionary payment processing idea but needed a complete brand and digital presence to attract investors and early adopters in a highly regulated market.",
    approach: "We ran an accelerated brand sprint, developing positioning, visual identity, and product design in parallel. Our team worked embedded with founders to ensure regulatory compliance while maintaining a fresh, approachable feel.",
    result: "Streamline launched in 90 days, closed a $12M seed round within 60 days of launch, and acquired 15,000+ users in the first quarter. The brand became a case study for fintech startups.",
    deliverables: [
      "Brand strategy and naming",
      "Visual identity and UI kit",
      "Product design (mobile and web apps)",
      "Investor pitch materials",
    ],
  },
  {
    id: "datapulse",
    client: "DataPulse",
    industry: "Healthcare Tech",
    title: "Redefining Healthcare Data for Enterprise Buyers",
    description: "A complete rebrand and digital overhaul that positioned DataPulse as the trusted partner for healthcare organizations.",
    primaryMetric: { label: "Pipeline growth", value: "+280%" },
    metrics: [
      { label: "Pipeline growth", value: "280%" },
      { label: "Sales cycle", value: "-40%" },
      { label: "Contract value", value: "2x" },
    ],
    tags: ["Brand Strategy", "Web Development", "Content Strategy"],
    featured: false,
    problem: "DataPulse had strong technology but their brand felt clinical and cold. Enterprise healthcare buyers needed to trust them with sensitive data, but the brand didn't inspire confidence.",
    approach: "We developed a 'trusted partner' positioning that balanced professionalism with warmth. The new website featured case studies, security certifications prominently, and a content strategy focused on thought leadership.",
    result: "The rebrand led to 280% pipeline growth, shortened sales cycles by 40%, and doubled average contract values. DataPulse is now recognized as a category leader.",
    deliverables: [
      "Brand repositioning and messaging",
      "Website redesign with compliance focus",
      "Content marketing strategy and execution",
      "Sales collateral and case study templates",
    ],
  },
  {
    id: "nexus",
    client: "Nexus",
    industry: "B2B SaaS",
    title: "Building a Category-Defining Brand from Scratch",
    description: "We partnered with Nexus from day one to create a brand that would define a new category in workflow automation.",
    primaryMetric: { label: "Brand awareness", value: "+450%" },
    metrics: [
      { label: "Brand awareness", value: "+450%" },
      { label: "Website traffic", value: "8x" },
      { label: "Demo requests", value: "320%" },
    ],
    tags: ["Brand Strategy", "Visual Identity", "Web Development"],
    featured: false,
    problem: "Nexus was entering a nascent market for workflow automation. They needed to educate the market while positioning themselves as the obvious leader—before competitors could establish themselves.",
    approach: "We created category-defining messaging, positioning Nexus not just as a tool but as a movement. The bold visual identity and content strategy focused on thought leadership and community building.",
    result: "Nexus achieved 450% brand awareness growth in their target market, drove 8x website traffic, and saw demo requests increase by 320%. They're now the recognized category leader.",
    deliverables: [
      "Category creation strategy",
      "Bold visual identity system",
      "Community-focused website",
      "Thought leadership content program",
    ],
  },
  {
    id: "elevate-consulting",
    client: "Elevate Consulting",
    industry: "Professional Services",
    title: "Modernizing a Legacy Consulting Firm",
    description: "We helped a 30-year-old consulting firm reinvent their brand for the digital age without losing their heritage.",
    primaryMetric: { label: "New client inquiries", value: "+180%" },
    metrics: [
      { label: "New inquiries", value: "+180%" },
      { label: "Talent applications", value: "3x" },
      { label: "Client NPS", value: "+25 pts" },
    ],
    tags: ["Brand Strategy", "Visual Identity", "Web Development"],
    featured: false,
    problem: "Elevate Consulting had 30 years of expertise but their brand felt dated. They were losing pitches to newer, digitally-savvy competitors and struggling to attract top talent.",
    approach: "We honored their heritage while modernizing every touchpoint. The new brand balanced gravitas with approachability, and the digital experience showcased their thought leadership and case studies.",
    result: "New client inquiries increased 180%, talent applications tripled, and client NPS improved by 25 points. Partners credited the rebrand with revitalizing firm culture.",
    deliverables: [
      "Brand refresh maintaining heritage",
      "Modern visual identity system",
      "Content-rich website with partner profiles",
      "Recruitment marketing materials",
    ],
  },
  {
    id: "quantum-labs",
    client: "Quantum Labs",
    industry: "Deep Tech",
    title: "Making Quantum Computing Accessible",
    description: "We translated complex quantum technology into compelling brand communications that resonated with both technical and business audiences.",
    primaryMetric: { label: "Enterprise deals", value: "+200%" },
    metrics: [
      { label: "Enterprise deals", value: "+200%" },
      { label: "Media coverage", value: "50+ outlets" },
      { label: "Conference leads", value: "4x" },
    ],
    tags: ["Brand Strategy", "Content Strategy", "Web Development"],
    featured: false,
    problem: "Quantum Labs had groundbreaking technology but struggled to communicate its value to non-technical buyers. Their materials were too complex for business decision-makers.",
    approach: "We developed a layered communication strategy: simple narratives for executives, detailed specs for technical teams. The brand balanced 'cutting-edge' with 'practical business value.'",
    result: "Enterprise deal flow increased 200%, media coverage expanded to 50+ outlets, and conference lead generation quadrupled. Quantum Labs became the 'explainer' brand in quantum computing.",
    deliverables: [
      "Multi-audience messaging framework",
      "Explanatory video series",
      "Technical and executive websites",
      "Conference booth and materials design",
    ],
  },
];

// Featured case study for homepage
export const featuredCaseStudy = {
  label: "Featured Case Study",
  client: "Vertex",
  title: "How we helped Vertex scale to $50M ARR",
  description: "A complete brand transformation and digital overhaul that positioned Vertex as the market leader in enterprise analytics, driving 340% growth in qualified leads.",
  metrics: [
    { label: "Lead increase", value: "340%" },
    { label: "Conversion rate", value: "2.4x" },
    { label: "ARR achieved", value: "$50M" },
  ],
  ctaLabel: "Read the full story",
  ctaHref: "/case-studies",
};

// ============================================================
// TESTIMONIALS
// ============================================================
export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "GoLive transformed how we think about our brand. The results speak for themselves—our pipeline has never been stronger.",
    author: "Sarah Chen",
    title: "CEO, Vertex Analytics",
  },
  {
    quote: "Working with GoLive felt like having an elite team embedded in our company. They understood our market better than we did.",
    author: "Marcus Thompson",
    title: "Founder, Streamline",
  },
  {
    quote: "The ROI on our engagement was clear within 90 days. GoLive delivers on their promises.",
    author: "Elena Rodriguez",
    title: "CMO, DataPulse",
  },
];

// ============================================================
// FAQ
// ============================================================
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What types of companies do you work with?",
    answer: "We partner with growth-stage startups, established mid-market companies, and enterprise organizations across B2B technology, fintech, healthcare, and professional services. Our sweet spot is companies ready to invest seriously in their brand and digital presence.",
  },
  {
    question: "How long does a typical engagement last?",
    answer: "Most strategic engagements run 3-6 months depending on scope. Brand strategy and identity projects typically take 8-12 weeks. Web development projects range from 6-16 weeks. We also offer ongoing retainer relationships for companies seeking continuous partnership.",
  },
  {
    question: "What's your pricing model?",
    answer: "We price based on value and scope, not hours. After our discovery process, we provide fixed-fee proposals so you have complete clarity on investment. Our engagements typically start at $50K for focused projects and scale based on complexity.",
  },
  {
    question: "Do you work with clients outside the US?",
    answer: "Absolutely. We work with companies globally and have experience navigating cross-cultural branding challenges. Our team is distributed, allowing us to support clients across time zones effectively.",
  },
  {
    question: "What makes GoLive different from other agencies?",
    answer: "We combine strategic rigor with creative excellence. Unlike pure creative shops, we ground every decision in business outcomes. Unlike consultancies, we execute beautifully. Our senior team leads every engagement—no bait-and-switch with junior staff.",
  },
  {
    question: "How do we get started?",
    answer: "Start with a discovery call. We'll learn about your business, discuss your goals, and assess fit. If there's mutual alignment, we'll propose a scope and timeline. No lengthy RFP processes required—we move fast.",
  },
];

// ============================================================
// CONTACT & BOOKING
// ============================================================
export const contact = {
  email: "hello@golive.agency",
  phone: "+1 (415) 555-1234",
  address: {
    street: "548 Market Street, Suite 12345",
    city: "San Francisco",
    state: "CA",
    zip: "94104",
  },
  formTitle: "Send us a message",
  formSubtitle: "We respond to every inquiry within 24 hours.",
};

export const booking = {
  calendlyUrl: "https://calendly.com", // Replace with your actual Calendly link
  ctaTitle: "Prefer to talk live?",
  ctaDescription: "Schedule a free 30-minute strategy call with our team.",
  ctaLabel: "Book a Call",
};

// ============================================================
// SOCIAL LINKS
// ============================================================
export const socialLinks = [
  { name: "Twitter", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
];

// ============================================================
// FOOTER
// ============================================================
export const footer = {
  description: "We help ambitious brands transform their digital presence and achieve measurable growth.",
  links: {
    company: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/contact", label: "Contact" },
    ],
    resources: [
      { href: "/getting-started", label: "Getting Started" },
      { href: "/contact", label: "Support" },
    ],
    legal: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
    ],
  },
};

// ============================================================
// ABOUT PAGE
// ============================================================
export const about = {
  headline: "We're GoLive",
  subheadline: "A strategic creative agency that helps ambitious companies build brands that capture markets. We combine deep strategic thinking with world-class execution.",
  story: {
    title: "Our story",
    paragraphs: [
      "GoLive was founded on a simple premise: the best brands are built at the intersection of strategy and creativity. Too often, companies choose between agencies that think well and agencies that design well.",
      "We started GoLive to prove you don't have to choose. Our team combines deep business acumen with exceptional creative talent, delivering work that's both strategically sound and beautifully executed.",
      "Since our founding, we've partnered with over 100 companies—from pre-seed startups to public enterprises—helping them clarify their positioning, strengthen their presence, and accelerate their growth.",
    ],
  },
  values: {
    title: "What we believe",
    subtitle: "Our values guide every decision we make and every relationship we build.",
    items: [
      {
        title: "Excellence over everything",
        description: "We don't do 'good enough.' Every deliverable reflects our commitment to craft and quality.",
      },
      {
        title: "Results-obsessed",
        description: "Beautiful work is meaningless without business impact. We measure success by your growth.",
      },
      {
        title: "Radical honesty",
        description: "We'll tell you what you need to hear, not what you want to hear. Trust is built on truth.",
      },
      {
        title: "Long-term thinking",
        description: "We build brands and relationships that compound over time. No shortcuts, no quick fixes.",
      },
    ],
  },
  team: {
    title: "Leadership team",
    subtitle: "Senior professionals who lead every engagement. No bait-and-switch.",
    members: [
      {
        name: "Alexandra Chen",
        role: "Founder & CEO",
        bio: "Former McKinsey consultant with 15+ years building brands for Fortune 500 companies and high-growth startups.",
      },
      {
        name: "Marcus Williams",
        role: "Creative Director",
        bio: "Award-winning designer who's shaped visual identities for some of the world's most recognized technology brands.",
      },
      {
        name: "Sarah Okonkwo",
        role: "Head of Strategy",
        bio: "Brand strategist with a track record of positioning companies for successful exits and market leadership.",
      },
      {
        name: "David Park",
        role: "Technical Director",
        bio: "Engineering leader who's built and scaled digital products for companies from seed stage to IPO.",
      },
    ],
  },
};

// ============================================================
// GETTING STARTED PAGE (Template Customization Guide)
// ============================================================
export const gettingStarted = {
  headline: "Customize your template",
  subheadline: "Everything you need to make this template your own. Most changes can be made in one file: src/config/siteConfig.ts",
  configPath: "src/config/siteConfig.ts",
  sections: [
    {
      icon: Palette,
      title: "1. Brand & Logo",
      description: "Update your agency name, tagline, and description.",
      code: `// Find the 'brand' object
export const brand = {
  name: "Your Agency",
  tagline: "Your tagline here",
  description: "Your description...",
  foundedYear: 2024,
};`,
      tip: "For the logo, replace the text in Header.tsx or add your logo image to src/assets/",
    },
    {
      icon: Sparkles,
      title: "2. Hero & CTAs",
      description: "Change the main headline and call-to-action buttons.",
      code: `// Find the 'hero' object
export const hero = {
  headline: "Your headline",
  subheadline: "Your subheadline...",
  primaryCta: { label: "Get Started", href: "#" },
  secondaryCta: { label: "View Work", href: "/case-studies" },
};`,
      tip: "Keep headlines concise—under 10 words works best.",
    },
    {
      icon: Layers,
      title: "3. Services & Process",
      description: "Define your service offerings and how you work.",
      code: `// Find the 'services' array
export const services: Service[] = [
  {
    icon: Globe,
    title: "Service Name",
    description: "What you do...",
    features: ["Feature 1", "Feature 2"],
  },
];`,
      tip: "Use icons from lucide-react. Import them at the top of the file.",
    },
    {
      icon: BarChart3,
      title: "4. Case Studies & Metrics",
      description: "Showcase your best work with real results.",
      code: `// Find the 'caseStudies' array
{
  id: "unique-id",
  client: "Client Name",
  industry: "Industry",
  title: "Project Title",
  summary: "Brief description...",
  primaryMetric: "+50% growth",
  metrics: ["Metric 1", "Metric 2"],
  tags: ["Tag1", "Tag2"],
  problem: "The challenge...",
  approach: "How you solved it...",
  result: "The outcome...",
  deliverables: ["Item 1", "Item 2"],
}`,
      tip: "Lead with your strongest metrics. Numbers build trust.",
    },
    {
      icon: MessageSquare,
      title: "5. Testimonials & FAQ",
      description: "Add social proof and answer common questions.",
      code: `// Find 'testimonials' and 'faqs' arrays
testimonials: [
  { quote: "...", author: "Name", title: "Role, Company" }
]
faqs: [
  { question: "...", answer: "..." }
]`,
      tip: "3-5 testimonials is ideal. Keep FAQ answers concise.",
    },
    {
      icon: Mail,
      title: "6. Contact & Booking",
      description: "Set up your contact info and booking link.",
      code: `// Find 'contact' and 'booking' objects
export const contact = {
  email: "hello@youragency.com",
  phone: "+1 (555) 000-0000",
  address: "Your City, Country",
};

export const booking = {
  calendlyUrl: "https://calendly.com/your-link",
};`,
      tip: "The booking URL can link to Calendly, Cal.com, or any scheduling tool.",
    },
  ],
  publishChecklist: {
    title: "Before you publish",
    items: [
      { label: "Test on mobile devices", description: "Check all pages at different screen sizes" },
      { label: "Verify all links work", description: "Navigation, CTAs, and footer links" },
      { label: "Test the contact form", description: "Submit a test request and check localStorage" },
      { label: "Update meta titles", description: "Edit pageMeta in siteConfig.ts for SEO" },
      { label: "Add your favicon", description: "Replace public/favicon.ico with your logo" },
      { label: "Review all placeholder text", description: "Search for 'Lorem' or sample content" },
    ],
  },
  footer: {
    title: "You're ready!",
    description: "That's it—you've got everything you need. Most customization happens in one file, making updates fast and painless.",
  },
};

// ============================================================
// PAGE TITLES & META (for SEO)
// ============================================================
export const pageMeta = {
  home: {
    title: `${brand.name} | Strategic Creative Agency for Growth`,
    description: brand.description,
  },
  services: {
    title: "Services | " + brand.name,
    headline: "Services built for growth",
    subheadline: "End-to-end capabilities designed to help ambitious companies capture market leadership and accelerate growth.",
  },
  caseStudies: {
    title: "Case Studies | " + brand.name,
    headline: "Work that delivers results",
    subheadline: "We measure success by the growth of our partners. Explore how we've helped ambitious companies transform their brands and accelerate their trajectory.",
  },
  about: {
    title: "About | " + brand.name,
  },
  contact: {
    title: "Contact | " + brand.name,
    headline: "Let's talk",
    subheadline: "Ready to transform your brand? Book a free strategy call or send us a message. We respond to every inquiry within 24 hours.",
  },
  gettingStarted: {
    title: "Getting Started | " + brand.name,
  },
};

// ============================================================
// CTA SECTIONS
// ============================================================
export const ctaSections = {
  services: {
    title: "Not sure where to start?",
    description: "Book a free strategy call and we'll help you identify the highest-impact opportunities for your business.",
  },
  caseStudies: {
    title: "Ready to be our next success story?",
    description: "Let's discuss how we can help you achieve similar results for your business.",
  },
  about: {
    title: "Want to work together?",
    description: "We're always looking for ambitious projects and talented people. Get in touch.",
    secondaryCta: {
      label: "View Open Roles",
      href: "/contact",
    },
  },
  home: {
    title: "Ready to transform your brand?",
    description: "Let's discuss how we can help you achieve your growth objectives. Book a free strategy call with our team.",
  },
  gettingStarted: {
    title: "Ready to get started?",
    description: "Book a free discovery call and let's explore how we can help you achieve your goals.",
  },
};
