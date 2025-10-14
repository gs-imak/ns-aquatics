"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkles, Lock, Crown, Calendar, Target } from "lucide-react";
import { motion } from "framer-motion";

interface ProgramData {
  name: string;
  age: string;
  goal: string;
  level: string;
  frequency: string;
}

export function ProgramGenerator() {
  const [formData, setFormData] = useState<ProgramData>({
    name: "",
    age: "",
    goal: "",
    level: "",
    frequency: "",
  });
  const [showPaywall, setShowPaywall] = useState(false);

  function handleGenerate() {
    // Show paywall instead of generating
    setShowPaywall(true);
  }

  return (
    <section id="program-generator" className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Crown className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Premium Feature</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI-Powered Training Program Generator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get a personalized swimming program tailored to your goals (Premium members only)
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-2xl border-2 border-purple-200 relative overflow-hidden">
              {/* Premium Badge Overlay */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-pink-600 text-white px-6 py-2 rounded-bl-2xl flex items-center gap-2">
                <Crown className="w-4 h-4" />
                <span className="text-sm font-medium">Premium Only</span>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Create Your Custom Program
                </CardTitle>
                <CardDescription>
                  Answer a few questions to generate your personalized training plan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative">
                {/* Blur overlay for non-premium */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-10 h-10 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Feature</h3>
                    <p className="text-gray-600 mb-6">
                      Unlock AI-powered custom training programs with our Premium Membership
                    </p>
                    <div className="space-y-3">
                      <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                        <a href="#pricing">
                          <Crown className="mr-2 h-4 w-4" />
                          Upgrade to Premium - RM 350/month
                        </a>
                      </Button>
                      <p className="text-sm text-gray-500">
                        Includes unlimited programs, video analysis, and more!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form (blurred in background) */}
                <div className="space-y-2">
                  <Label htmlFor="name">Child's Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Select value={formData.age} onValueChange={(value) => setFormData({ ...formData, age: value })} disabled>
                      <SelectTrigger id="age">
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-8">6-8 years</SelectItem>
                        <SelectItem value="9-12">9-12 years</SelectItem>
                        <SelectItem value="13+">13+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Current Level</Label>
                    <Select value={formData.level} onValueChange={(value) => setFormData({ ...formData, level: value })} disabled>
                      <SelectTrigger id="level">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goal">Training Goal</Label>
                  <Select value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value })} disabled>
                    <SelectTrigger id="goal">
                      <SelectValue placeholder="Select your goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="learn">Learn to Swim</SelectItem>
                      <SelectItem value="improve">Improve Technique</SelectItem>
                      <SelectItem value="compete">Competition Prep</SelectItem>
                      <SelectItem value="fitness">Fitness & Health</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleGenerate}
                  disabled
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate My Program
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Premium Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "🤖",
                title: "AI-Powered Plans",
                desc: "Smart algorithms create perfect programs for your level"
              },
              {
                icon: "📊",
                title: "Progress Tracking",
                desc: "Watch your improvement with detailed analytics"
              },
              {
                icon: "🎯",
                title: "Goal-Focused",
                desc: "Programs designed specifically for your objectives"
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Paywall Dialog */}
      <Dialog open={showPaywall} onOpenChange={setShowPaywall}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-purple-600" />
              Upgrade to Premium
            </DialogTitle>
            <DialogDescription>
              Unlock the AI Program Generator and all premium features
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">RM 350<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Unlimited custom programs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Video analysis included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Priority support
                </li>
              </ul>
            </div>
            <Button className="w-full" size="lg" asChild>
              <a href="#contact">
                Contact to Upgrade
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
