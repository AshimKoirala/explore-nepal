import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#ff6b35] text-white mb-4">
              ELITE HERITAGE
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Forged by{" "}
              <span className="text-[#ff6b35]">Military Excellence</span>
            </h1>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto text-pretty">
              Elite Exped was founded by former UKSF and Gurkha Regiment
              operators who transitioned their tactical expertise to the world's
              most challenging peaks.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-[#2a2a2a] border-[#404040]">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-[#ff6b35] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">PRECISION</h3>
                <p className="text-[#b0b0b0]">
                  Military-grade planning and execution for every expedition
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#2a2a2a] border-[#404040]">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-[#ff6b35] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">BROTHERHOOD</h3>
                <p className="text-[#b0b0b0]">
                  Unbreakable bonds forged through shared adversity
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#2a2a2a] border-[#404040]">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-[#ff6b35] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">EXCELLENCE</h3>
                <p className="text-[#b0b0b0]">
                  Uncompromising standards in safety and performance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Leadership */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-[#ff6b35]">Command</span> Structure
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Colonel James Mitchell",
                role: "Expedition Commander",
                background: "Former UKSF, 15+ years special operations",
                achievements: "Everest x3, K2 x2, Denali x8",
              },
              {
                name: "Major Sarah Chen",
                role: "Operations Director",
                background: "Ex-Royal Marines, Arctic warfare specialist",
                achievements: "First female to summit all 14 8000m peaks",
              },
              {
                name: "Captain Raj Gurung",
                role: "Lead Guide",
                background: "Gurkha Regiment veteran, Himalayan native",
                achievements: "200+ successful high-altitude expeditions",
              },
              {
                name: "Lieutenant Mark Thompson",
                role: "Safety Coordinator",
                background: "Former SAS medic, mountain rescue specialist",
                achievements: "Zero fatalities in 150+ expeditions",
              },
              {
                name: "Sergeant Lisa Rodriguez",
                role: "Training Director",
                background: "Ex-US Army Rangers, fitness specialist",
                achievements: "Developed Elite Exped training protocols",
              },
              {
                name: "Corporal David Kim",
                role: "Equipment Specialist",
                background: "Former Navy SEALs, gear technology expert",
                achievements: "Pioneered high-altitude equipment systems",
              },
            ].map((member, index) => (
              <Card key={index} className="bg-[#2a2a2a] border-[#404040]">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#ff6b35]">
                      {member.name}
                    </h3>
                    <p className="text-[#b0b0b0] font-medium">{member.role}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-[#d0d0d0]">{member.background}</p>
                    <p className="text-[#b0b0b0]">{member.achievements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-[#ff6b35]">Journey</span>
          </h2>
          <div className="space-y-12">
            {[
              {
                year: "2018",
                title: "Foundation",
                description:
                  "Elite Exped founded by former UKSF operators seeking to apply military precision to high-altitude mountaineering.",
              },
              {
                year: "2019",
                title: "First Expeditions",
                description:
                  "Successfully guided 15 clients to Everest summit with 100% success rate and zero incidents.",
              },
              {
                year: "2020",
                title: "Training Programs",
                description:
                  "Launched comprehensive pre-expedition training programs based on military fitness protocols.",
              },
              {
                year: "2021",
                title: "World Records",
                description:
                  "Team members set multiple speed ascent records on major peaks, establishing Elite Exped's reputation.",
              },
              {
                year: "2022",
                title: "Global Expansion",
                description:
                  "Extended operations to all seven summits and major ranges worldwide.",
              },
              {
                year: "2023",
                title: "Safety Innovation",
                description:
                  "Pioneered new safety protocols that became industry standard for high-altitude expeditions.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#ff6b35]">
                    {milestone.title}
                  </h3>
                  <p className="text-[#b0b0b0] text-lg">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            By the <span className="text-[#ff6b35]">Numbers</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Successful Summits" },
              { number: "98.7%", label: "Success Rate" },
              { number: "0", label: "Fatalities" },
              { number: "25", label: "Countries Operated" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#ff6b35] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#b0b0b0] text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
