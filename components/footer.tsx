import Image from "next/image";
import { Waves, Facebook, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image 
                src="/logo/logo.png" 
                alt="NS Aquatics" 
                width={240} 
                height={120}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional swimming coaching for Malaysian families. Helping kids and adults 
              become confident swimmers since 2014. Trusted by 500+ families across Kuala Lumpur.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:coach@swimpro.my"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary transition-colors hover:pl-2 inline-block transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors hover:pl-2 inline-block transition-all">
                  Services
                </a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-primary transition-colors hover:pl-2 inline-block transition-all">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors hover:pl-2 inline-block transition-all">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors hover:pl-2 inline-block transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-primary transition-colors hover:pl-2 inline-block transition-all">
                  Kids Swimming
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors hover:pl-2 inline-block transition-all">
                  Private Training
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors hover:pl-2 inline-block transition-all">
                  Stroke Correction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors hover:pl-2 inline-block transition-all">
                  Family Packages
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors hover:pl-2 inline-block transition-all">
                  Premium Membership
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} NS Aquatics. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
