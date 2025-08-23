import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Neon Glow Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-poppins text-gradient mb-2">
              Devendra Kushwah
            </h3>
            <p className="text-sm text-muted-foreground">
              Aspiring Data Scientist & CSE-AIML Student
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex justify-center space-x-6">
            <Button
              onClick={() => window.open('https://github.com/devendrakushwah80', '_blank')}
              size="icon"
              variant="ghost"
              className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => window.open('https://linkedin.com/in/devendrakushwah80', '_blank')}
              size="icon"
              variant="ghost"
              className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => window.open('mailto:dk3313250@gmail.com')}
              size="icon"
              variant="ghost"
              className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          {/* Right: Back to Top */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="ghost"
              className="text-muted-foreground hover:text-neon-blue transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="flex items-center">
              © {currentYear} Devendra Kushwah. All Rights Reserved.
              <Heart className="w-4 h-4 mx-2 text-red-400" fill="currentColor" />
              Built with passion for Data Science
            </p>
            <p className="mt-2 md:mt-0">
              Designed & Developed with modern technologies
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-neon-yellow to-transparent opacity-30"></div>
      </div>
    </footer>
  );
};

export default Footer;