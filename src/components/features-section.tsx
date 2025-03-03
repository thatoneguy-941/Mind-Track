"use client";

import { motion } from "framer-motion";
import React from 'react';
import { PricingSection } from './pricing-section';
import BrainSimple from './BrainSimple';
import LineChart from './LineChart';
import Calendar from "./Calendar";

export function FeaturesSection() {
  const features = [
    {
      icon: BrainSimple,
      title: "Mood Tracking",
      description: "Monitor your daily moods and emotions with our intuitive tracking system"
    },
    {
      icon: LineChart,
      title: "Progress Analytics",
      description: "Visualize your mental health journey with detailed analytics and insights"
    },
    {
      icon: Calendar,
      title: "Habit Builder",
      description: "Build and maintain positive habits with our structured guidance system"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-white/50 rounded-2xl backdrop-blur-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-purple-100 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {React.createElement(feature.icon, { className: "w-7 h-7" })}
              </div>
              <h3 className="mb-4 text-xl font-semibold group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div> 

        <PricingSection />
      </div>
    </section> 
  );
}