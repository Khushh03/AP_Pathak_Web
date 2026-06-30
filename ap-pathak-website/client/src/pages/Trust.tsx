import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Lightbulb } from "lucide-react";

export default function Trust() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Babu Dham Trust</h1>
          <p className="text-lg mt-4 opacity-90">
            Serving Communities, Building Futures
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Overview */}
          <Card className="p-8 mb-8 border-l-4 border-l-accent">
            <h2 className="text-3xl font-bold text-accent mb-6">About the Trust</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              The Babu Dham Trust was established in 2008 with a noble mission to uplift and empower poor and underprivileged communities across India. Founded by A.P. Pathak, the trust reflects his deep commitment to social welfare and community development beyond his government service.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              The trust operates with the belief that sustainable development requires direct engagement with communities, providing them with opportunities for education, skill development, and economic empowerment.
            </p>
          </Card>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-l-4 border-l-accent">
              <h3 className="text-2xl font-bold text-accent mb-4">Mission</h3>
              <p className="text-foreground/80">
                To serve underprivileged communities by providing access to education, healthcare, livelihood opportunities, and social support systems that enable sustainable development and improve quality of life.
              </p>
            </Card>
            <Card className="p-8 border-l-4 border-l-accent">
              <h3 className="text-2xl font-bold text-accent mb-4">Vision</h3>
              <p className="text-foreground/80">
                To create a society where every individual, regardless of economic background, has equal opportunities to develop their potential and contribute meaningfully to nation-building.
              </p>
            </Card>
          </div>

          {/* Key Focus Areas */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-accent mb-8">Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 flex gap-4">
                <Heart className="text-accent flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Community Welfare</h4>
                  <p className="text-sm text-foreground/70">
                    Direct support and assistance to vulnerable populations
                  </p>
                </div>
              </Card>
              <Card className="p-6 flex gap-4">
                <Users className="text-accent flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Education</h4>
                  <p className="text-sm text-foreground/70">
                    Providing educational opportunities and skill development
                  </p>
                </div>
              </Card>
              <Card className="p-6 flex gap-4">
                <Target className="text-accent flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Livelihood</h4>
                  <p className="text-sm text-foreground/70">
                    Economic empowerment through employment and entrepreneurship
                  </p>
                </div>
              </Card>
              <Card className="p-6 flex gap-4">
                <Lightbulb className="text-accent flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Development</h4>
                  <p className="text-sm text-foreground/70">
                    Sustainable development initiatives for long-term impact
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="p-8 bg-accent/5 border-2 border-accent text-center">
            <h3 className="text-2xl font-bold text-accent mb-4">
              Learn More About Babu Dham Trust
            </h3>
            <p className="text-foreground/80 mb-6">
              Visit the official Babu Dham Trust website to learn more about their initiatives, ongoing projects, and how you can contribute to their mission of community development.
            </p>
            <a
              href="https://babudhamtrust.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-base font-semibold">
                Visit Babu Dham Trust Website
              </Button>
            </a>
          </Card>
        </div>
      </section>
    </div>
  );
}
