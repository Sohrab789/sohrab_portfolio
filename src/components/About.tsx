import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { label: "Years of Research", value: "3+" },
    { label: "CGPA (M.S.)", value: "9.27" },
    { label: "Publications", value: "1+" },
    { label: "Projects Completed", value: "15+" }
  ];

  const interests = [
    "Marine Robotics",
    "Reinforcement Learning", 
    "Path Planning",
    "Control Systems",
    "Computer Vision",
    "Deep Learning"
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate researcher bridging the gap between AI and marine engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="animate-slide-in-left">
            <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  I'm a dedicated Marine Robotics researcher pursuing my M.S. in Ocean Engineering 
                  at IIT Madras, where I combine my passion for AI with cutting-edge marine technology.
                </p>
                <p>
                  My academic journey began with a B.Tech in Civil Engineering from Jamia Millia Islamia, 
                  achieving a remarkable CGPA of 9.22. This strong foundation led me to explore the 
                  fascinating intersection of artificial intelligence and marine systems.
                </p>
                <p>
                  Beyond academics, I'm deeply involved in leadership roles and enjoy traveling, 
                  badminton, and networking. These experiences have shaped my versatile approach 
                  to problem-solving and team collaboration.
                </p>
              </div>
            </Card>
          </div>

          {/* Stats and Skills */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Achievement Stats */}
            <Card className="p-6 bg-gradient-card border-primary/20">
              <h3 className="text-xl font-semibold mb-6 text-primary">Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-background/50">
                    <div className="text-2xl font-bold text-gradient-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Research Interests */}
            <Card className="p-6 bg-gradient-card border-primary/20">
              <h3 className="text-xl font-semibold mb-6 text-primary">Research Interests</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Card>

            {/* Education Highlights */}
            <Card className="p-6 bg-gradient-card border-primary/20">
              <h3 className="text-xl font-semibold mb-6 text-primary">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">M.S. Ocean Engineering</h4>
                  <p className="text-sm text-muted-foreground">IIT Madras • 2025 • CGPA: 9.27</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">B.Tech Civil Engineering</h4>
                  <p className="text-sm text-muted-foreground">Jamia Millia Islamia • 2021 • CGPA: 9.22</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;