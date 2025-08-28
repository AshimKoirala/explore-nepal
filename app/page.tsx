import { Hero } from "@/components/hero";
import { Leadership } from "@/components/leadership";
import { Achievements } from "@/components/achievements";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <main>
        <Hero />
        <Leadership />
        <Achievements />
        <Services />
      </main>
    </div>
  );
}
