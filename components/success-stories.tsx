"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Mother of 2 kids",
    location: "Kuala Lumpur",
    text: "My 6-year-old was terrified of water. After just 3 months of training, she's now swimming confidently and even asking to go to the pool! The coach made it so fun and safe.",
    rating: 5,
    avatar: "👩",
  },
  {
    name: "Ahmad Rahman",
    role: "Father",
    location: "Petaling Jaya",
    text: "Best investment for our family! Both my kids learned to swim properly and the family package saved us money. The coach is patient and really knows how to work with children.",
    rating: 5,
    avatar: "👨",
  },
  {
    name: "Lisa Tan",
    role: "Working Mom",
    location: "Shah Alam",
    text: "The online stroke correction is perfect for my busy schedule! I can send videos anytime and get detailed feedback. My backstroke has improved tremendously!",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Kumar Devi",
    role: "Parent of 3",
    location: "Subang Jaya",
    text: "All three of my children learned to swim here! The coach is amazing with kids and the progress is visible week by week. They actually look forward to swimming lessons!",
    rating: 5,
    avatar: "👨‍👧‍👦",
  },
];

const achievements = [
  { number: "500+", label: "Students Trained", icon: "🎓" },
  { number: "10+", label: "Years Experience", icon: "⭐" },
  { number: "50+", label: "Competition Winners", icon: "🏆" },
  { number: "100%", label: "Satisfaction Rate", icon: "❤️" },
];

export function SuccessStories() {
  return (
    <section id="success-stories" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories from Malaysian Families
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real families across Kuala Lumpur and beyond
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg cursor-pointer"
            >
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{achievement.number}</div>
              <div className="text-sm text-gray-600">{achievement.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-primary">📍 {testimonial.location}</p>
                    </div>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Gallery Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              See Our Students in Action! 🎥
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Watch transformation videos of our students - from their first splash to confident swimming!
            </p>
            <motion.div 
              className="aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl cursor-pointer relative"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/buttefly-swimming.jpg"
                alt="Student swimming butterfly stroke"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center hover:bg-black/10 transition-all">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-white font-medium drop-shadow-lg">Click to watch success stories</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

