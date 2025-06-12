import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
      <footer className="bg-[#5d3d48] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-40 h-40 relative">
                <Image src="/MalamaLogo.jpg" alt="Malama Nursing Logo" fill className="object-contain"/>
              </div>
            </div>

            {/* Learn More Section */}
            <div>
              <h3 className="text-base font-semibold mb-6">Learn More</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    About Malama
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className="text-base font-semibold mb-6">Contact Us</h3>
              <div className="space-y-3 text-white/80 text-sm">
                <p>190 Princess St</p>
                <p>R3T 0T1</p>
                <p>431-xxx-xxxx</p>
                <p>xxxxxx@xx.ca</p>
              </div>
            </div>

            {/* Social Section */}
            <div>
              <h3 className="text-base font-semibold mb-6">Social</h3>
              <div className="flex flex-col space-y-4 items-center md:items-start">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6"/>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6"/>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6"/>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6"/>
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <div className="w-6 h-6 bg-white/80 rounded-sm flex items-center justify-center">
                    <span className="text-[#5d3d48] text-xs font-bold">W</span>
                  </div>
                  <span className="sr-only">WordPress</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8">
            <div className="border-t border-white/20 max-w-[80%] mx-auto"></div>
            <p className="text-center text-white/60 text-xs mt-8">© 2025 Maluma Nursing | All Rights Reserved</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer;