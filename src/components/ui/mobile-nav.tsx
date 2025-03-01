"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";

interface MobileNavProps {
  links: {
    href: string;
    label: string;
  }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col gap-4 mt-8">
          {links.map((link) => (
            <SmoothScrollLink
              key={link.href}
              href={link.href}
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </SmoothScrollLink>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="outline" className="w-full rounded-xl">Log In</Button>
            <Button className="w-full rounded-xl">Sign Up</Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
} 