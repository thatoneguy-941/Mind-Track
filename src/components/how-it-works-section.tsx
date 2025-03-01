interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Track Daily",
    description: "Record your moods, activities, and thoughts in just a few minutes each day.",
  },
  {
    number: 2,
    title: "Discover Patterns",
    description: "Our analytics identify connections between your activities and emotional states.",
  },
  {
    number: 3,
    title: "Improve Wellbeing",
    description: "Use insights to make positive changes and track your progress over time.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How MindTrack Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple process to help you take control of your mental health journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="text-center bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
                <span className="text-xl font-semibold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 