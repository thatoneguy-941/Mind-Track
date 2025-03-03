"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-purple-50/50 rounded-3xl blur-xl transform -rotate-1" />
          <div className="relative bg-gradient-to-r from-purple-100/50 to-purple-50/50 p-12 rounded-3xl backdrop-blur-sm border border-purple-100">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800"
              >
                Ready to start your mental wellness journey?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600/90 mb-10 max-w-2xl mx-auto"
              >
                Join thousands of users who are taking control of their mental health with MindTrack
              </motion.p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Button 
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg rounded-full hover:bg-purple-50 hover:scale-105 transition-all"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 