import { Card } from "@/components/ui/card";
import CareerTimeline from "@/components/CareerTimeline";

export default function Profile() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Biography</h1>
          <p className="text-lg mt-4 opacity-90">
            A Distinguished Career in Public Service
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-accent mb-6">
              A.P. Pathak - ADG, Ministry of Road Transport and Highways
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              A.P. Pathak is a 1984 batch Allied Service Officer of the Government of India with over four decades of dedicated service to the nation. His career spans multiple government ministries and departments, demonstrating exceptional administrative acumen and commitment to public welfare.
            </p>
          </div>

          {/* Early Life & Education */}
          <Card className="p-8 mb-8 border-l-4 border-l-accent">
            <h3 className="text-2xl font-bold text-accent mb-4">Early Life & Education</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                Born in Bargaon, Thana Ram Nagar District, West Champaran, Bihar, A.P. Pathak completed his schooling from Kendriya Vidyalaya, Patna. He pursued higher education with distinction, earning a B-Tech in Civil Engineering from BIT Mesra (Birla Institute of Technology, Mesra) in Ranchi in 1980.
              </p>
              <p>
                Through hard work and dedication, he secured selection in the UPSC examination in 1982, marking the beginning of his illustrious career in public service. His selection as a 1984 batch Allied Service Officer opened doors to significant responsibilities across multiple government sectors.
              </p>
            </div>
          </Card>

          {/* Career Overview */}
          <Card className="p-8 mb-8 border-l-4 border-l-accent">
            <h3 className="text-2xl font-bold text-accent mb-4">Career Overview</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                Throughout his career, A.P. Pathak has held pivotal positions in various ministries including Railways, Information & Broadcasting, Heavy Industries, Rural Development, Home Affairs, and Finance. His roles have ranged from operational management to strategic policy formulation.
              </p>
              <p>
                Currently serving as Additional Director General (ADG) at the Ministry of Road Transport and Highways, he continues to contribute to the nation's infrastructure development and transportation policies. His tenure has been marked by innovative approaches to problem-solving and a deep commitment to administrative excellence.
              </p>
            </div>
          </Card>

          {/* Key Positions */}
          <Card className="p-8 mb-8 border-l-4 border-l-accent">
            <h3 className="text-2xl font-bold text-accent mb-4">Key Positions Held</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start">
                <span className="text-accent font-bold mr-4">•</span>
                <span><strong>Manager (Civil), RITES</strong> (1983–84) - Indian Railways Technical & Economic Service</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-4">•</span>
                <span><strong>Director (Administration & Finance)</strong> (1995–99) - All India Radio & Doordarshan</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-4">•</span>
                <span><strong>OSD to Heavy Industries Minister</strong> (2000–02) - Ministry of Heavy Industries & Public Enterprises</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-4">•</span>
                <span><strong>Director, Rural Development</strong> (2006–07) - Ministry of Rural Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-4">•</span>
                <span><strong>OSD to Home Minister</strong> (2007–09) - Ministry of Home Affairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-4">•</span>
                <span><strong>Director (CBDT & COFEPOSA)</strong> (2009–10) - Ministry of Finance</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-4">•</span>
                <span><strong>ADG, Ministry of Road Transport and Highways</strong> - Current Position</span>
              </li>
            </ul>
          </Card>

          {/* Philosophy & Vision */}
          <Card className="p-8 border-l-4 border-l-accent">
            <h3 className="text-2xl font-bold text-accent mb-4">Philosophy & Vision</h3>
            <div className="space-y-4 text-foreground/80">
              <p className="italic text-lg text-accent font-semibold">
                "Our motto is to serve our country and a dream to make novel India."
              </p>
              <p>
                This philosophy encapsulates A.P. Pathak's approach to public service. Throughout his career, he has demonstrated a commitment to innovation, efficiency, and citizen welfare. His work spans infrastructure development, administrative modernization, and policy implementation that benefits the broader population.
              </p>
              <p>
                Beyond his government roles, his establishment of the Babu Dham Trust in 2008 reflects his personal commitment to social welfare and community development, ensuring that his contributions extend beyond administrative corridors to directly impact the lives of underprivileged communities.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="container mx-auto px-4">
          <CareerTimeline />
        </div>
      </section>
    </div>
  );
}
