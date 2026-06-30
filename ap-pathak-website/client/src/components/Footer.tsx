import { Link } from "wouter";
import { Facebook, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/profile" },
    { label: "Gallery", href: "/gallery" },
    { label: "Media", href: "/media" },
    { label: "Trust", href: "/trust" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="hover:text-accent transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <p className="text-sm">
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:info@appathak.com"
                  className="hover:text-accent transition-colors"
                >
                  info@appathak.com
                </a>
              </p>
              <p className="text-sm">
                <strong>Title:</strong>
                <br />
                ADG, Ministry of Road Transport and Highways
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to stay updated with the latest news and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background text-foreground"
                required
              />
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Subscribe
              </Button>
              {subscribed && (
                <p className="text-sm text-accent">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-background border-opacity-20 pt-8 flex items-center justify-between">
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/appathak123"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com/APPathak4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC_C7uAOAH9RMzZs-CKCZ62w"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="mailto:info@appathak.com"
              className="hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-opacity-70">
            © 2024 A.P. Pathak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
