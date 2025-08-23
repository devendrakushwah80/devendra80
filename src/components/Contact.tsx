import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone, Copy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const contactInfo = {
    email: 'dk3313250@gmail.com',
    github: 'https://github.com/devendrakushwah80',
    linkedin: 'https://linkedin.com/in/devendrakushwah80',
    location: 'Indore, Madhya Pradesh, India'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setEmailCopied(true);
      toast({
        title: "Email Copied!",
        description: "Email address copied to clipboard.",
      });
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Could not copy email. Please select and copy manually.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <div className="scroll-reveal">
            <div className="card-neon p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-8">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <div className="flex items-center justify-between">
                      <p className="text-foreground font-mono">{contactInfo.email}</p>
                      <Button
                        onClick={copyEmail}
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-neon-blue"
                      >
                        {emailCopied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neon-yellow/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-neon-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">{contactInfo.location}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                  <div className="flex space-x-4">
                    <Button
                      onClick={() => window.open(contactInfo.github, '_blank')}
                      className="btn-neon flex-1"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      onClick={() => window.open(contactInfo.linkedin, '_blank')}
                      className="btn-neon-yellow flex-1"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                  <div>
                    <p className="text-green-400 font-semibold text-sm">Available for Opportunities</p>
                    <p className="text-green-300/80 text-xs">Open to internships and collaborative projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="scroll-reveal">
            <div className="card-neon p-8 rounded-lg">
              <h3 className="text-2xl font-bold font-poppins text-foreground mb-8">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="bg-secondary border-border focus:border-neon-blue"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-secondary border-border focus:border-neon-blue"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="bg-secondary border-border focus:border-neon-blue resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-neon w-full py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  I typically respond within 24 hours. For urgent matters, 
                  feel free to reach out directly via email or LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;