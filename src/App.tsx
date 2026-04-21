import { Benchmark } from "./components/Benchmark";
import { Credibility } from "./components/Credibility";
import { FaqAndForm } from "./components/FaqAndForm";
import { FinalCta } from "./components/FinalCta";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Nav } from "./components/Nav";
import { Pricing } from "./components/Pricing";
import { SiteFooter } from "./components/SiteFooter";
import { WhyItWorks } from "./components/WhyItWorks";
import { useTheme } from "./useTheme";

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <Hero />
      <Credibility />
      <Benchmark />
      <HowItWorks />
      <WhyItWorks />
      <Pricing />
      <FaqAndForm />
      <FinalCta />
      <SiteFooter />
    </>
  );
}
