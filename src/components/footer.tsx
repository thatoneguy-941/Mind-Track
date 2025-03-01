import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const footerLinks: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Support", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t py-16 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="bg-background p-6 rounded-xl shadow-sm border border-primary/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-primary/10 p-2 rounded-xl">
                <Image 
                  src="/logo.svg" 
                  alt="MindTrack Logo" 
                  width={28} 
                  height={28}
                  className="dark:invert"
                />
              </div>
              <span className="font-bold text-xl">MindTrack</span>
            </div>
            <p className="text-muted-foreground mb-5">
              Empowering you to understand and improve your mental wellbeing.
            </p>
            
            <div className="flex gap-4 mt-4">
              <a 
                href="#" 
                className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors" 
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors" 
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors" 
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title} className="p-6">
              <h3 className="font-semibold text-lg mb-5 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary/40 inline-block"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-primary/10 mt-12 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Heart className="h-4 w-4 text-primary" />
            &copy; {new Date().getFullYear()} MindTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 