import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function Media() {
  const mediaItems = [
    {
      id: 1,
      title: "Public Service Address",
      type: "Video",
      date: "2024",
    },
    {
      id: 2,
      title: "Infrastructure Development Initiative",
      type: "Video",
      date: "2024",
    },
    {
      id: 3,
      title: "Community Outreach Program",
      type: "Video",
      date: "2023",
    },
    {
      id: 4,
      title: "Government Policy Discussion",
      type: "Article",
      date: "2023",
    },
    {
      id: 5,
      title: "Press Conference",
      type: "Video",
      date: "2023",
    },
    {
      id: 6,
      title: "Interview on Public Service",
      type: "Video",
      date: "2022",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Media</h1>
          <p className="text-lg mt-4 opacity-90">
            Videos, Articles, and Press Coverage
          </p>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-accent/20 to-accent/10 aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/15 transition-colors" />
                  {item.type === "Video" && (
                    <div className="z-10 p-4 rounded-full bg-accent/80 group-hover:bg-accent transition-colors">
                      <Play size={32} className="text-accent-foreground fill-accent-foreground" />
                    </div>
                  )}
                  {item.type === "Article" && (
                    <div className="z-10 text-4xl font-bold text-accent/30">
                      📄
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {item.type}
                    </span>
                    <span className="text-xs text-foreground/60">{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-foreground/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Follow on Social Media</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Stay updated with the latest news, announcements, and updates from A.P. Pathak's public service activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/appathak123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/APPathak4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                Twitter/X
              </a>
              <a
                href="https://www.youtube.com/channel/UC_C7uAOAH9RMzZs-CKCZ62w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
