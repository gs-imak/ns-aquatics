"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      }, 3000);
    }, 1000);
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Free Trial Class Today!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your swimming journey? Get in touch and let's make a splash together! 🏊‍♂️
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-2xl border-2 border-primary/20">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully! 🎉
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll contact you soon to schedule your free trial!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Your Name / Child's Name *</Label>
                        <Input
                          id="contact-name"
                          required
                          placeholder="Enter name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">WhatsApp Number *</Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          required
                          placeholder="+60 12-345-6789"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-service">Interested In *</Label>
                        <Select
                          required
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger id="contact-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kids">Kids Swimming (3-12 years)</SelectItem>
                            <SelectItem value="private">Private Training</SelectItem>
                            <SelectItem value="family">Family Package</SelectItem>
                            <SelectItem value="online">Online Stroke Correction</SelectItem>
                            <SelectItem value="premium">Premium Membership</SelectItem>
                            <SelectItem value="trial">Free Trial Class</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message (Optional)</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell us about your swimming goals, any questions, or preferred schedule..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full shadow-lg">
                      <Send className="mr-2 h-4 w-4" />
                      Book Free Trial Now
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div 
                  className="flex items-start gap-3 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <a href="mailto:coach@swimpro.my" className="text-gray-600 hover:text-primary transition-colors">
                      coach@swimpro.my
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">WhatsApp</div>
                    <a href="https://wa.me/60123456789" className="text-gray-600 hover:text-primary transition-colors">
                      +60 12-345-6789
                    </a>
                    <div className="text-xs text-green-600 mt-1">💬 Chat with us now!</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <a href="tel:+60123456789" className="text-gray-600 hover:text-primary transition-colors">
                      +60 12-345-6789
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Locations</div>
                    <p className="text-gray-600">
                      Kuala Lumpur<br />
                      Petaling Jaya<br />
                      Shah Alam
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-cyan-500 text-white border-0">
              <CardHeader>
                <CardTitle className="text-white">Operating Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="font-medium">6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">8:00 AM - 4:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <motion.div 
              className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">🎁</div>
              <div className="font-bold text-gray-900 mb-1">Free Trial Class!</div>
              <div className="text-sm text-gray-600">Book now and get your first class absolutely free</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
