"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Mail } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Subscribed email:", data.email);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  }

  return (
    <div className="w-full mx-auto">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
        <Mail className="h-6 w-6 text-primary" />
        Subscribe to our newsletter
      </h3>
      <p className="text-muted-foreground mb-6">
        Get the latest mental health tips and updates from MindTrack.
      </p>
      
      {isSuccess ? (
        <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-100 p-6 rounded-xl text-center border border-green-200 dark:border-green-800">
          Thanks for subscribing! We'll be in touch soon.
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-3">
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        {...field}
                        className="flex-1 rounded-xl py-6"
                      />
                      <Button type="submit" disabled={isSubmitting} className="rounded-xl px-6">
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="mt-2" />
                </FormItem>
              )}
            />
          </form>
        </Form>
      )}
    </div>
  );
} 