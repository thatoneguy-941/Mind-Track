import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Activity, LineChart } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Mood Tracking",
    description: "Log your daily moods and emotions to identify patterns and triggers.",
    icon: <Brain className="h-8 w-8 text-primary" />,
  },
  {
    title: "Habit Building",
    description: "Create and maintain positive habits that contribute to your mental wellbeing.",
    icon: <Activity className="h-8 w-8 text-primary" />,
  },
  {
    title: "Insights & Analytics",
    description: "Gain valuable insights through personalized analytics and progress reports.",
    icon: <LineChart className="h-8 w-8 text-primary" />,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Features Designed for Your Wellbeing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and insights to help you understand and improve your mental health.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <Card key={feature.title} className="rounded-xl overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-2 pt-6 px-6">
                <div className="mb-5 p-3 bg-primary/10 inline-block rounded-xl">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 