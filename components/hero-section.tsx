"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Waves, Star, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* FIXED: Animated background waves - now extends beyond viewport */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave 1 - Bottom layer */}
        <motion.div
          className="absolute -bottom-32 left-0 right-0 w-[150%] -ml-[25%]"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 1200 120" className="w-full opacity-40" preserveAspectRatio="none">
            <path
              d="M0,50 C150,80 350,0 600,50 C850,100 1050,20 1200,50 L1200,120 L0,120 Z"
              fill="url(#wave-gradient-1)"
            />
            <defs>
              <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Wave 2 - Middle layer */}
        <motion.div
          className="absolute -bottom-24 left-0 right-0 w-[150%] -ml-[25%]"
          animate={{
            y: [0, -30, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <svg viewBox="0 0 1200 120" className="w-full opacity-50" preserveAspectRatio="none">
            <path
              d="M0,30 C200,60 400,10 600,40 C800,70 1000,10 1200,40 L1200,120 L0,120 Z"
              fill="url(#wave-gradient-2)"
            />
            <defs>
              <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Wave 3 - Top layer */}
        <motion.div
          className="absolute -bottom-16 left-0 right-0 w-[150%] -ml-[25%]"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <svg viewBox="0 0 1200 120" className="w-full opacity-60" preserveAspectRatio="none">
            <path
              d="M0,60 C250,90 450,30 600,60 C750,90 950,30 1200,60 L1200,120 L0,120 Z"
              fill="url(#wave-gradient-3)"
            />
            <defs>
              <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" opacity="0.8" />
                <stop offset="50%" stopColor="#06b6d4" opacity="0.9" />
                <stop offset="100%" stopColor="#0ea5e9" opacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 cursor-pointer hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Waves className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                🇲🇾 Trusted by 500+ Malaysian Families
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Child Into a
              <span className="text-primary block">Confident Swimmer</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert swimming coaching for kids & adults in Malaysia. From beginners to champions - 
              we make learning to swim fun, safe, and effective!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg group shadow-lg" asChild>
                <a href="#contact">
                  Book Free Trial Class
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg shadow-lg" asChild>
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 flex-wrap">
              <motion.div 
                className="flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center">
                      <span className="text-xs">😊</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold">500+ Happy Students</div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-700">Certified Coach</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
              <Image
                src="/hero-image.jpg"
                alt="Professional swimming training for kids"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating badges with animations */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-2xl font-bold text-primary">Online</div>
              <div className="text-sm text-gray-600">Video Analysis</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
