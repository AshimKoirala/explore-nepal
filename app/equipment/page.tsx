import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Shield, Thermometer, Weight, Star } from "lucide-react"

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#ff6b35] text-white mb-4">TACTICAL GEAR</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Military-Grade <span className="text-[#ff6b35]">Equipment</span>
            </h1>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto text-pretty">
              Professional-grade mountaineering equipment tested in the world's most extreme conditions. Every piece of
              gear is operator-approved and mission-critical.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="clothing" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-[#2a2a2a] mb-8">
              <TabsTrigger value="clothing" className="data-[state=active]:bg-[#ff6b35]">
                Clothing
              </TabsTrigger>
              <TabsTrigger value="climbing" className="data-[state=active]:bg-[#ff6b35]">
                Climbing
              </TabsTrigger>
              <TabsTrigger value="shelter" className="data-[state=active]:bg-[#ff6b35]">
                Shelter
              </TabsTrigger>
              <TabsTrigger value="navigation" className="data-[state=active]:bg-[#ff6b35]">
                Navigation
              </TabsTrigger>
              <TabsTrigger value="safety" className="data-[state=active]:bg-[#ff6b35]">
                Safety
              </TabsTrigger>
            </TabsList>

            <TabsContent value="clothing" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Arc'teryx Alpha SV Jacket",
                    category: "Shell Layer",
                    price: "$750",
                    rating: 5,
                    features: ["GORE-TEX Pro", "Storm Hood", "Pit Zips", "Reinforced Areas"],
                    specs: { weight: "665g", temp: "-40°C", waterproof: "28,000mm" },
                  },
                  {
                    name: "Patagonia R1 Daily Hoody",
                    category: "Insulation",
                    price: "$179",
                    rating: 4,
                    features: ["Polartec Power Grid", "Moisture Wicking", "UPF 50+", "Fair Trade Certified"],
                    specs: { weight: "340g", temp: "0°C to -10°C", breathability: "High" },
                  },
                  {
                    name: "Smartwool Merino Base Layer",
                    category: "Base Layer",
                    price: "$120",
                    rating: 5,
                    features: ["100% Merino Wool", "Odor Resistant", "Temperature Regulation", "Flatlock Seams"],
                    specs: { weight: "180g", temp: "All Conditions", comfort: "Next-to-Skin" },
                  },
                  {
                    name: "Outdoor Research Crocodile Gaiters",
                    category: "Protection",
                    price: "$89",
                    rating: 4,
                    features: ["GORE-TEX", "Instep Strap", "Velcro Closure", "Reinforced Bottom"],
                    specs: { weight: "280g", height: "43cm", waterproof: "Yes" },
                  },
                  {
                    name: "La Sportiva Nepal Cube GTX",
                    category: "Footwear",
                    price: "$699",
                    rating: 5,
                    features: ["GORE-TEX Insulated", "Carbon Fiber", "Vibram Sole", "Crampon Compatible"],
                    specs: { weight: "1,850g", temp: "-40°C", insulation: "400g" },
                  },
                  {
                    name: "Black Diamond Guide Gloves",
                    category: "Hand Protection",
                    price: "$179",
                    rating: 4,
                    features: ["GORE-TEX", "Removable Liner", "Wrist Leash", "Reinforced Palm"],
                    specs: { weight: "340g", temp: "-30°C", dexterity: "High" },
                  },
                ].map((item, index) => (
                  <Card key={index} className="bg-[#2a2a2a] border-[#404040]">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="border-[#ff6b35] text-[#ff6b35]">
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < item.rating ? "fill-[#ff6b35] text-[#ff6b35]" : "text-[#404040]"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <div className="text-2xl font-bold text-[#ff6b35]">{item.price}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          {Object.entries(item.specs).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-[#1a1a1a] rounded">
                              <div className="text-[#ff6b35] font-semibold">{value}</div>
                              <div className="text-[#888] capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                        <ul className="space-y-1">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-[#ff6b35]" />
                              <span className="text-[#d0d0d0]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b]">Add to Kit</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="climbing" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Petzl Nomic Ice Axes",
                    category: "Ice Tools",
                    price: "$299",
                    rating: 5,
                    features: ["Modular Design", "Adjustable Grip", "Interchangeable Picks", "Ergonomic Handle"],
                    specs: { weight: "550g", length: "50cm", certification: "CE/UIAA" },
                  },
                  {
                    name: "Grivel G22 Crampons",
                    category: "Crampons",
                    price: "$249",
                    rating: 5,
                    features: ["Dual Point", "Anti-Balling Plates", "Flexible Binding", "Chromoly Steel"],
                    specs: { weight: "980g", points: "12", compatibility: "Universal" },
                  },
                  {
                    name: "Mammut 9.5mm Infinity",
                    category: "Dynamic Rope",
                    price: "$189",
                    rating: 4,
                    features: ["Dry Treatment", "Middle Mark", "UIAA Certified", "Low Impact Force"],
                    specs: { weight: "58g/m", length: "60m", falls: "8+" },
                  },
                  {
                    name: "Black Diamond Camalot C4",
                    category: "Protection",
                    price: "$75",
                    rating: 5,
                    features: ["Double Axle Design", "Thumb Loop", "Color Coded", "Lightweight"],
                    specs: { weight: "96g", range: "23.9-41.2mm", strength: "14kN" },
                  },
                  {
                    name: "Petzl Altitude Harness",
                    category: "Harness",
                    price: "$129",
                    rating: 4,
                    features: ["Adjustable Leg Loops", "Ice Clipper Slots", "Lightweight", "Comfortable"],
                    specs: { weight: "380g", loops: "4", adjustment: "Full" },
                  },
                  {
                    name: "Black Diamond Vector Helmet",
                    category: "Head Protection",
                    price: "$99",
                    rating: 4,
                    features: ["In-Mold Construction", "Adjustable Fit", "Ventilation", "Headlamp Clips"],
                    specs: { weight: "215g", size: "S-L", certification: "CE/UIAA" },
                  },
                ].map((item, index) => (
                  <Card key={index} className="bg-[#2a2a2a] border-[#404040]">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="border-[#ff6b35] text-[#ff6b35]">
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < item.rating ? "fill-[#ff6b35] text-[#ff6b35]" : "text-[#404040]"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <div className="text-2xl font-bold text-[#ff6b35]">{item.price}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          {Object.entries(item.specs).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-[#1a1a1a] rounded">
                              <div className="text-[#ff6b35] font-semibold">{value}</div>
                              <div className="text-[#888] capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                        <ul className="space-y-1">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-[#ff6b35]" />
                              <span className="text-[#d0d0d0]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b]">Add to Kit</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="shelter" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Hilleberg Jannu Tent",
                    category: "4-Season Tent",
                    price: "$1,299",
                    rating: 5,
                    features: ["Kerlon 1800", "Dual Vestibules", "Guy-Out Points", "Expedition Proven"],
                    specs: { weight: "4.2kg", capacity: "2P", seasons: "4" },
                  },
                  {
                    name: "Western Mountaineering Versalite",
                    category: "Sleeping Bag",
                    price: "$549",
                    rating: 5,
                    features: ["850+ Down Fill", "Differential Cut", "Draft Collar", "Compression Sack"],
                    specs: { weight: "1.13kg", temp: "-7°C", fill: "850FP" },
                  },
                  {
                    name: "Therm-a-Rest NeoAir XTherm",
                    category: "Sleeping Pad",
                    price: "$229",
                    rating: 4,
                    features: ["Reflective Barrier", "Triangular Core", "WingLock Valve", "Repair Kit"],
                    specs: { weight: "430g", rvalue: "7.3", thickness: "6.4cm" },
                  },
                  {
                    name: "MSR WindBurner Stove",
                    category: "Cooking System",
                    price: "$149",
                    rating: 4,
                    features: ["Radiant Burner", "WindClip", "Personal Cook Pot", "Fuel Efficient"],
                    specs: { weight: "465g", boiltime: "4.5min", fuel: "Canister" },
                  },
                  {
                    name: "Black Diamond Apollo Lantern",
                    category: "Lighting",
                    price: "$39",
                    rating: 4,
                    features: ["150 Lumens", "Collapsible", "Dual Fuel", "Frosted Globe"],
                    specs: { weight: "210g", runtime: "90hrs", modes: "4" },
                  },
                  {
                    name: "Sea to Summit Reactor Liner",
                    category: "Sleep System",
                    price: "$89",
                    rating: 4,
                    features: ["Thermolite Fabric", "Temperature Boost", "Mummy Shape", "Pillow Pocket"],
                    specs: { weight: "198g", boost: "+8°C", size: "Regular" },
                  },
                ].map((item, index) => (
                  <Card key={index} className="bg-[#2a2a2a] border-[#404040]">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="border-[#ff6b35] text-[#ff6b35]">
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < item.rating ? "fill-[#ff6b35] text-[#ff6b35]" : "text-[#404040]"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <div className="text-2xl font-bold text-[#ff6b35]">{item.price}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          {Object.entries(item.specs).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-[#1a1a1a] rounded">
                              <div className="text-[#ff6b35] font-semibold">{value}</div>
                              <div className="text-[#888] capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                        <ul className="space-y-1">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-[#ff6b35]" />
                              <span className="text-[#d0d0d0]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b]">Add to Kit</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="navigation" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Garmin inReach Mini 2",
                    category: "Satellite Communicator",
                    price: "$399",
                    rating: 5,
                    features: ["2-Way Messaging", "SOS Function", "GPS Tracking", "Weather Updates"],
                    specs: { weight: "100g", battery: "14 days", coverage: "Global" },
                  },
                  {
                    name: "Suunto Core Alpine",
                    category: "ABC Watch",
                    price: "$299",
                    rating: 4,
                    features: ["Altimeter", "Barometer", "Compass", "Weather Alarm"],
                    specs: { weight: "64g", battery: "12 months", waterproof: "30m" },
                  },
                  {
                    name: "Silva Ranger 2.0 Compass",
                    category: "Navigation",
                    price: "$89",
                    rating: 5,
                    features: ["Global Needle", "Adjustable Declination", "Mirror", "Clinometer"],
                    specs: { weight: "75g", accuracy: "±1°", zones: "Global" },
                  },
                  {
                    name: "Petzl NAO+ Headlamp",
                    category: "Lighting",
                    price: "$199",
                    rating: 4,
                    features: ["750 Lumens", "Reactive Lighting", "Bluetooth", "Red Light"],
                    specs: { weight: "185g", runtime: "12hrs", modes: "Multiple" },
                  },
                  {
                    name: "National Geographic Maps",
                    category: "Topographic Maps",
                    price: "$15",
                    rating: 4,
                    features: ["Waterproof", "Tear Resistant", "Detailed Contours", "GPS Compatible"],
                    specs: { scale: "1:24,000", material: "Synthetic", coverage: "Regional" },
                  },
                  {
                    name: "Brunton TruArc 3 Compass",
                    category: "Backup Navigation",
                    price: "$29",
                    rating: 4,
                    features: ["Global Needle", "Tool-Free Adjustment", "Luminous Dial", "Lifetime Warranty"],
                    specs: { weight: "28g", accuracy: "±2°", zones: "Global" },
                  },
                ].map((item, index) => (
                  <Card key={index} className="bg-[#2a2a2a] border-[#404040]">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="border-[#ff6b35] text-[#ff6b35]">
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < item.rating ? "fill-[#ff6b35] text-[#ff6b35]" : "text-[#404040]"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <div className="text-2xl font-bold text-[#ff6b35]">{item.price}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          {Object.entries(item.specs).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-[#1a1a1a] rounded">
                              <div className="text-[#ff6b35] font-semibold">{value}</div>
                              <div className="text-[#888] capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                        <ul className="space-y-1">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-[#ff6b35]" />
                              <span className="text-[#d0d0d0]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b]">Add to Kit</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="safety" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "ARVA Neo+ Beacon",
                    category: "Avalanche Safety",
                    price: "$299",
                    rating: 5,
                    features: ["3 Antennas", "55m Range", "Mark Function", "Group Check"],
                    specs: { weight: "210g", battery: "300hrs", range: "55m" },
                  },
                  {
                    name: "BCA Stealth 300 Probe",
                    category: "Avalanche Probe",
                    price: "$89",
                    rating: 4,
                    features: ["Quick Assembly", "Depth Markings", "Large Basket", "Compact"],
                    specs: { weight: "320g", length: "300cm", segments: "13" },
                  },
                  {
                    name: "Ortovox Beast Shovel",
                    category: "Avalanche Shovel",
                    price: "$79",
                    rating: 5,
                    features: ["Aluminum Blade", "Telescopic Handle", "Hoe Function", "Compact"],
                    specs: { weight: "690g", blade: "24cm", handle: "Telescopic" },
                  },
                  {
                    name: "Adventure Medical Kits",
                    category: "First Aid",
                    price: "$149",
                    rating: 4,
                    features: ["Comprehensive Kit", "Waterproof Case", "Emergency Guide", "Medications"],
                    specs: { weight: "680g", items: "125+", case: "Waterproof" },
                  },
                  {
                    name: "Petzl Micro Traxion",
                    category: "Rescue Gear",
                    price: "$89",
                    rating: 5,
                    features: ["Progress Capture", "Cam-Assisted Blocking", "Lightweight", "Efficient"],
                    specs: { weight: "85g", strength: "30kN", efficiency: "91%" },
                  },
                  {
                    name: "Black Diamond Guide Tape",
                    category: "Repair Kit",
                    price: "$19",
                    rating: 4,
                    features: ["Tenacious Tape", "Gear Aid", "Multiple Sizes", "Permanent Repair"],
                    specs: { weight: "50g", pieces: "Multiple", adhesion: "Permanent" },
                  },
                ].map((item, index) => (
                  <Card key={index} className="bg-[#2a2a2a] border-[#404040]">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="border-[#ff6b35] text-[#ff6b35]">
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < item.rating ? "fill-[#ff6b35] text-[#ff6b35]" : "text-[#404040]"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <div className="text-2xl font-bold text-[#ff6b35]">{item.price}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          {Object.entries(item.specs).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-[#1a1a1a] rounded">
                              <div className="text-[#ff6b35] font-semibold">{value}</div>
                              <div className="text-[#888] capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                        <ul className="space-y-1">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-[#ff6b35]" />
                              <span className="text-[#d0d0d0]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b]">Add to Kit</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Equipment Services */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Equipment <span className="text-[#ff6b35]">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#2a2a2a] border-[#404040]">
              <CardHeader>
                <Shield className="w-12 h-12 text-[#ff6b35] mb-4" />
                <CardTitle className="text-xl">Gear Rental</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#b0b0b0] mb-4">
                  Professional-grade equipment rental for all expedition levels. All gear is inspected and maintained to
                  military standards.
                </p>
                <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b]">Browse Rentals</Button>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2a2a] border-[#404040]">
              <CardHeader>
                <Thermometer className="w-12 h-12 text-[#ff6b35] mb-4" />
                <CardTitle className="text-xl">Gear Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#b0b0b0] mb-4">
                  Test equipment in controlled conditions before your expedition. Ensure perfect fit and functionality.
                </p>
                <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b]">Schedule Test</Button>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2a2a] border-[#404040]">
              <CardHeader>
                <Weight className="w-12 h-12 text-[#ff6b35] mb-4" />
                <CardTitle className="text-xl">Custom Kits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#b0b0b0] mb-4">
                  Personalized equipment packages tailored to your specific expedition and experience level.
                </p>
                <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b]">Build Kit</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
