import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/profile" },
    { label: "Gallery", href: "/gallery" },
    { label: "Media", href: "/media" },
    { label: "Trust", href: "/trust" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-accent text-accent-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/">
            <a className="font-bold text-xl hover:opacity-90 transition-opacity">
              A.P. PATHAK
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-sm font-medium hover:opacity-80 transition-opacity">
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent-foreground hover:bg-opacity-10 rounded transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-accent-foreground border-opacity-20">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block py-2 px-4 text-sm font-medium hover:bg-accent-foreground hover:bg-opacity-10 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
