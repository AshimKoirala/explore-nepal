import { Mountain, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#3a3a3a] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Mountain className="w-8 h-8 text-[#ff6b35] mr-3" />
              <span className="text-2xl font-black text-white">
                Explore Nepal
              </span>
            </div>
            <p className="text-[#e5e7eb] mb-4 leading-relaxed">
              Leading from the front with military precision and world-class
              mountaineering expertise. Your gateway to high-altitude
              adventures.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-[#2d2d2d] rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">IG</span>
              </div>
              <div className="w-10 h-10 bg-[#2d2d2d] rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">YT</span>
              </div>
              <div className="w-10 h-10 bg-[#2d2d2d] rounded-full flex items-center justify-center hover:bg-[#ff6b35] transition-colors cursor-pointer">
                <span className="text-white text-sm font-bold">FB</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#expeditions"
                  className="text-[#e5e7eb] hover:text-[#ff6b35] transition-colors"
                >
                  Expeditions
                </a>
              </li>
              <li>
                <a
                  href="#training"
                  className="text-[#e5e7eb] hover:text-[#ff6b35] transition-colors"
                >
                  Training
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-[#e5e7eb] hover:text-[#ff6b35] transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#records"
                  className="text-[#e5e7eb] hover:text-[#ff6b35] transition-colors"
                >
                  Records
                </a>
              </li>
              <li>
                <a
                  href="#safety"
                  className="text-[#e5e7eb] hover:text-[#ff6b35] transition-colors"
                >
                  Safety
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">CONTACT</h4>
            <div className="space-y-3">
              <div className="flex items-center text-[#e5e7eb]">
                <Mail className="w-4 h-4 text-[#ff6b35] mr-2" />
                <span className="text-sm">info@explorenepal.com</span>
              </div>
              <div className="flex items-center text-[#e5e7eb]">
                <Phone className="w-4 h-4 text-[#ff6b35] mr-2" />
                <span className="text-sm">+977 9812345678</span>
              </div>
              <div className="flex items-center text-[#e5e7eb]">
                <MapPin className="w-4 h-4 text-[#ff6b35] mr-2" />
                <span className="text-sm">Kathmandu,Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3a3a3a] mt-8 pt-8 text-center">
          <p className="text-[#e5e7eb] text-sm">
            © 2024 Explore Nepal. All rights reserved. |
            <span className="text-[#ff6b35] ml-1">
              <a href="https://www.motionage.com/" target="_blank">
                Made By Motion Age
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
