import Features from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import FeaturesSection from "@/components/features-7";
import Features5 from "@/components/features-5";
export default function Home() {
  return (
    <div className="relative">
      {/* Conteneur principal avec le dégradé de fond */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FF] via-[#F3F1FF] to-pink-50/95" />
        <div className="absolute inset-0 isolate opacity-90">
          {/* Gradient bleuté en haut */}
          <div className="w-[1400px] h-[1400px] absolute left-0 top-0 -translate-x-1/4 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(214,219,255,0.5)_0%,rgba(214,219,255,0.1)_45%,transparent_100%)]" />
          {/* Gradient violet au centre */}
          <div className="w-[1200px] h-[1200px] absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(233,213,255,0.4)_0%,rgba(233,213,255,0.1)_45%,transparent_100%)]" />
          {/* Gradient rose-violet en bas */}
          <div className="w-[1000px] h-[1000px] absolute right-0 bottom-0 translate-x-1/4 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(252,231,243,0.4)_0%,rgba(252,231,243,0.1)_45%,transparent_100%)]" />
          {/* Gradient bleuté supplémentaire */}
          <div className="w-[800px] h-[800px] absolute right-1/4 top-1/4 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(224,236,255,0.35)_0%,rgba(224,236,255,0.1)_45%,transparent_100%)]" />
        </div>
        <div className="relative">
          <HeroSection />
          <Features />
          <Features5 />
        
          <FeaturesSection />
          <CallToAction />
        </div>
      </div>
      <FooterSection/>
    </div>
  );
}
