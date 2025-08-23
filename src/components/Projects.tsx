import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork, Calendar, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const featuredProjects = [
    {
      title: 'Lane Detection System',
      description: 'Computer vision project using OpenCV to detect and track lane lines on roads for autonomous vehicle applications.',
      tech: ['Python', 'OpenCV', 'NumPy'],
      image: '🛣️',
      status: 'Completed'
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing large datasets with real-time insights and predictive analytics.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
      image: '📊',
      status: 'In Progress'
    },
    {
      title: 'Mini ML Models Collection',
      description: 'Collection of beginner-friendly machine learning models including regression, classification, and clustering algorithms.',
      tech: ['Python', 'Scikit-learn', 'Jupyter'],
      image: '🤖',
      status: 'Ongoing'
    }
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/devendrakushwah80/repos?sort=updated&per_page=12');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        
        const data = await response.json();
        const filteredRepos = data
          .filter((repo: GitHubRepo) => !repo.name.includes('devendrakushwah80') && repo.description)
          .sort((a: GitHubRepo, b: GitHubRepo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        
        setRepos(filteredRepos);
      } catch (err) {
        setError('Unable to load GitHub repositories');
        console.error('Error fetching repos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      Python: '#3776ab',
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      HTML: '#e34c26',
      CSS: '#1572b6',
      Java: '#ed8b00',
      'C++': '#00599c',
    };
    return colors[language] || '#8b9dc3';
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-yellow mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing my journey in data science, machine learning, and software development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20 scroll-reveal">
          <h3 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-12 text-foreground">
            Featured Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="card-neon p-6 rounded-lg">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-4">{project.image}</div>
                  <h4 className="text-xl font-semibold font-poppins text-foreground mb-2">
                    {project.title}
                  </h4>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary rounded text-xs text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="btn-neon flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="btn-neon-yellow flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Projects */}
        <div className="scroll-reveal">
          <h3 className="text-2xl md:text-3xl font-bold font-poppins text-center mb-12 text-foreground">
            GitHub Repository
          </h3>
          
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-neon-blue" />
              <span className="ml-3 text-muted-foreground">Loading repositories...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 mb-4">{error}</p>
              <Button 
                onClick={() => window.open('https://github.com/devendrakushwah80', '_blank')}
                className="btn-neon"
              >
                <Github className="w-4 h-4 mr-2" />
                Visit GitHub Profile
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.slice(0, 9).map((repo) => (
                <div key={repo.id} className="card-neon p-6 rounded-lg">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold font-poppins text-foreground truncate">
                      {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                    </h4>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => window.open(repo.html_url, '_blank')}
                      className="text-muted-foreground hover:text-neon-blue"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {repo.description || 'No description available'}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    {repo.language && (
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        {repo.language}
                      </div>
                    )}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center">
                        <GitFork className="w-3 h-3 mr-1" />
                        {repo.forks_count}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(repo.updated_at)}
                    </div>
                    <Button
                      size="sm"
                      onClick={() => window.open(repo.html_url, '_blank')}
                      className="btn-neon"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button
              onClick={() => window.open('https://github.com/devendrakushwah80', '_blank')}
              className="btn-neon-yellow"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Repositories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;