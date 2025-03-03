"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-6 py-2.5 mb-10 bg-purple-100/50 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">The future of mind tracking is here</span>
          </div>
          
          <h1 className="max-w-4xl mb-10 text-7xl font-bold tracking-tight text-gray-900">
            Track your mental wellbeing with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 animate-gradient">
              MindTrack
            </span>
          </h1>
          
          <p className="max-w-2xl mb-14 text-xl text-gray-600">
            A mindful choice application to monitor your wellness and track your mental health journey. 
            Build better habits - always at your fingertips.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg" 
              className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90"
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg rounded-full hover:bg-purple-50"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-50/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>
    </section>
  )
}