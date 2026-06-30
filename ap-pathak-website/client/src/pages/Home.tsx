import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent via-accent to-accent/90 text-accent-foreground overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-foreground rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-24 md:py-40 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block px-4 py-2 bg-accent-foreground/20 rounded-full">
              <p className="text-sm font-semibold">Welcome</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              A.P. Pathak
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 opacity-95">
              ADG, Ministry of Road Transport and Highways
            </p>
            <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90 max-w-2xl">
              Our motto is to serve our country and a dream to make novel India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/profile">
                <Button className="bg-background text-accent hover:bg-background/90 px-8 py-4 text-base font-semibold rounded-lg transition-all hover:shadow-lg">
                  Explore Career
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  variant="outline"
                  className="border-2 border-background text-background hover:bg-background/10 px-8 py-4 text-base font-semibold rounded-lg transition-all"
                >
                  View Gallery
                  <ChevronRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-l-4 border-l-accent hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">40+</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-accent mb-3">Years of Service</h3>
              <p className="text-foreground/70 leading-relaxed">
                Dedicated public service and commitment to nation building across multiple government sectors
              </p>
            </Card>
            <Card className="p-8 border-l-4 border-l-accent hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">7+</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-accent mb-3">Key Positions</h3>
              <p className="text-foreground/70 leading-relaxed">
                Served across Railways, Broadcasting, Industries, Rural Development, Home Affairs, and Finance
              </p>
            </Card>
            <Card className="p-8 border-l-4 border-l-accent hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">2008</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-accent mb-3">Babu Dham Trust</h3>
              <p className="text-foreground/70 leading-relaxed">
                Founded to uplift poor communities and provide opportunities for sustainable development
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Overview Section */}
      <section className="py-20 md:py-32 bg-foreground/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Distinguished Career
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              From a 1984 batch Allied Service Officer to Additional Director General at the Ministry of Road Transport and Highways, A.P. Pathak's career spans multiple government sectors with significant contributions to infrastructure development and administrative modernization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/profile">
              <Card className="p-8 cursor-pointer hover:shadow-lg transition-all group">
                <div className="mb-4 text-4xl">📋</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Full Biography
                </h3>
                <p className="text-foreground/70 mb-4">
                  Explore the complete career journey, education, and achievements
                </p>
                <span className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ChevronRight size={18} />
                </span>
              </Card>
            </Link>

            <Link href="/trust">
              <Card className="p-8 cursor-pointer hover:shadow-lg transition-all group">
                <div className="mb-4 text-4xl">🤝</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Babu Dham Trust
                </h3>
                <p className="text-foreground/70 mb-4">
                  Discover the mission to uplift communities and create opportunities
                </p>
                <span className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore <ChevronRight size={18} />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-32 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore More
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-95">
            Discover A.P. Pathak's distinguished career, media appearances, gallery, and connect through various channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link href="/profile">
              <Button className="bg-background text-accent hover:bg-background/90 px-8 py-3 font-semibold">
                Biography
              </Button>
            </Link>
            <Link href="/gallery">
              <Button className="bg-background text-accent hover:bg-background/90 px-8 py-3 font-semibold">
                Gallery
              </Button>
            </Link>
            <Link href="/media">
              <Button className="bg-background text-accent hover:bg-background/90 px-8 py-3 font-semibold">
                Media
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-background text-accent hover:bg-background/90 px-8 py-3 font-semibold">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
