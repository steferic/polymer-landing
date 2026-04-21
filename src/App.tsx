import { useEffect } from "react";
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

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isEditable =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable;

      if (isEditable || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const key = event.key.toLowerCase();
      const sectionId = key === "p" ? "benchmark" : key === "r" ? "request" : null;
      if (!sectionId) {
        return;
      }

      const section = document.getElementById(sectionId);
      if (!section) {
        return;
      }

      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${sectionId}`);
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

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
