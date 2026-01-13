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
      title: 'IBM Machine Learning',
      provider: 'IBM (via Coursera)',
      date: '2024',
      description: 'Industry-recognized IBM certification covering end-to-end machine learning workflow including data preprocessing, supervised and unsupervised learning, model evaluation, and practical implementation using real-world datasets.',
      url: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/L0KGOK1O29J4',
      badge: '🎓',
      skills: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Model Evaluation & Validation',
        'Feature Engineering',
        'Regression & Classification',
        'Machine Learning Pipelines'
      ],
      verified: true
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      provider: 'Oracle',
      date: '13 October 2025',
      description: 'Professional-level Oracle certification focused on Generative AI and Large Language Models (LLMs) using Oracle Cloud Infrastructure (OCI). Validates skills in using OCI Generative AI services, building Retrieval-Augmented Generation (RAG) solutions, semantic search, vector databases, and deploying end-to-end LLM-powered applications with best practices.',
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=B059D2C17275EC53D29EE063A33AB46EAAA38AC9A308C79EE57CDD839E75696C',
      badge: '🤖',
      skills: [
        'Generative AI',
        'Large Language Models (LLMs)',
        'OCI Generative AI Service',
        'Retrieval-Augmented Generation (RAG)',
        'Vector Databases',
        'Semantic Search',
        'LLM Application Deployment'
      ],
      verified: true,
      expiration: '13 October 2027'
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
      provider: 'Oracle',
      date: '17 October 2025',
      description: 'Professional-level Oracle certification validating expertise in building end-to-end data science and machine learning solutions on Oracle Cloud Infrastructure (OCI). Covers ML lifecycle management, selection of OCI services, application of OCI Data & AI services, and adoption of ML and cloud best practices for real-world business use cases.',
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=39EC494415CEC4B861EDB81D1848100A5B8C9B8435FB8A55F994AD866D3AC73F',
      badge: '🏅',
      skills: [
        'Oracle Cloud Infrastructure (OCI)',
        'Machine Learning Lifecycle',
        'OCI Data & AI Services',
        'Enterprise Data Science',
        'ML Solution Design',
        'Cloud & ML Best Practices'
      ],
      verified: true,
      expiration: '17 October 2027'
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
