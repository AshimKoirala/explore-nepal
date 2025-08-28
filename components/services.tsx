import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mountain,
  Users,
  Briefcase,
  LifeBuoy,
  GraduationCap,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Mountain,
      title: "Elite Guided Expeditions",
      description:
        "Premium 8000m+ peak expeditions with world-class leadership and military-grade safety protocols.",
      features: [
        "1:1 Guide Ratio Available",
        "Military Safety Standards",
        "World Record Holders",
      ],
    },
    {
      icon: Users,
      title: "1:1 Premium Guiding",
      description:
        "Exclusive personal guiding service for the most demanding clients and challenging objectives.",
      features: [
        "Personal Director Guidance",
        "Customized Itineraries",
        "Maximum Safety Focus",
      ],
    },
    {
      icon: Briefcase,
      title: "Commercial Projects",
      description:
        "Professional expedition support for media, corporate, and documentary productions.",
      features: [
        "Film & Media Support",
        "Corporate Adventures",
        "Brand Partnerships",
      ],
    },
    {
      icon: LifeBuoy,
      title: "Rescue Operations",
      description:
        "Elite rescue capabilities drawing on military training and high-altitude expertise.",
      features: [
        "Emergency Response",
        "Technical Rescue",
        "Medical Evacuation",
      ],
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description:
        "Military-inspired training programs for aspiring elite mountaineers and guides.",
      features: [
        "Technical Skills",
        "Safety Protocols",
        "Leadership Development",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#2d2d2d]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            <span className="text-[#ff6b35]">SERVICES</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mb-8"></div>
          <p className="text-xl text-[#e5e7eb] max-w-3xl mx-auto text-pretty">
            Uncompromising quality. Military precision. World-class expertise.
            Choose your path to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6 hover:border-[#ff6b35]/50 transition-colors"
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-[#ff6b35]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#e5e7eb] mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-[#10b981] text-sm flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#ff6b35] hover:bg-[#ff8c42] text-white font-bold border-0">
                LEARN MORE
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-[#1a1a1a] border-[#ff6b35] p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              READY FOR YOUR NEXT CHALLENGE?
            </h3>
            <p className="text-[#e5e7eb] mb-6 text-pretty">
              Join us. Experience what it means to be led from the front by
              world record holders and military veterans.
            </p>
            <Button
              size="lg"
              className="bg-[#ff6b35] hover:bg-[#ff8c42] text-white font-bold px-8 py-4 text-lg border-0"
            >
              START YOUR EXPEDITION
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
