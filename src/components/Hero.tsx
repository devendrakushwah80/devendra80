import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Aspiring Data Scientist',
    'CSE-AIML Student',
    'Python Enthusiast',
    'Machine Learning Enthusiast'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[currentIndex];

      if (!isDeleting) {
        if (charIndex < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentFullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, texts]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="particle-bg">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 3 + 6}s`
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-inter">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
            <span className="text-gradient">Devendra</span>
            <br />
            <span className="text-foreground">Kushwah</span>
          </h1>
          
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <h2 className="text-xl md:text-3xl font-medium font-inter">
              <span className="typing-cursor">{currentText}</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            1st Year B.Tech (CSE-AIML) student at IPS Academy IES, Indore with CGPA 8.8.
            Passionate about transforming data into insights and building intelligent solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => window.open('#', '_blank')}
              className="btn-neon px-8 py-3 text-lg font-medium"
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="btn-neon-yellow px-8 py-3 text-lg font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-neon-blue hover:text-neon-yellow transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;