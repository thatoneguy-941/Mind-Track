import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center px-6">
        <div className="max-w-3xl mx-auto bg-primary-foreground/10 p-10 rounded-xl backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Mental Wellbeing Journey Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/90">
            Join thousands of users who are taking control of their mental health with MindTrack.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="px-10 py-6 rounded-xl font-medium hover:bg-secondary/90 text-lg"
          >
            Sign Up for Free
          </Button>
        </div>
      </div>
    </section>
  );
} 