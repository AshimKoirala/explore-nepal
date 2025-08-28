import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Target, CheckCircle } from "lucide-react"

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#ff6b35] text-white mb-4">TACTICAL PREPARATION</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Train Like an <span className="text-[#ff6b35]">Operator</span>
            </h1>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto text-pretty">
              Military-grade training programs designed to prepare you for the world's most challenging peaks. Every
              elite operator knows: proper preparation prevents poor performance.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="programs" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-[#2a2a2a] mb-8">
              <TabsTrigger value="programs" className="data-[state=active]:bg-[#ff6b35]">
                Programs
              </TabsTrigger>
              <TabsTrigger value="fitness" className="data-[state=active]:bg-[#ff6b35]">
                Fitness Tests
              </TabsTrigger>
              <TabsTrigger value="nutrition" className="data-[state=active]:bg-[#ff6b35]">
                Nutrition
              </TabsTrigger>
              <TabsTrigger value="mental" className="data-[state=active]:bg-[#ff6b35]">
                Mental Prep
              </TabsTrigger>
            </TabsList>

            <TabsContent value="programs" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Base Camp Preparation",
                    duration: "12 weeks",
                    level: "Beginner",
                    price: "$299",
                    description: "Foundation training for first-time high-altitude climbers",
                    features: [
                      "Cardiovascular base building",
                      "Basic strength training",
                      "Altitude simulation",
                      "Equipment familiarization",
                    ],
                  },
                  {
                    title: "Alpine Assault Course",
                    duration: "16 weeks",
                    level: "Intermediate",
                    price: "$499",
                    description: "Advanced preparation for technical alpine routes",
                    features: [
                      "Technical climbing skills",
                      "Advanced fitness protocols",
                      "Weather survival training",
                      "Team coordination drills",
                    ],
                  },
                  {
                    title: "Elite Operator Program",
                    duration: "20 weeks",
                    level: "Advanced",
                    price: "$799",
                    description: "Military-grade preparation for extreme expeditions",
                    features: [
                      "Special forces fitness standards",
                      "Extreme weather training",
                      "Leadership development",
                      "Emergency response protocols",
                    ],
                  },
                  {
                    title: "Everest Ready Protocol",
                    duration: "24 weeks",
                    level: "Expert",
                    price: "$1,299",
                    description: "Comprehensive preparation for 8000m+ peaks",
                    features: [
                      "Death zone simulation",
                      "Oxygen efficiency training",
                      "Extreme altitude protocols",
                      "Psychological conditioning",
                    ],
                  },
                  {
                    title: "Rapid Deployment",
                    duration: "8 weeks",
                    level: "All Levels",
                    price: "$399",
                    description: "Intensive crash course for urgent expeditions",
                    features: [
                      "Accelerated fitness gains",
                      "Essential skills only",
                      "Risk assessment training",
                      "Emergency protocols",
                    ],
                  },
                  {
                    title: "Maintenance Protocol",
                    duration: "Ongoing",
                    level: "All Levels",
                    price: "$99/month",
                    description: "Year-round fitness maintenance for active climbers",
                    features: [
                      "Seasonal training cycles",
                      "Injury prevention",
                      "Skill maintenance",
                      "Equipment updates",
                    ],
                  },
                ].map((program, index) => (
                  <Card key={index} className="bg-[#2a2a2a] border-[#404040]">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="border-[#ff6b35] text-[#ff6b35]">
                          {program.level}
                        </Badge>
                        <span className="text-2xl font-bold text-[#ff6b35]">{program.price}</span>
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <div className="flex items-center gap-2 text-[#b0b0b0]">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#b0b0b0] mb-4">{program.description}</p>
                      <ul className="space-y-2 mb-6">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                            <span className="text-[#d0d0d0]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b]">Enroll Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fitness" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-[#2a2a2a] border-[#404040]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#ff6b35]">Fitness Standards</CardTitle>
                    <p className="text-[#b0b0b0]">Minimum requirements for expedition participation</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { test: "VO2 Max", requirement: "45+ ml/kg/min", description: "Cardiovascular efficiency" },
                      {
                        test: "Body Fat",
                        requirement: "< 15% (M) / < 25% (F)",
                        description: "Optimal power-to-weight ratio",
                      },
                      { test: "Pack Carry", requirement: "25kg for 2 hours", description: "Endurance with load" },
                      { test: "Pull-ups", requirement: "10+ consecutive", description: "Upper body strength" },
                      { test: "Plank Hold", requirement: "3+ minutes", description: "Core stability" },
                    ].map((standard, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-[#1a1a1a] rounded-lg">
                        <div>
                          <h3 className="font-semibold">{standard.test}</h3>
                          <p className="text-sm text-[#b0b0b0]">{standard.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-[#ff6b35] font-bold">{standard.requirement}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-[#2a2a2a] border-[#404040]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#ff6b35]">Assessment Protocol</CardTitle>
                    <p className="text-[#b0b0b0]">Comprehensive fitness evaluation process</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <div>
                          <h3 className="font-semibold">Medical Clearance</h3>
                          <p className="text-sm text-[#b0b0b0]">Comprehensive health screening</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <div>
                          <h3 className="font-semibold">Fitness Testing</h3>
                          <p className="text-sm text-[#b0b0b0]">Physical capability assessment</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <div>
                          <h3 className="font-semibold">Skills Evaluation</h3>
                          <p className="text-sm text-[#b0b0b0]">Technical climbing abilities</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <div>
                          <h3 className="font-semibold">Program Assignment</h3>
                          <p className="text-sm text-[#b0b0b0]">Customized training plan</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] mt-6">Schedule Assessment</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-[#2a2a2a] border-[#404040]">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#ff6b35]">Pre-Expedition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>High-carb loading protocol</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>Iron supplementation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>Hydration optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>Weight management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-[#2a2a2a] border-[#404040]">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#ff6b35]">During Expedition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>High-calorie density foods</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>Electrolyte management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>Appetite stimulation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>Digestive health</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-[#2a2a2a] border-[#404040]">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#ff6b35]">Recovery Phase</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>Protein synthesis support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>Anti-inflammatory foods</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>Immune system boost</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ff6b35]" />
                        <span>Gradual refeeding</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="mental" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-[#2a2a2a] border-[#404040]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#ff6b35]">Psychological Preparation</CardTitle>
                    <p className="text-[#b0b0b0]">Mental resilience training protocols</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Stress inoculation training",
                      "Visualization techniques",
                      "Fear management protocols",
                      "Decision-making under pressure",
                      "Team dynamics and leadership",
                      "Risk assessment mindset",
                    ].map((technique, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg">
                        <Target className="w-5 h-5 text-[#ff6b35]" />
                        <span>{technique}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-[#2a2a2a] border-[#404040]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#ff6b35]">Mental Toughness Metrics</CardTitle>
                    <p className="text-[#b0b0b0]">Psychological readiness indicators</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { metric: "Stress Tolerance", level: 85 },
                      { metric: "Focus Under Pressure", level: 78 },
                      { metric: "Risk Assessment", level: 92 },
                      { metric: "Team Cohesion", level: 88 },
                      { metric: "Adaptability", level: 76 },
                    ].map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{metric.metric}</span>
                          <span className="text-[#ff6b35]">{metric.level}%</span>
                        </div>
                        <Progress value={metric.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your <span className="text-[#ff6b35]">Transformation?</span>
          </h2>
          <p className="text-xl text-[#b0b0b0] mb-8">
            Join the ranks of elite operators who have conquered the world's highest peaks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#ff6b35] hover:bg-[#e55a2b]">
              Start Training Program
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
