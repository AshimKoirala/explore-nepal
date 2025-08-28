import { Card } from "@/components/ui/card";

export function Leadership() {
  return (
    <section id="team" className="py-20 bg-[#2d2d2d]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            LEADING FROM THE <span className="text-[#ff6b35]">FRONT</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-[#e5e7eb] text-center leading-relaxed text-pretty">
            Our company directors,{" "}
            <strong className="text-[#ff6b35]">Ram Bahadur</strong>,{" "}
            <strong className="text-[#ff6b35]">Mingma David</strong> and{" "}
            <strong className="text-[#ff6b35]">Mingma Tenzi</strong>, prefer to
            lead in another way, from the front. Our Directors have a combined
            record of over{" "}
            <strong className="text-[#10b981]">
              70 successful summits above 8000 meter peaks
            </strong>{" "}
            whilst also conducting multiple rescues on some of the worlds
            tallest mountains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6 text-center">
            <div className="mb-4">
              <img
                src="/professional-mountaineer-portrait--serious-express.png"
                alt="Nimsdai"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#ff6b35]"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ram Bahadur</h3>
            <p className="text-[#ff6b35] font-semibold mb-2">
              {" "}
              Territorial Expert
            </p>
            <p className="text-[#e5e7eb] text-sm">
              10+ years of experties as Territorial Expert
            </p>
          </Card>

          <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6 text-center">
            <div className="mb-4">
              <img
                src="/professional-mountaineer-portrait--determined-expr.png"
                alt="Mingma David"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#ff6b35]"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">MINGMA DAVID</h3>
            <p className="text-[#ff6b35] font-semibold mb-2">Expert GUIDE</p>
            <p className="text-[#e5e7eb] text-sm">
              25+ 8000m Summits • Rescue Specialist
            </p>
          </Card>

          <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6 text-center">
            <div className="mb-4">
              <img
                src="/professional-mountaineer-portrait--confident-expre.png"
                alt="Mingma Tenzi"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#ff6b35]"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">MINGMA TENZI</h3>
            <p className="text-[#ff6b35] font-semibold mb-2">
              TECHNICAL DIRECTOR
            </p>
            <p className="text-[#e5e7eb] text-sm">
              Expert Climber • Safety Coordinator
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
