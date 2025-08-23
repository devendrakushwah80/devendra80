import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85, description: 'Primary language for data science and ML' },
        { name: 'JavaScript', level: 70, description: 'Web development and data visualization' },
        { name: 'SQL', level: 75, description: 'Database querying and management' },
        { name: 'C++', level: 60, description: 'Algorithmic problem solving' },
      ]
    },
    {
      title: 'Data Science & ML',
      skills: [
        { name: 'Pandas', level: 80, description: 'Data manipulation and analysis' },
        { name: 'NumPy', level: 75, description: 'Numerical computing and arrays' },
        { name: 'Matplotlib', level: 70, description: 'Data visualization and plotting' },
        { name: 'Seaborn', level: 70, description: 'Statistical data visualization' },
        { name: 'Scikit-learn', level: 65, description: 'Machine learning algorithms' },
        { name: 'OpenCV', level: 60, description: 'Computer vision and image processing' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Jupyter Notebook', level: 80, description: 'Interactive data analysis environment' },
        { name: 'Git & GitHub', level: 75, description: 'Version control and collaboration' },
        { name: 'VS Code', level: 85, description: 'Preferred code editor and IDE' },
        { name: 'Google Colab', level: 70, description: 'Cloud-based ML development' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuously expanding my technical expertise in data science, machine learning, and software development
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="scroll-reveal">
              <h3 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-8 text-foreground">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="card-neon p-6 rounded-lg group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold font-poppins text-foreground">
                        {skill.name}
                      </h4>
                      <span className="text-neon-blue font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 mb-4 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.description}
                    </p>
                    
                    {/* Hover Effect */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-lg text-muted-foreground mb-6">
            Always eager to learn new technologies and frameworks
          </p>
          <div className="inline-flex items-center space-x-2 text-neon-blue">
            <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></span>
            <span className="font-mono text-sm">Currently learning: Deep Learning & Neural Networks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;