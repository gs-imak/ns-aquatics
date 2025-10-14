"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Crown, Heart } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Single Session",
    price: "RM 80",
    period: "per session",
    description: "Perfect for trying out our coaching",
    features: [
      "1 hour private session",
      "Basic technique assessment",
      "Progress report",
      "Pool location assistance",
    ],
    icon: "🏊",
    color: "border-gray-200",
    buttonVariant: "outline" as const,
  },
  {
    name: "Family Package",
    price: "RM 250",
    period: "per month",
    description: "Most popular for Malaysian families!",
    features: [
      "4 sessions per month per child",
      "Up to 3 children",
      "Family progress tracking",
      "WhatsApp support",
      "Flexible scheduling",
      "Save RM 30/month",
    ],
    icon: "👨‍👩‍👧‍👦",
    popular: true,
    color: "border-primary",
    buttonVariant: "default" as const,
  },
  {
    name: "Premium Membership",
    price: "RM 350",
    period: "per month",
    description: "Complete coaching experience",
    features: [
      "Unlimited online consultations",
      "Custom training programs",
      "Video analysis included",
      "Competition prep support",
      "Priority booking",
      "Nutrition guidance",
      "Access to AI program generator",
    ],
    icon: "👑",
    color: "border-yellow-400",
    buttonVariant: "default" as const,
    premium: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Affordable Pricing for Every Family
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your swimming journey. All plans include our quality guarantee!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <motion.div 
                    className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-1"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4" />
                    Most Popular
                  </motion.div>
                </div>
              )}
              
              {plan.premium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-1"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <Crown className="w-4 h-4" />
                    Premium
                  </motion.div>
                </div>
              )}

              <Card className={`h-full border-2 ${plan.color} ${plan.popular || plan.premium ? 'shadow-2xl' : 'shadow-lg'} hover:shadow-2xl transition-all duration-300 flex flex-col`}>
                <CardHeader className="text-center pb-8">
                  <div className="text-6xl mb-4">{plan.icon}</div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-4">{plan.description}</CardDescription>
                  <div>
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full" 
                    size="lg"
                    asChild
                  >
                    <a href="#contact">
                      {plan.premium ? (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Get Premium
                        </>
                      ) : "Choose Plan"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-5xl">✅</div>
            <h3 className="text-2xl font-bold text-gray-900">100% Satisfaction Guarantee</h3>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Not happy after your first session? Get a full refund, no questions asked. 
            We're confident your child will love learning to swim with us!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

