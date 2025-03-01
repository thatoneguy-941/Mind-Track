import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/ui/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";

const navigationLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#resources", label: "Resources" },
];

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-6">
        <div className="flex items-center gap-3 bg-primary/5 px-5 py-3 rounded-xl">
          <Image 
            src="/logo.svg" 
            alt="MindTrack Logo" 
            width={32} 
            height={32}
            className="dark:invert"
          />
          <span className="font-bold text-xl">MindTrack</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {navigationLinks.map((link) => (
            <SmoothScrollLink 
              key={link.href} 
              href={link.href} 
              className="hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </SmoothScrollLink>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-5">
          <ThemeToggle />
          <Button variant="outline" className="rounded-xl px-5">Log In</Button>
          <Button className="rounded-xl px-5">Sign Up</Button>
        </div>
        
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <MobileNav links={navigationLinks} />
        </div>
      </div>
    </header>
  );
} 