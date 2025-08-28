import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Mountain,
  Clock,
  Users,
  MapPin,
  Calendar,
  Thermometer,
  Shield,
  Target,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Backpack,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrackById, type Track } from "@/lib/tracks-data";

const getDifficultyColor = (difficulty: Track["difficulty"]) => {
  switch (difficulty) {
    case "Extreme":
      return "bg-red-600 hover:bg-red-700";
    case "Advanced":
      return "bg-orange-600 hover:bg-orange-700";
    case "Intermediate":
      return "bg-yellow-600 hover:bg-yellow-700";
    case "Beginner":
      return "bg-green-600 hover:bg-green-700";
    default:
      return "bg-gray-600 hover:bg-gray-700";
  }
};

export default function TrackDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const track = getTrackById(params.id);

  if (!track) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link
              href="/tracks"
              className="text-[#ff6b35] hover:text-[#ff8c42] font-medium"
            >
              ← Back to Tracks
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <Badge
                  className={`${getDifficultyColor(
                    track.difficulty
                  )} text-white font-bold`}
                >
                  {track.difficulty}
                </Badge>
                <Badge className="bg-[#10b981] hover:bg-[#10b981] text-white font-bold">
                  {track.successRate} Success Rate
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-4 text-white text-balance">
                {track.name}
              </h1>

              <div className="flex items-center text-[#e5e7eb] mb-6">
                <MapPin className="w-5 h-5 mr-2 text-[#ff6b35]" />
                <span className="text-lg">{track.location}</span>
              </div>

              <p className="text-xl text-[#e5e7eb] leading-relaxed text-pretty">
                {track.detailedDescription}
              </p>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-4xl font-black text-[#ff6b35] mb-2">
                    {track.price}
                  </div>
                  <div className="text-[#e5e7eb] text-sm">Per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#e5e7eb]">
                      <Clock className="w-4 h-4 mr-2 text-[#10b981]" />
                      <span>Duration</span>
                    </div>
                    <span className="text-white font-semibold">
                      {track.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#e5e7eb]">
                      <Mountain className="w-4 h-4 mr-2 text-[#10b981]" />
                      <span>Elevation</span>
                    </div>
                    <span className="text-white font-semibold">
                      {track.elevation}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#e5e7eb]">
                      <Calendar className="w-4 h-4 mr-2 text-[#10b981]" />
                      <span>Season</span>
                    </div>
                    <span className="text-white font-semibold">
                      {track.season}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#e5e7eb]">
                      <Users className="w-4 h-4 mr-2 text-[#10b981]" />
                      <span>Group Size</span>
                    </div>
                    <span className="text-white font-semibold">
                      {track.groupSize}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#e5e7eb]">
                      <Thermometer className="w-4 h-4 mr-2 text-[#10b981]" />
                      <span>Summit Temp</span>
                    </div>
                    <span className="text-white font-semibold">
                      {track.temperature.summit}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-[#ff6b35] hover:bg-[#ff8c42] text-white font-bold py-3">
                    BOOK EXPEDITION
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white font-bold bg-transparent"
                  >
                    REQUEST INFO
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-16 bg-[#2d2d2d]">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="itinerary" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-[#3a3a3a] mb-8">
              <TabsTrigger
                value="itinerary"
                className="data-[state=active]:bg-[#ff6b35] data-[state=active]:text-white"
              >
                Itinerary
              </TabsTrigger>
              <TabsTrigger
                value="pricing"
                className="data-[state=active]:bg-[#ff6b35] data-[state=active]:text-white"
              >
                Pricing
              </TabsTrigger>
              <TabsTrigger
                value="requirements"
                className="data-[state=active]:bg-[#ff6b35] data-[state=active]:text-white"
              >
                Requirements
              </TabsTrigger>
              <TabsTrigger
                value="equipment"
                className="data-[state=active]:bg-[#ff6b35] data-[state=active]:text-white"
              >
                Equipment
              </TabsTrigger>
              <TabsTrigger
                value="risks"
                className="data-[state=active]:bg-[#ff6b35] data-[state=active]:text-white"
              >
                Risks
              </TabsTrigger>
            </TabsList>

            <TabsContent value="itinerary">
              <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Expedition Itinerary
                </h3>
                <div className="space-y-4">
                  {track.itinerary.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-[#2d2d2d] rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h4 className="text-white font-semibold">
                            {item.day}
                          </h4>
                          <Badge className="bg-[#10b981] hover:bg-[#10b981] text-white text-xs">
                            {item.location}
                          </Badge>
                        </div>
                        <p className="text-[#e5e7eb]">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="pricing">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2 text-[#10b981]" />
                    Included
                  </h3>
                  <ul className="space-y-3">
                    {track.pricing.includes.map((item, index) => (
                      <li
                        key={index}
                        className="text-[#e5e7eb] flex items-center"
                      >
                        <div className="w-2 h-2 bg-[#10b981] rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-2 text-[#ff6b35]" />
                    Not Included
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {track.pricing.excludes.map((item, index) => (
                      <li
                        key={index}
                        className="text-[#e5e7eb] flex items-center"
                      >
                        <div className="w-2 h-2 bg-[#ff6b35] rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-[#ff6b35]" />
                    Additional Options
                  </h4>
                  <div className="space-y-3">
                    {track.pricing.additionalCosts.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-[#2d2d2d] rounded"
                      >
                        <span className="text-[#e5e7eb]">{item.item}</span>
                        <span className="text-[#ff6b35] font-bold">
                          {item.cost}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="requirements">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-[#ff6b35]" />
                    Experience
                  </h3>
                  <ul className="space-y-2">
                    {track.requirements.experience.map((item, index) => (
                      <li
                        key={index}
                        className="text-[#e5e7eb] text-sm flex items-start"
                      >
                        <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full mr-2 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-[#ff6b35]" />
                    Training
                  </h3>
                  <ul className="space-y-2">
                    {track.requirements.training.map((item, index) => (
                      <li
                        key={index}
                        className="text-[#e5e7eb] text-sm flex items-start"
                      >
                        <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full mr-2 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Backpack className="w-5 h-5 mr-2 text-[#ff6b35]" />
                    Equipment
                  </h3>
                  <ul className="space-y-2">
                    {track.requirements.equipment.map((item, index) => (
                      <li
                        key={index}
                        className="text-[#e5e7eb] text-sm flex items-start"
                      >
                        <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full mr-2 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="equipment">
              <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Essential Equipment List
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {track.requirements.equipment.map((item, index) => (
                    <div key={index} className="p-4 bg-[#2d2d2d] rounded-lg">
                      <div className="flex items-center mb-2">
                        <Backpack className="w-5 h-5 mr-2 text-[#ff6b35]" />
                        <span className="text-white font-semibold">{item}</span>
                      </div>
                      <p className="text-[#e5e7eb] text-sm">
                        Professional grade equipment required for safety and
                        performance.
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[#2d2d2d] rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-4">
                    Equipment Rental Available
                  </h4>
                  <p className="text-[#e5e7eb] mb-4">
                    Professional-grade equipment rental packages available. All
                    equipment is maintained to military standards and regularly
                    inspected for safety.
                  </p>
                  <Button className="bg-[#ff6b35] hover:bg-[#ff8c42] text-white font-bold">
                    VIEW RENTAL OPTIONS
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="risks">
              <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-[#ff6b35]" />
                  Risk Assessment
                </h3>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4">
                      Primary Risks
                    </h4>
                    <ul className="space-y-3">
                      {track.risks.map((risk, index) => (
                        <li
                          key={index}
                          className="flex items-start p-3 bg-[#2d2d2d] rounded"
                        >
                          <AlertTriangle className="w-5 h-5 mr-3 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                          <span className="text-[#e5e7eb]">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-4">
                      Risk Mitigation
                    </h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-[#2d2d2d] rounded">
                        <h5 className="text-white font-semibold mb-2">
                          Military-Grade Safety Protocols
                        </h5>
                        <p className="text-[#e5e7eb] text-sm">
                          Comprehensive safety systems developed from military
                          operations and refined through decades of
                          high-altitude experience.
                        </p>
                      </div>

                      <div className="p-4 bg-[#2d2d2d] rounded">
                        <h5 className="text-white font-semibold mb-2">
                          Expert Guide Team
                        </h5>
                        <p className="text-[#e5e7eb] text-sm">
                          Proven track records in extreme conditions and
                          emergency response.
                        </p>
                      </div>

                      <div className="p-4 bg-[#2d2d2d] rounded">
                        <h5 className="text-white font-semibold mb-2">
                          Advanced Communication
                        </h5>
                        <p className="text-[#e5e7eb] text-sm">
                          Satellite communication systems and emergency
                          protocols ensure constant contact with support teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <Card className="bg-[#2d2d2d] border-[#ff6b35] p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-[#e5e7eb] mb-6 text-pretty">
              Join the elite ranks of mountaineers who have conquered the
              world's highest peaks with military precision and world-class
              expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#ff6b35] hover:bg-[#ff8c42] text-white font-bold px-8 py-4"
              >
                BOOK THIS EXPEDITION
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white font-bold px-8 py-4 bg-transparent"
              >
                SCHEDULE CONSULTATION
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
