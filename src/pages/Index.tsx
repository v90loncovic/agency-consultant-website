import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Process } from "@/components/home/Process";
import { FeaturedCaseStudy } from "@/components/home/FeaturedCaseStudy";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABand } from "@/components/home/CTABand";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SocialProof />
      <ServicesOverview />
      <Process />
      <FeaturedCaseStudy />
      <Testimonials />
      <FAQ />
      <CTABand />
    </Layout>
  );
};

export default Index;
