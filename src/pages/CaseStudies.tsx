import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { caseStudies, pageMeta, ctaSections, navigation } from "@/config/siteConfig";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import type { CaseStudy } from "@/config/siteConfig";
import { useBookCall } from "@/contexts/BookCallContext";

function CaseStudyCard({ study, onOpenModal }: { study: CaseStudy; onOpenModal: (study: CaseStudy) => void }) {
  return (
    <article
      className="group bg-card rounded-xl overflow-hidden border border-border card-hover opacity-0 animate-fade-up"
      style={{ animationFillMode: "forwards" }}
    >
      {/* Thumbnail */}
      <div className="aspect-[16/10] bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground/40 font-display text-lg">{study.client}</span>
        </div>
        {/* Metric Badge */}
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm font-semibold shadow-md">
          {study.primaryMetric.value}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Industry */}
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {study.industry}
        </span>

        {/* Title */}
        <h3 className="text-lg font-display font-medium text-foreground mt-2 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
          {study.title}
        </h3>

        {/* Summary */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
          {study.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {study.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => onOpenModal(study)}
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}

function CaseStudyModal({
  study,
  isOpen,
  onClose,
}: {
  study: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { openBookCall } = useBookCall();

  if (!study) return null;

  const handleBookCall = () => {
    onClose();
    setTimeout(() => openBookCall(), 200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0" hideDefaultClose>
        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 relative">
          <DialogClose className="absolute top-4 right-4 rounded-full p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <DialogHeader>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-widest text-primary-foreground/60">
                {study.industry}
              </span>
              <span className="text-primary-foreground/40">•</span>
              <span className="text-xs uppercase tracking-widest text-primary-foreground/60">
                {study.client}
              </span>
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-display font-medium text-primary-foreground leading-tight">
              {study.title}
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/70 mt-3 text-base">
              {study.description}
            </DialogDescription>
          </DialogHeader>

          {/* Metrics */}
          <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-primary-foreground/10">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <span className="text-2xl font-display font-medium text-primary-foreground">
                  {metric.value}
                </span>
                <p className="text-xs text-primary-foreground/50 mt-0.5">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Problem */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              The Challenge
            </h4>
            <p className="text-foreground leading-relaxed">{study.problem}</p>
          </div>

          {/* Approach */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Our Approach
            </h4>
            <p className="text-foreground leading-relaxed">{study.approach}</p>
          </div>

          {/* Result */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              The Result
            </h4>
            <p className="text-foreground leading-relaxed">{study.result}</p>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Key Deliverables
            </h4>
            <ul className="space-y-2">
              {study.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-secondary rounded-xl p-6 text-center">
            <h4 className="text-lg font-display font-medium text-foreground mb-2">
              Ready to achieve similar results?
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Let's discuss how we can help transform your business.
            </p>
            <Button variant="accent" onClick={handleBookCall}>
              {navigation.cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openBookCall } = useBookCall();

  const handleOpenModal = (study: CaseStudy) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedStudy(null), 200);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-36 pb-20 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-8 opacity-0 animate-fade-up">
              {pageMeta.caseStudies.headline}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              {pageMeta.caseStudies.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CaseStudyCard study={study} onOpenModal={handleOpenModal} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 section-padding">
        <div className="container-wide">
          <div className="bg-primary rounded-2xl p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-primary-foreground mb-6">
              {ctaSections.caseStudies.title}
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-12">
              {ctaSections.caseStudies.description}
            </p>
            <Button variant="accent" size="lg" onClick={openBookCall} className="shadow-lg">
              {navigation.cta.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <CaseStudyModal
        study={selectedStudy}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Layout>
  );
};

export default CaseStudies;
