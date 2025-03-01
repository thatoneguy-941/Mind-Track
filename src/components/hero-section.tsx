import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        <div className="space-y-8 bg-primary/5 p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Track Your Mental Wellbeing Journey
          </h1>
          <p className="text-xl text-muted-foreground">
            MindTrack helps you monitor your mood, track habits, and discover patterns to improve your mental health.
          </p>
          <div className="flex flex-wrap gap-5 pt-2">
            <Button size="lg" className="rounded-xl px-6">Get Started</Button>
            <Button size="lg" variant="outline" className="rounded-xl px-6">Learn More</Button>
          </div>
        </div>
        <div className="relative h-[320px] sm:h-[420px] order-first md:order-last">
          <div className="absolute inset-0 overflow-hidden rounded-xl shadow-xl m-4">
            <Image 
              src="/hero-image.svg" 
              alt="MindTrack App Interface" 
              fill
              className="object-contain p-4 bg-card rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 