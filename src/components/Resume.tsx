import React from 'react';
import { Download, Eye, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const resumeData = {
    education: {
      degree: 'B.Tech in Computer Science Engineering (AI-ML)',
      institution: 'IPS Academy IES, Indore',
      year: '2024-2028 (Current: 1st Year)',
      cgpa: '8.8',
      subjects: ['Mathematics', 'Programming Fundamentals', 'Data Structures', 'AI Basics']
    },
    skills: {
      programming: ['Python', 'JavaScript', 'C++', 'SQL'],
      dataScience: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
      tools: ['Jupyter Notebook', 'VS Code', 'Git/GitHub', 'Google Colab']
    },
    achievements: [
      'Maintained 8.8 CGPA in first year',
      'Completed multiple AI/ML certifications',
      'Active GitHub contributor',
      'Consistent learner with 50+ hours of online courses'
    ]
  };

  const downloadResume = () => {
    // Placeholder for resume download
    alert('Resume download will be available soon!');
  };

  const previewResume = () => {
    // Placeholder for resume preview
    alert('Resume preview will be available soon!');
  };

  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            My <span className="text-gradient">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive overview of my academic background, skills, and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Resume Actions */}
          <div className="lg:col-span-1 scroll-reveal">
            <div className="card-neon p-8 rounded-lg sticky top-24">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-neon-blue to-neon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
                  Professional Resume
                </h3>
                <p className="text-sm text-muted-foreground">
                  Updated regularly with latest achievements
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={downloadResume}
                  className="btn-neon w-full py-3"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
                
                <Button
                  onClick={previewResume}
                  variant="outline"
                  className="btn-neon-yellow w-full py-3"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Preview Resume
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Last Updated</p>
                  <p className="text-neon-blue font-mono">December 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Resume Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <div className="scroll-reveal">
              <div className="card-neon p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-neon-blue" />
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-foreground">Education</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {resumeData.education.degree}
                    </h4>
                    <p className="text-muted-foreground mb-2">{resumeData.education.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                      <span className="text-muted-foreground">{resumeData.education.year}</span>
                      <span className="text-neon-blue font-semibold">CGPA: {resumeData.education.cgpa}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                    {resumeData.education.subjects.map((subject, index) => (
                      <div key={index} className="bg-secondary/50 rounded px-3 py-2 text-center">
                        <span className="text-xs text-foreground">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="scroll-reveal">
              <div className="card-neon p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-neon-yellow/20 rounded-full flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-neon-yellow" />
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-foreground">Technical Skills</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.programming.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Data Science & ML</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.dataScience.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-neon-yellow/20 text-neon-yellow rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.tools.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="scroll-reveal">
              <div className="card-neon p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-foreground">Key Achievements</h3>
                </div>
                
                <div className="space-y-4">
                  {resumeData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="card-neon p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold font-poppins text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm actively seeking internship opportunities and exciting projects in data science and AI/ML.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={downloadResume}
                className="btn-neon"
              >
                <Download className="w-5 h-5 mr-2" />
                Get My Resume
              </Button>
              <Button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="outline"
                className="btn-neon-yellow"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;