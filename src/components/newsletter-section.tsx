import { NewsletterForm } from "@/components/newsletter-form";

export function NewsletterSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest mental health tips, resources, and app updates.
          </p>
        </div>
        <div className="bg-background rounded-xl p-8 shadow-sm max-w-2xl mx-auto border-2">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
} 