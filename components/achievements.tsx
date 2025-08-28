import { Card } from "@/components/ui/card";
import { Trophy, Shield, Mountain, Users } from "lucide-react";

export function Achievements() {
  const stats = [
    {
      icon: Mountain,
      number: "70+",
      label: "Successful 8000m+ Summits",
      description: "Combined team achievements",
    },
    {
      icon: Shield,
      number: "100%",
      label: "Safety Record",
      description: "Perfect expedition safety",
    },
    {
      icon: Trophy,
      number: "Multiple",
      label: "World Records",
      description: "Ground-breaking achievements",
    },
    // {
    //   icon: Users,
    //   number: "UKSF",
    //   label: "Military Heritage",
    //   description: "Elite forces background",
    // },
  ];

  return (
    <section id="records" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            PROVEN <span className="text-[#ff6b35]">EXCELLENCE</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mb-8"></div>
          <p className="text-xl text-[#e5e7eb] max-w-3xl mx-auto text-pretty">
            Our achievements speak louder than words. Military precision meets
            mountaineering excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-[#2d2d2d] border-[#3a3a3a] p-6 text-center hover:border-[#ff6b35]/50 transition-colors"
            >
              <div className="mb-4">
                <stat.icon className="w-12 h-12 text-[#ff6b35] mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-black text-[#10b981] mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-[#e5e7eb] text-sm">{stat.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-[#2d2d2d] border-[#ff6b35]/20 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              MILITARY HERITAGE
            </h3>
            <p className="text-[#e5e7eb] text-lg leading-relaxed text-pretty">
              Our leadership combines{" "}
              <strong className="text-[#ff6b35]">
                UKSF (United Kingdom Special Forces)
              </strong>{" "}
              and <strong className="text-[#ff6b35]">Gurkha</strong> military
              training with world-class mountaineering expertise. This unique
              combination of military discipline, tactical precision, and
              extreme environment experience sets us apart in the adventure
              industry.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
