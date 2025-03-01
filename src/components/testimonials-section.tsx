import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  name: string;
  duration: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "MindTrack helped me identify that my anxiety peaks on Sundays before the work week. Now I use that knowledge to prepare and practice self-care when I need it most.",
    name: "Sarah J.",
    duration: "Using MindTrack for 6 months",
    initials: "SJ",
  },
  {
    quote: "The habit tracking feature helped me establish a meditation routine that has significantly reduced my stress levels. The visual progress is so motivating.",
    name: "Michael T.",
    duration: "Using MindTrack for 3 months",
    initials: "MT",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from people who have improved their mental wellbeing with MindTrack.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="rounded-xl overflow-hidden border-2 hover:shadow-md transition-shadow">
              <CardContent className="pt-8 px-8 pb-8">
                <p className="italic mb-8 text-lg leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-5">
                  <Avatar className="h-14 w-14 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary text-lg font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 