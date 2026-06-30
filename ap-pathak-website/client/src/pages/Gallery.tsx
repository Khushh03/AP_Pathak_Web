import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Official", "Events", "Community", "Projects"];

  const galleryItems = [
    {
      id: 1,
      title: "Official Portrait",
      category: "Official",
      description: "Professional portrait as ADG",
    },
    {
      id: 2,
      title: "Public Service Event",
      category: "Events",
      description: "Government event participation",
    },
    {
      id: 3,
      title: "Government Meeting",
      category: "Official",
      description: "Ministry coordination meeting",
    },
    {
      id: 4,
      title: "Community Engagement",
      category: "Community",
      description: "Community outreach program",
    },
    {
      id: 5,
      title: "Infrastructure Project",
      category: "Projects",
      description: "Road infrastructure initiative",
    },
    {
      id: 6,
      title: "Media Appearance",
      category: "Events",
      description: "Press and media coverage",
    },
    {
      id: 7,
      title: "Policy Discussion",
      category: "Official",
      description: "Government policy meeting",
    },
    {
      id: 8,
      title: "Rural Development",
      category: "Community",
      description: "Rural area visit and engagement",
    },
    {
      id: 9,
      title: "Award Ceremony",
      category: "Events",
      description: "Recognition and awards event",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-lg mt-4 opacity-90">
            A Visual Journey Through Public Service
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-foreground/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-background border-2 border-accent text-accent hover:bg-accent/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-accent/20 to-accent/10 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/15 transition-colors" />
                  <div className="text-center z-10">
                    <div className="text-5xl font-bold text-accent/20 mb-4 group-hover:text-accent/40 transition-colors">
                      {item.id}
                    </div>
                    <p className="text-foreground/60 text-sm font-semibold">
                      {item.category}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                    View Photo →
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-foreground/5 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Gallery Information</h2>
          <p className="text-foreground/70 leading-relaxed">
            This gallery showcases A.P. Pathak's distinguished career in public service, including official government events, community engagement initiatives, infrastructure projects, and media appearances. The collection reflects his commitment to nation-building and public welfare across multiple government sectors.
          </p>
        </div>
      </section>
    </div>
  );
}
