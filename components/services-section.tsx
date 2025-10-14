"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Video, Trophy, Target, Baby, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    icon: Baby,
    title: "Kids Swimming (3-12 years)",
    description: "Fun and engaging swimming lessons designed specifically for children. Building water confidence from the first splash!",
    features: ["Age-appropriate teaching", "Safety first approach", "Fun learning games"],
    color: "bg-pink-50 hover:bg-pink-100",
    iconColor: "text-pink-600",
    packages: [
      { sessions: "1 Session", price: "RM 90", popular: false },
      { sessions: "4 Sessions", price: "RM 320", popular: true },
      { sessions: "8 Sessions", price: "RM 600", popular: false },
    ],
  },
  {
    icon: Users,
    title: "Private Training",
    description: "One-on-one personalized coaching sessions tailored to your skill level and goals. Perfect for all ages!",
    features: ["Individual attention", "Flexible scheduling", "Fast progress"],
    color: "bg-blue-50 hover:bg-blue-100",
    iconColor: "text-blue-600",
    packages: [
      { sessions: "1 Session", price: "RM 100", popular: false },
      { sessions: "4 Sessions", price: "RM 360", popular: true },
      { sessions: "8 Sessions", price: "RM 680", popular: false },
    ],
  },
  {
    icon: Video,
    title: "Online Stroke Correction",
    description: "Submit your swimming videos and get expert analysis & feedback. Perfect for busy Malaysians!",
    features: ["Video analysis", "Detailed feedback", "Remote coaching"],
    color: "bg-purple-50 hover:bg-purple-100",
    iconColor: "text-purple-600",
    packages: [
      { sessions: "1 Analysis", price: "RM 60", popular: false },
      { sessions: "3 Analyses", price: "RM 150", popular: true },
      { sessions: "Monthly", price: "RM 200", popular: false },
    ],
  },
  {
    icon: Trophy,
    title: "Competition Prep",
    description: "Specialized training for young swimmers preparing for school or club competitions.",
    features: ["Race strategy", "Mental preparation", "Performance tracking"],
    color: "bg-yellow-50 hover:bg-yellow-100",
    iconColor: "text-yellow-600",
    packages: [
      { sessions: "4 Sessions", price: "RM 400", popular: false },
      { sessions: "8 Sessions", price: "RM 750", popular: true },
      { sessions: "12 Sessions", price: "RM 1,050", popular: false },
    ],
  },
  {
    icon: Target,
    title: "Custom Programs",
    description: "Personalized training programs created just for you (Premium subscribers only)",
    features: ["AI-powered plans", "Goal-oriented", "Weekly updates"],
    color: "bg-green-50 hover:bg-green-100",
    iconColor: "text-green-600",
    packages: [
      { sessions: "Basic Plan", price: "RM 150", popular: false },
      { sessions: "Pro Plan", price: "RM 280", popular: true },
      { sessions: "Premium", price: "RM 350", popular: false },
    ],
  },
  {
    icon: Heart,
    title: "Family Packages",
    description: "Special rates for families! Learn together and save more. Popular with Malaysian families.",
    features: ["Family discounts", "Sibling packages", "Group sessions"],
    color: "bg-red-50 hover:bg-red-100",
    iconColor: "text-red-600",
    packages: [
      { sessions: "2 Kids", price: "RM 160/session", popular: false },
      { sessions: "3 Kids", price: "RM 220/session", popular: true },
      { sessions: "4+ Kids", price: "RM 280/session", popular: false },
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Swimming Programs for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From toddlers to adults - we have the perfect program to help you achieve your swimming goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className={`h-full hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer ${service.color}`}>
                  <CardHeader>
                    <motion.div 
                      className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 shadow-md`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`w-6 h-6 ${service.iconColor}`} />
                    </motion.div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <motion.li 
                          key={feature} 
                          className="flex items-center text-sm text-gray-600"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Pricing Packages */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-sm font-semibold text-gray-900 mb-3">Package Options:</div>
                      <div className="space-y-2">
                        {service.packages.map((pkg, pkgIndex) => (
                          <motion.div
                            key={pkgIndex}
                            whileHover={{ scale: 1.03, x: 5 }}
                            className={`flex items-center justify-between p-2 rounded-lg transition-all cursor-pointer ${
                              pkg.popular 
                                ? 'bg-white border-2 border-primary shadow-md' 
                                : 'bg-white/50 border border-gray-200'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {pkg.popular && (
                                <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                                  Popular
                                </span>
                              )}
                              <span className="text-sm font-medium text-gray-700">
                                {pkg.sessions}
                              </span>
                            </div>
                            <span className={`text-sm font-bold ${pkg.popular ? 'text-primary' : 'text-gray-900'}`}>
                              {pkg.price}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Malaysian Families Choose Us
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Safe & Certified",
                    desc: "Fully certified coach with 10+ years experience teaching Malaysian children"
                  },
                  {
                    title: "Proven Results",
                    desc: "500+ students learned to swim confidently - many competing at school level"
                  },
                  {
                    title: "Flexible Options",
                    desc: "In-person sessions across KL or online coaching - whatever suits your family"
                  },
                  {
                    title: "Affordable Rates",
                    desc: "Competitive pricing with family packages that save you money"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex gap-4 cursor-pointer"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/kids-swimming.jpg"
                  alt="Excellence in swimming coaching"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover object-[center_5%]"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
