import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { Engagement } from "@/components/sections/Engagement";
import { Workshop } from "@/components/sections/Workshop";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { WhyTrust } from "@/components/sections/WhyTrust";
import { TechStack } from "@/components/sections/TechStack";
import { TeamLink } from "@/components/sections/TeamLink";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Hero />
      <Problems />
      <Services />
      <Engagement />
      <Workshop />
      <TrustSignals />
      <WhyTrust />
      <TechStack />
      <TeamLink />
      <CTA />
    </div>
  );
}
