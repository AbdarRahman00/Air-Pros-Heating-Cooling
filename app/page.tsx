import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { FinancingSection, MaintenanceSection } from "@/components/sections/FinancingAndMaintenance";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <CustomerReviews />
      <FinancingSection />
      <MaintenanceSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}

