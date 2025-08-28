import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mountain, Clock, Users, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { getAllTracks, type Track } from "@/lib/tracks-data";

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

export default function TracksPage() {
  const tracks = getAllTracks();

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
              <span className="text-[#ff6b35]">TRACKS</span>
            </h1>
            <div className="w-24 h-1 bg-[#ff6b35] mx-auto mb-8"></div>
            <p className="text-xl text-[#e5e7eb] max-w-4xl mx-auto text-pretty">
              World-class mountaineering expeditions led by military veterans
              and world record holders. Choose your path to greatness.
            </p>
          </div>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="py-16 bg-[#2d2d2d]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track) => (
              <Card
                key={track.id}
                className="bg-[#3a3a3a] border-[#ff6b35]/20 overflow-hidden hover:border-[#ff6b35]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] flex items-center justify-center">
                  <Mountain className="w-16 h-16 text-[#ff6b35]/50" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${getDifficultyColor(
                        track.difficulty
                      )} text-white font-bold`}
                    >
                      {track.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white text-balance">
                      {track.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-black text-[#ff6b35]">
                        {track.price}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-[#e5e7eb] mb-3">
                    <MapPin className="w-4 h-4 mr-2 text-[#ff6b35]" />
                    <span className="text-sm">{track.location}</span>
                  </div>

                  <p className="text-[#e5e7eb] text-sm mb-4 leading-relaxed">
                    {track.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-[#e5e7eb]">
                      <Clock className="w-4 h-4 mr-2 text-[#10b981]" />
                      <span>{track.duration}</span>
                    </div>
                    <div className="flex items-center text-[#e5e7eb]">
                      <Mountain className="w-4 h-4 mr-2 text-[#10b981]" />
                      <span>{track.elevation}</span>
                    </div>
                    <div className="flex items-center text-[#e5e7eb]">
                      <Calendar className="w-4 h-4 mr-2 text-[#10b981]" />
                      <span>{track.season}</span>
                    </div>
                    <div className="flex items-center text-[#e5e7eb]">
                      <Users className="w-4 h-4 mr-2 text-[#10b981]" />
                      <span>{track.groupSize}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 text-sm">
                      KEY HIGHLIGHTS
                    </h4>
                    <ul className="space-y-1">
                      {track.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="text-[#10b981] text-xs flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/tracks/${track.id}`} className="flex-1">
                      <Button className="w-full bg-[#ff6b35] hover:bg-[#ff8c42] text-white font-bold border-0">
                        VIEW DETAILS
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <Card className="bg-[#2d2d2d] border-[#ff6b35] p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              READY TO JOIN?
            </h2>
            <p className="text-[#e5e7eb] mb-6 text-pretty">
              Experience what it means to be guided by the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#ff6b35] hover:bg-[#ff8c42] text-white font-bold px-8 py-4"
              >
                BOOK CONSULTATION
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white font-bold px-8 py-4 bg-transparent"
              >
                DOWNLOAD BROCHURE
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
