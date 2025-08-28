import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/dramatic-mountain-peak-with-climbers-in-extreme-we.png"
          alt="Elite mountaineers on extreme expedition"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/50 to-[#1a1a1a]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight text-balance">
          HIGH-ALTITUDE ADVENTURES
          <span className="block text-[#ff6b35]">LED FROM THE FRONT</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#e5e7eb] mb-8 max-w-3xl mx-auto text-pretty">
          Ground-breaking mountaineers with military precision. World records.
          Perfect safety.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#ff6b35] hover:bg-[#ff8c42] text-white font-bold px-8 py-4 text-lg border-0"
          >
            <Link href="/tracks">ACHIEVE YOUR NEW POSSIBLE</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white font-bold px-8 py-4 text-lg bg-transparent"
          >
            <Link href="/tracks">VIEW EXPEDITIONS</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#e5e7eb] animate-bounce">
        <div className="w-6 h-10 border-2 border-[#e5e7eb] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#e5e7eb] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
