"use client";

import { ReactNode } from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SmoothScrollLink({ 
  href, 
  children, 
  className = "",
  onClick 
}: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Get the target element
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
      // Update URL without page reload
      window.history.pushState(null, "", href);
    }
    
    // Call the onClick handler if provided
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
} 