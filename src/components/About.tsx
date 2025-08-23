import React from 'react';
import { GraduationCap, Award, Code, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'First-year CGPA of 8.8 in CSE-AIML program'
    },
    {
      icon: Brain,
      title: 'AI & ML Focus',
      description: 'Specializing in Artificial Intelligence and Machine Learning'
    },
    {
      icon: Code,
      title: 'Python Expertise',
      description: 'Proficient in Python and data science libraries'
    },
    {
      icon: Award,
      title: 'Certified Learner',
      description: 'Multiple certifications from Microsoft, LinkedIn & Kaggle'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Visual */}
          <div className="scroll-reveal">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* Neon Frame Effect */}
                <div className="absolute inset-0 rounded-full border-4 border-neon-blue animate-pulse"></div>
                <div className="absolute inset-2 rounded-full border-2 border-neon-yellow/50"></div>
                
                {/* Profile Image Placeholder */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                  <div className="text-6xl font-bold text-gradient">DK</div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center animate-float">
                  <Code className="w-8 h-8 text-neon-blue" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-yellow/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Brain className="w-8 h-8 text-neon-yellow" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="scroll-reveal">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-poppins text-foreground">
                Passionate About <span className="text-gradient">Data Science</span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing my B.Tech in Computer Science Engineering with specialization in 
                Artificial Intelligence and Machine Learning at IPS Academy IES, Indore. With a strong 
                academic foundation (CGPA: 8.8), I'm deeply passionate about leveraging data to solve 
                real-world problems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in AI/ML has just begun, but I'm committed to mastering Python, exploring 
                advanced machine learning algorithms, and contributing to the field of data science. 
                I believe in continuous learning and staying updated with the latest technological advancements.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {highlights.map((item, index) => (
                  <div key={index} className="card-neon p-6 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-neon-blue" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold font-poppins text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;