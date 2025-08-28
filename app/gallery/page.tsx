import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Users, Mountain } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#ff6b35] text-white mb-4">
              MISSION ARCHIVES
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Expedition <span className="text-[#ff6b35]">Gallery</span>
            </h1>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto text-pretty">
              Visual documentation from our most challenging missions. Every
              image tells a story of determination, brotherhood, and triumph
              over the world's most extreme environments.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="everest" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-[#2a2a2a] mb-8">
              <TabsTrigger
                value="everest"
                className="data-[state=active]:bg-[#ff6b35]"
              >
                Everest
              </TabsTrigger>
              <TabsTrigger
                value="k2"
                className="data-[state=active]:bg-[#ff6b35]"
              >
                K2
              </TabsTrigger>
              <TabsTrigger
                value="denali"
                className="data-[state=active]:bg-[#ff6b35]"
              >
                Denali
              </TabsTrigger>
              <TabsTrigger
                value="training"
                className="data-[state=active]:bg-[#ff6b35]"
              >
                Training
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="data-[state=active]:bg-[#ff6b35]"
              >
                Team
              </TabsTrigger>
            </TabsList>

            <TabsContent value="everest" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Summit Push - Death Zone",
                    location: "Mount Everest, Nepal",
                    date: "May 2023",
                    participants: "8 climbers",
                    description:
                      "Final assault through the death zone at 8,400m altitude",
                    image:
                      "/climbers-ascending-steep-snowy-mountain-ridge-in-d.png",
                  },
                  {
                    title: "Base Camp Operations",
                    location: "Everest Base Camp",
                    date: "April 2023",
                    participants: "12 team members",
                    description:
                      "Strategic planning and acclimatization at 5,364m",
                    image:
                      "/military-style-base-camp-with-tents-and-equipment-.png",
                  },
                  {
                    title: "Khumbu Icefall Crossing",
                    location: "Khumbu Glacier",
                    date: "April 2023",
                    participants: "6 climbers",
                    description:
                      "Navigating the treacherous icefall with ladder systems",
                    image:
                      "/climbers-crossing-aluminum-ladders-over-deep-creva.png",
                  },
                  {
                    title: "Hillary Step Ascent",
                    location: "Hillary Step, 8,790m",
                    date: "May 2023",
                    participants: "4 climbers",
                    description: "Technical rock climbing near the summit",
                    image:
                      "/climbers-on-technical-rock-face-near-everest-summi.png",
                  },
                  {
                    title: "Summit Achievement",
                    location: "Everest Summit, 8,849m",
                    date: "May 2023",
                    participants: "8 climbers",
                    description:
                      "Mission accomplished - all team members reached summit",
                    image:
                      "/group-of-climbers-celebrating-at-everest-summit-wi.png",
                  },
                  {
                    title: "Descent Operations",
                    location: "South Col, 7,906m",
                    date: "May 2023",
                    participants: "8 climbers",
                    description:
                      "Controlled descent through challenging weather conditions",
                    image:
                      "/exhausted-climbers-descending-snowy-mountain-slope.png",
                  },
                ].map((expedition, index) => (
                  <Card
                    key={index}
                    className="bg-[#2a2a2a] border-[#404040] overflow-hidden group cursor-pointer hover:border-[#ff6b35] transition-colors"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={expedition.image || "/placeholder.svg"}
                        alt={expedition.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {expedition.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-white/80">
                          <MapPin className="w-4 h-4" />
                          <span>{expedition.location}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-[#b0b0b0]">
                          <Calendar className="w-4 h-4" />
                          <span>{expedition.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#b0b0b0]">
                          <Users className="w-4 h-4" />
                          <span>{expedition.participants}</span>
                        </div>
                        <p className="text-[#d0d0d0] mt-2">
                          {expedition.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="k2" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "K2 Base Camp Approach",
                    location: "Baltoro Glacier, Pakistan",
                    date: "July 2023",
                    participants: "6 climbers",
                    description:
                      "Trek through the Baltoro Glacier to K2 Base Camp",
                    image:
                      "/climbers-trekking-across-rocky-glacier-with-massiv.png",
                  },
                  {
                    title: "Bottleneck Traverse",
                    location: "K2 Bottleneck, 8,200m",
                    date: "July 2023",
                    participants: "4 climbers",
                    description: "Navigating the infamous bottleneck section",
                    image:
                      "/climbers-traversing-narrow-icy-ridge-with-steep-dr.png",
                  },
                  {
                    title: "Savage Mountain Summit",
                    location: "K2 Summit, 8,611m",
                    date: "July 2023",
                    participants: "4 climbers",
                    description: "Conquering the world's second highest peak",
                    image:
                      "/climbers-at-k2-summit-with-dramatic-rocky-pyramid-.png",
                  },
                  {
                    title: "Abruzzi Spur Route",
                    location: "K2 Southeast Ridge",
                    date: "July 2023",
                    participants: "6 climbers",
                    description:
                      "Technical climbing on the classic Abruzzi route",
                    image:
                      "/climbers-on-steep-rocky-and-icy-ridge-with-fixed-r.png",
                  },
                  {
                    title: "Camp IV Operations",
                    location: "K2 High Camp, 7,800m",
                    date: "July 2023",
                    participants: "6 climbers",
                    description: "Final preparations before summit push",
                    image:
                      "/high-altitude-camp-with-small-tents-on-narrow-rock.png",
                  },
                  {
                    title: "Serac Navigation",
                    location: "K2 Icefall",
                    date: "July 2023",
                    participants: "6 climbers",
                    description:
                      "Careful navigation through unstable ice formations",
                    image:
                      "/climbers-moving-through-massive-blue-ice-seracs-an.png",
                  },
                ].map((expedition, index) => (
                  <Card
                    key={index}
                    className="bg-[#2a2a2a] border-[#404040] overflow-hidden group cursor-pointer hover:border-[#ff6b35] transition-colors"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={expedition.image || "/placeholder.svg"}
                        alt={expedition.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {expedition.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-white/80">
                          <MapPin className="w-4 h-4" />
                          <span>{expedition.location}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-[#b0b0b0]">
                          <Calendar className="w-4 h-4" />
                          <span>{expedition.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#b0b0b0]">
                          <Users className="w-4 h-4" />
                          <span>{expedition.participants}</span>
                        </div>
                        <p className="text-[#d0d0d0] mt-2">
                          {expedition.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="denali" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Kahiltna Glacier Landing",
                    location: "Denali Base Camp, Alaska",
                    date: "June 2023",
                    participants: "10 climbers",
                    description:
                      "Ski plane landing on Kahiltna Glacier at 2,200m",
                    image:
                      "/small-aircraft-landing-on-snowy-glacier-with-massi.png",
                  },
                  {
                    title: "West Buttress Route",
                    location: "Denali West Buttress",
                    date: "June 2023",
                    participants: "8 climbers",
                    description:
                      "Classic route up North America's highest peak",
                    image:
                      "/line-of-climbers-ascending-snowy-ridge-with-heavy-.png",
                  },
                  {
                    title: "High Camp Establishment",
                    location: "Denali High Camp, 5,200m",
                    date: "June 2023",
                    participants: "8 climbers",
                    description: "Setting up camp in extreme arctic conditions",
                    image:
                      "/mountaineers-setting-up-camp-in-deep-snow-with-str.png",
                  },
                  {
                    title: "Summit Ridge Traverse",
                    location: "Denali Summit Ridge",
                    date: "June 2023",
                    participants: "6 climbers",
                    description:
                      "Final approach along the exposed summit ridge",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "North America's Highest",
                    location: "Denali Summit, 6,190m",
                    date: "June 2023",
                    participants: "6 climbers",
                    description: "Team success on the roof of North America",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Crevasse Rescue Training",
                    location: "Kahiltna Glacier",
                    date: "June 2023",
                    participants: "10 climbers",
                    description: "Essential safety training in glacier travel",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                ].map((expedition, index) => (
                  <Card
                    key={index}
                    className="bg-[#2a2a2a] border-[#404040] overflow-hidden group cursor-pointer hover:border-[#ff6b35] transition-colors"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={expedition.image || "/placeholder.svg"}
                        alt={expedition.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {expedition.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-white/80">
                          <MapPin className="w-4 h-4" />
                          <span>{expedition.location}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-[#b0b0b0]">
                          <Calendar className="w-4 h-4" />
                          <span>{expedition.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#b0b0b0]">
                          <Users className="w-4 h-4" />
                          <span>{expedition.participants}</span>
                        </div>
                        <p className="text-[#d0d0d0] mt-2">
                          {expedition.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="training" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Alpine Skills Course",
                    location: "Chamonix, France",
                    date: "March 2023",
                    participants: "15 trainees",
                    description: "Technical mountaineering skills development",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Crevasse Rescue Drill",
                    location: "Mont Blanc Glacier",
                    date: "March 2023",
                    participants: "12 trainees",
                    description: "Essential glacier travel safety training",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "High Altitude Simulation",
                    location: "Training Facility",
                    date: "February 2023",
                    participants: "20 trainees",
                    description: "Hypoxic training in controlled environment",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Rock Climbing Fundamentals",
                    location: "Fontainebleau, France",
                    date: "April 2023",
                    participants: "18 trainees",
                    description: "Building technical climbing skills",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Winter Survival Training",
                    location: "Norwegian Arctic",
                    date: "January 2023",
                    participants: "10 trainees",
                    description: "Extreme cold weather survival skills",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Team Building Exercise",
                    location: "Scottish Highlands",
                    date: "May 2023",
                    participants: "25 trainees",
                    description: "Leadership and teamwork development",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                ].map((expedition, index) => (
                  <Card
                    key={index}
                    className="bg-[#2a2a2a] border-[#404040] overflow-hidden group cursor-pointer hover:border-[#ff6b35] transition-colors"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={expedition.image || "/placeholder.svg"}
                        alt={expedition.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {expedition.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-white/80">
                          <MapPin className="w-4 h-4" />
                          <span>{expedition.location}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-[#b0b0b0]">
                          <Calendar className="w-4 h-4" />
                          <span>{expedition.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#b0b0b0]">
                          <Users className="w-4 h-4" />
                          <span>{expedition.participants}</span>
                        </div>
                        <p className="text-[#d0d0d0] mt-2">
                          {expedition.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="team" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Command Team Portrait",
                    location: "Elite Exped HQ",
                    date: "January 2023",
                    participants: "6 leaders",
                    description: "Leadership team in formal military dress",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Pre-Mission Briefing",
                    location: "Operations Center",
                    date: "April 2023",
                    participants: "12 team members",
                    description:
                      "Strategic planning session before Everest expedition",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Equipment Inspection",
                    location: "Gear Storage Facility",
                    date: "March 2023",
                    participants: "8 team members",
                    description: "Systematic gear check and preparation",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Victory Celebration",
                    location: "Base Camp",
                    date: "May 2023",
                    participants: "15 team members",
                    description: "Post-expedition celebration and debrief",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Training Graduation",
                    location: "Training Center",
                    date: "June 2023",
                    participants: "20 graduates",
                    description:
                      "Completion ceremony for elite training program",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                  {
                    title: "Brotherhood Bond",
                    location: "Mountain Summit",
                    date: "Various",
                    participants: "Core team",
                    description:
                      "The unbreakable bonds forged through shared adversity",
                    image: "/placeholder.svg?height=400&width=600",
                  },
                ].map((expedition, index) => (
                  <Card
                    key={index}
                    className="bg-[#2a2a2a] border-[#404040] overflow-hidden group cursor-pointer hover:border-[#ff6b35] transition-colors"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={expedition.image || "/placeholder.svg"}
                        alt={expedition.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {expedition.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-white/80">
                          <MapPin className="w-4 h-4" />
                          <span>{expedition.location}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-[#b0b0b0]">
                          <Calendar className="w-4 h-4" />
                          <span>{expedition.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#b0b0b0]">
                          <Users className="w-4 h-4" />
                          <span>{expedition.participants}</span>
                        </div>
                        <p className="text-[#d0d0d0] mt-2">
                          {expedition.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Mission <span className="text-[#ff6b35]">Statistics</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Expedition Photos", icon: Mountain },
              { number: "75", label: "Successful Summits", icon: Mountain },
              { number: "25", label: "Countries Documented", icon: MapPin },
              {
                number: "1,200+",
                label: "Training Hours Captured",
                icon: Users,
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-[#2a2a2a] border-[#404040] text-center p-8"
              >
                <stat.icon className="w-12 h-12 text-[#ff6b35] mx-auto mb-4" />
                <div className="text-4xl font-bold text-[#ff6b35] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#b0b0b0]">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Own{" "}
            <span className="text-[#ff6b35]">Legacy?</span>
          </h2>
          <p className="text-xl text-[#b0b0b0] mb-8">
            Join the ranks and become part of mountaineering history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#ff6b35] hover:bg-[#e55a2b]">
              Book Your Expedition
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white bg-transparent"
            >
              View All Tracks
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
