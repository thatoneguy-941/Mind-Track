import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, LifeBuoy, Users } from "lucide-react";

interface Resource {
  title: string;
  description: string;
  buttonText: string;
  icon: React.ReactNode;
}

const resources: Resource[] = [
  {
    title: "Articles & Guides",
    description: "Evidence-based articles on mental health topics, coping strategies, and wellbeing practices.",
    buttonText: "Browse Articles",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    title: "Crisis Support",
    description: "Information on crisis hotlines, text services, and emergency mental health resources.",
    buttonText: "View Support Options",
    icon: <LifeBuoy className="h-6 w-6 text-primary" />,
  },
  {
    title: "Community",
    description: "Connect with others on similar mental health journeys through our moderated community forums.",
    buttonText: "Join Community",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mental Health Resources</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve compiled helpful resources to support your mental health journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {resources.map((resource) => (
            <Card key={resource.title} className="rounded-xl overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4 pb-3 pt-6 px-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  {resource.icon}
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6">
                <p className="text-muted-foreground">{resource.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-2">
                <Button variant="outline" className="w-full rounded-xl hover:bg-primary hover:text-primary-foreground py-5">
                  {resource.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 