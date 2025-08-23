import React from 'react';
import { ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: 'Career Essentials in Generative AI',
      provider: 'Microsoft & LinkedIn Learning',
      date: '2024',
      description: 'Comprehensive course covering fundamentals of Generative AI, including applications, ethics, and practical implementations.',
      url: 'https://www.linkedin.com/learning/certificates/770b7bc325492358b0ce06879b3ea9d82a763b29aecd3cd7687409a617f1c6f9?trk=share_certificate',
      badge: '🤖',
      skills: ['Generative AI', 'AI Ethics', 'Prompt Engineering'],
      verified: true
    },
    {
      title: 'Intro to Machine Learning',
      provider: 'Kaggle Learn',
      date: '2024',
      description: 'Foundation course covering basic machine learning concepts, model building, and evaluation techniques.',
      url: 'https://www.kaggle.com/learn/certification/devendrakushwah08/intro-to-machine-learning',
      badge: '📚',
      skills: ['Supervised Learning', 'Model Evaluation', 'Feature Engineering'],
      verified: true
    },
    {
      title: 'Intermediate Machine Learning',
      provider: 'Kaggle Learn',
      date: '2024',
      description: 'Advanced machine learning techniques including cross-validation, missing value handling, and categorical variables.',
      url: 'https://www.kaggle.com/learn/certification/devendrakushwah08/intermediate-machine-learning',
      badge: '🎯',
      skills: ['Cross Validation', 'XGBoost', 'Data Preprocessing'],
      verified: true
    },
    {
      title: 'Python Programming',
      provider: 'Various Platforms',
      date: '2023-2024',
      description: 'Multiple certifications in Python programming fundamentals and advanced concepts.',
      url: '#',
      badge: '🐍',
      skills: ['Python Basics', 'OOP', 'Data Structures'],
      verified: false
    },
    {
      title: 'Data Analysis with Pandas',
      provider: 'Online Learning',
      date: '2024',
      description: 'Specialized course in data manipulation and analysis using Pandas library.',
      url: '#',
      badge: '🐼',
      skills: ['Data Manipulation', 'Data Cleaning', 'Statistical Analysis'],
      verified: false
    },
    {
      title: 'Computer Vision Basics',
      provider: 'Self-Study & Projects',
      date: '2024',
      description: 'Practical learning through projects involving OpenCV and image processing techniques.',
      url: '#',
      badge: '👁️',
      skills: ['OpenCV', 'Image Processing', 'Object Detection'],
      verified: false
    }
  ];

  const stats = [
    { label: 'Verified Certificates', value: '3' },
    { label: 'Learning Hours', value: '50+' },
    { label: 'Platforms', value: '4' },
    { label: 'Skills Gained', value: '15+' }
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            <span className="text-gradient">Certifications</span> & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and skill development through industry-recognized certifications
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 scroll-reveal">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="card-neon p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal">
          {certifications.map((cert, index) => (
            <div key={index} className="card-neon p-6 rounded-lg group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.badge}</div>
                {cert.verified && (
                  <div className="flex items-center text-green-400 text-xs">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Verified
                  </div>
                )}
              </div>

              {/* Title & Provider */}
              <h3 className="text-lg font-semibold font-poppins text-foreground mb-2 group-hover:text-neon-blue transition-colors duration-300">
                {cert.title}
              </h3>
              
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Award className="w-4 h-4 mr-2" />
                {cert.provider}
              </div>

              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                {cert.date}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 bg-secondary rounded text-xs text-foreground border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <Button
                onClick={() => cert.url !== '#' ? window.open(cert.url, '_blank') : null}
                disabled={cert.url === '#'}
                className={`w-full ${cert.url !== '#' ? 'btn-neon' : 'opacity-50 cursor-not-allowed'}`}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {cert.url !== '#' ? 'View Certificate' : 'Coming Soon'}
              </Button>

              {/* Hover Effect Line */}
              <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="mt-20 text-center scroll-reveal">
          <div className="card-neon p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins text-foreground mb-6">
              Continuous Learning Journey
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a first-year student, I believe in staying ahead of the curve by continuously 
              learning new technologies and earning industry-recognized certifications. Each 
              certification represents not just knowledge gained, but a step forward in my 
              journey to become a skilled data scientist.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://www.linkedin.com/in/devendrakushwah80', '_blank')}
                className="btn-neon"
              >
                View All Certifications
              </Button>
              <Button
                onClick={() => window.open('https://www.kaggle.com/devendrakushwah08', '_blank')}
                className="btn-neon-yellow"
              >
                Kaggle Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;