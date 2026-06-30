import { Card } from "@/components/ui/card";

interface TimelineItem {
  year: string;
  period: string;
  title: string;
  organization: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "1983",
    period: "1983–84",
    title: "Manager (Civil), RITES",
    organization: "Indian Railways Technical & Economic Service",
    description:
      "Managed civil engineering projects for Indian Railways, overseeing transportation and construction initiatives.",
  },
  {
    year: "1995",
    period: "1995–99",
    title: "Director (Administration & Finance)",
    organization: "All India Radio & Doordarshan",
    description:
      "Managed administration and financial operations for India's premier broadcasting organizations.",
  },
  {
    year: "2000",
    period: "2000–02",
    title: "OSD to Heavy Industries Minister",
    organization: "Ministry of Heavy Industries & Public Enterprises",
    description:
      "Served as Officer on Special Duty, assisting in policy formulation and ministry administration.",
  },
  {
    year: "2006",
    period: "2006–07",
    title: "Director, Rural Development",
    organization: "Ministry of Rural Development",
    description:
      "Led rural development programs and watershed management initiatives across India.",
  },
  {
    year: "2007",
    period: "2007–09",
    title: "OSD to Home Minister",
    organization: "Ministry of Home Affairs",
    description:
      "Coordinated with government representatives and managed internal security matters.",
  },
  {
    year: "2009",
    period: "2009–10",
    title: "Director (CBDT & COFEPOSA)",
    organization: "Ministry of Finance",
    description:
      "Managed income tax administration and foreign exchange regulations.",
  },
  {
    year: "Present",
    period: "Current",
    title: "ADG, Ministry of Road Transport and Highways",
    organization: "Government of India",
    description:
      "Serving as Additional Director General, overseeing road infrastructure and transportation policies.",
  },
];

export default function CareerTimeline() {
  return (
    <div className="py-16 md:py-24">
      <h2 className="text-3xl font-bold text-accent mb-12 text-center">
        Career Timeline
      </h2>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent to-accent/30" />

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Content */}
              <div className="w-1/2 px-8">
                <Card
                  className={`p-6 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  } hover:shadow-lg transition-shadow`}
                >
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-foreground/70 mb-3">
                    {item.organization}
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="w-0 flex justify-center">
                <div className="w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg" />
              </div>

              {/* Empty space */}
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
