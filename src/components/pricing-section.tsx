"use client";
import { Button } from "@/components/ui/button";
import BrainSimple from "@/components/BrainSimple";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const starterFeatures = [
  "Basic mood tracking",
  "Daily journal entries",
  "Simple analytics",
  "Email support",
  "Mobile app access"
];

const proFeatures = [
  "Everything in Starter",
  "Advanced mood analytics",
  "Custom journal templates",
  "Goal tracking",
  "Priority support",
  "Guided meditation sessions"
];

const ultimateFeatures = [
  "Everything in Pro",
  "Personal wellness coach",
  "Custom analytics dashboard",
  "API access",
  "White-label options",
  "24/7 premium support"
];

export function PricingSection() {
  return (
    <section className="py-32 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 animate-gradient">
              PICK YOUR
            </span>{" "}
            <span className="tracking-tight">POWER</span>
          </h2>
          <p className="text-xl text-gray-600/90 max-w-2xl mx-auto">
            Choose the perfect plan for your mental wellness journey
          </p>
          <BrainSimple />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-8 bg-white/50 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">STARTER</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {starterFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <Button 
              className="w-full rounded-xl h-12 hover:scale-105 transition-transform"
              variant="outline"
            >
              Get Started
            </Button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative p-8 bg-gradient-to-b from-purple-50 to-white rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-full shadow-lg">
                POPULAR
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">PRO</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">$9</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <Button 
              className="w-full rounded-xl h-12 bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Start Free Trial
            </Button>
          </motion.div>

          {/* Ultimate Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative p-8 bg-white/50 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">ULTIMATE</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {ultimateFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <Button 
              className="w-full rounded-xl h-12 hover:scale-105 transition-transform"
              variant="outline"
            >
              Contact Sales
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 