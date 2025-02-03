import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;