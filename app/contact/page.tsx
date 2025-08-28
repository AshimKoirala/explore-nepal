import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Shield, Users } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#ff6b35] text-white mb-4">
              MISSION BRIEFING
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Ready for Your Next{" "}
              <span className="text-[#ff6b35]">Mission?</span>
            </h1>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto text-pretty">
              Contact our operations team to begin planning your expedition.
              Every mission starts with proper intelligence and preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-[#2a2a2a] border-[#404040]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#ff6b35]">
                  Expedition Inquiry
                </CardTitle>
                <p className="text-[#b0b0b0]">
                  Submit your mission parameters and we'll provide a detailed
                  briefing within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      className="bg-[#1a1a1a] border-[#404040]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      className="bg-[#1a1a1a] border-[#404040]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-[#1a1a1a] border-[#404040]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      className="bg-[#1a1a1a] border-[#404040]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expedition">Target Expedition</Label>
                  <Select>
                    <SelectTrigger className="bg-[#1a1a1a] border-[#404040]">
                      <SelectValue placeholder="Select your target peak" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2a2a2a] border-[#404040]">
                      <SelectItem value="everest">Mount Everest</SelectItem>
                      <SelectItem value="k2">K2</SelectItem>
                      <SelectItem value="denali">Denali</SelectItem>
                      <SelectItem value="aconcagua">Aconcagua</SelectItem>
                      <SelectItem value="kilimanjaro">Kilimanjaro</SelectItem>
                      <SelectItem value="elbrus">Mount Elbrus</SelectItem>
                      <SelectItem value="custom">Custom Expedition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level</Label>
                  <Select>
                    <SelectTrigger className="bg-[#1a1a1a] border-[#404040]">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2a2a2a] border-[#404040]">
                      <SelectItem value="beginner">
                        Beginner (0-2 peaks)
                      </SelectItem>
                      <SelectItem value="intermediate">
                        Intermediate (3-10 peaks)
                      </SelectItem>
                      <SelectItem value="advanced">
                        Advanced (10+ peaks)
                      </SelectItem>
                      <SelectItem value="expert">
                        Expert (High altitude experience)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Preferred Timeline</Label>
                  <Select>
                    <SelectTrigger className="bg-[#1a1a1a] border-[#404040]">
                      <SelectValue placeholder="When do you want to deploy?" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2a2a2a] border-[#404040]">
                      <SelectItem value="3months">Next 3 months</SelectItem>
                      <SelectItem value="6months">3-6 months</SelectItem>
                      <SelectItem value="12months">6-12 months</SelectItem>
                      <SelectItem value="flexible">Flexible timing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mission Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals, concerns, and any specific requirements..."
                    className="bg-[#1a1a1a] border-[#404040] min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white">
                  Submit Mission Brief
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="bg-[#2a2a2a] border-[#404040]">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#ff6b35]">
                    Command Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#ff6b35] mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Headquarters</h3>
                      <p className="text-[#b0b0b0]">
                        Explore Nepal Base
                        <br />
                        Kathmandu, Nepal
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#ff6b35] mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Operations Hotline</h3>
                      <p className="text-[#b0b0b0]">+33 4 50 53 00 88</p>
                      <p className="text-sm text-[#888]">
                        24/7 Emergency Support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#ff6b35] mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Mission Planning</h3>
                      <p className="text-[#b0b0b0]">ops@explorenepal.com</p>
                      <p className="text-sm text-[#888]">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#ff6b35] mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Operating Hours</h3>
                      <p className="text-[#b0b0b0]">
                        Mon-Fri: 08:00 - 20:00 CET
                        <br />
                        Sat-Sun: 10:00 - 18:00 CET
                        <br />
                        Emergency: 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="bg-[#2a2a2a] border-[#404040]">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#ff6b35]">
                    Mission Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#ff6b35]" />
                    <span className="text-[#b0b0b0]">
                      Military-grade safety protocols
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#ff6b35]" />
                    <span className="text-[#b0b0b0]">Operator leadership</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#ff6b35]" />
                    <span className="text-[#b0b0b0]">24/7 mission support</span>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-[#ff6b35] border-[#ff6b35]">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Emergency Situations
                  </h3>
                  <p className="text-white/90 mb-4">
                    For active expedition emergencies
                  </p>
                  <Button
                    variant="outline"
                    className="bg-white text-[#ff6b35] border-white hover:bg-gray-100"
                  >
                    Emergency Hotline: +33 4 50 53 99 99
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
