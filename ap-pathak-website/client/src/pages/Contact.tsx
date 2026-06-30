import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
          <p className="text-lg mt-4 opacity-90">
            Get in Touch with A.P. Pathak
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="p-8 mb-6 border-l-4 border-l-accent">
                <div className="flex items-start gap-4">
                  <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:info@appathak.com"
                      className="text-accent hover:text-accent/80 transition-colors break-all"
                    >
                      info@appathak.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 mb-6 border-l-4 border-l-accent">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Title</h3>
                    <p className="text-foreground/70">
                      ADG, Ministry of Road Transport and Highways
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-accent">
                <div className="flex items-start gap-4">
                  <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Social</h3>
                    <div className="space-y-2 text-sm">
                      <a
                        href="https://www.facebook.com/appathak123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors block"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://twitter.com/APPathak4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors block"
                      >
                        Twitter/X
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UC_C7uAOAH9RMzZs-CKCZ62w"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors block"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-accent mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Message Subject"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={6}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 text-base font-semibold"
                  >
                    Send Message
                  </Button>

                  {submitted && (
                    <p className="text-accent text-center font-medium">
                      Thank you for your message. We will get back to you soon!
                    </p>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
