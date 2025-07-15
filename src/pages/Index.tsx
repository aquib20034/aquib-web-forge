
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Filter, Calendar, Users, Code, Award, ChevronDown, Menu, X, Globe, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Washup - Laundry Management System",
      description: "Complete laundry management system built with Laravel backend and React Native mobile app for efficient laundry operations.",
      tech: ["Laravel", "React Native", "MySQL", "REST API"],
      category: "web",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      github: "https://github.com/aquib20034/",
      demo: "#",
      company: "Geeksroot"
    },
    {
      title: "Jack in Box - ERC721A NFT",
      description: "Advanced NFT marketplace with ERC721A standard implementation, featuring gas-optimized batch minting and trading capabilities.",
      tech: ["Solidity", "React", "Web3.js", "IPFS", "ERC721A"],
      category: "blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      github: "https://github.com/aquib20034/",
      demo: "#",
      company: "Geeksroot"
    },
    {
      title: "Baguette Boyz NFT Collection",
      description: "ERC-721 smart contract with advanced features including whitelisting, max wallet mint limits, and presale functionality.",
      tech: ["Solidity", "OpenZeppelin", "Hardhat", "React"],
      category: "blockchain",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
      github: "https://github.com/aquib20034/",
      demo: "#",
      company: "Geeksroot"
    },
    {
      title: "Playon - Snooker League Management",
      description: "Laravel-based comprehensive snooker league management system with player statistics, tournament organization, and match scheduling.",
      tech: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
      category: "web",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      github: "https://github.com/aquib20034/",
      demo: "#",
      company: "Geeksroot"
    },
    {
      title: "Highway App - Sindh Transport",
      description: "React Native and Laravel-based transportation app for Sindh province with real-time tracking and booking features.",
      tech: ["React Native", "Laravel", "MySQL", "Google Maps API"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      github: "https://github.com/aquib20034/",
      demo: "#",
      company: "Geeksroot"
    },
    {
      title: "Blockchain Land Registry",
      description: "Revolutionary land registration system using blockchain technology for immutable property records and transparent transactions.",
      tech: ["Solidity", "Next.js", "Ethereum", "IPFS"],
      category: "blockchain",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      github: "https://github.com/aquib20034/",
      demo: "#",
      company: "Research Project"
    }
  ];

  const skills = {
    "Frontend Development": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Vue.js", "jQuery"],
    "Backend Development": ["PHP", "Laravel", "Node.js", "REST APIs", "MySQL", "MongoDB"],
    "Blockchain": ["Solidity", "Ethereum", "Hardhat", "OpenZeppelin", "Web3.js", "IPFS", "UniSwap"],
    "Mobile Development": ["React Native", "Android"],
    "Tools & Others": ["Git", "Bitbucket", "Postman", "Tailwind CSS"]
  };

  const experiences = [
    {
      title: "Full-Stack & Blockchain Developer",
      company: "Geeksroot",
      period: "Oct 2020 – Present",
      location: "Karachi, Pakistan",
      website: "https://geeksroot.com",
      description: "Leading development of innovative web and blockchain solutions including NFT marketplaces, DeFi applications, and enterprise management systems.",
      achievements: [
        "Developed multiple ERC721/ERC721A NFT contracts",
        "Built scalable Laravel applications with React frontends",
        "Implemented blockchain solutions for various industries"
      ]
    },
    {
      title: "Web Developer",
      company: "LUMHS",
      period: "Mar 2020 – Aug 2020",
      location: "Jamshoro, Pakistan",
      description: "Developed E-Store management system for university operations using Laravel framework.",
      achievements: [
        "Built comprehensive store management system",
        "Improved university's digital infrastructure"
      ]
    },
    {
      title: "PHP Developer",
      company: "Ali Solutions",
      period: "Jan 2018 – Feb 2019",
      description: "Developed hospital management system using Core PHP, focusing on patient management and medical records.",
      achievements: [
        "Created MMCH hospital management system",
        "Implemented patient record management features"
      ]
    }
  ];

  const awards = [
    {
      title: "Best Research-Based Award",
      event: "IICT-2020",
      organization: "University of Sindh, Jamshoro",
      year: "2020"
    }
  ];

  const publications = [
    {
      title: "Blockchain-Based Land Record Management in Pakistan",
      publisher: "IEEE",
      url: "https://ieeexplore.ieee.org/document/9073927"
    },
    {
      title: "Blockchain Implementation Challenges & Limitation",
      publisher: "USJICT",
      url: "https://sujo.usindh.edu.pk/index.php/USJICT/article/view/3300"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const downloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement('a');
    link.href = '/cv-muhammad-aquib.pdf'; // You would need to add this file to public folder
    link.download = 'Muhammad_Aquib_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl gradient-text">Muhammad Aquib</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="rounded-full"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
                Muhammad Aquib
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">
                Senior Full-Stack & Blockchain Developer
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                📍 Mirpurkhas, Pakistan | 📧 aquib20034@gmail.com | 📞 +92 313 9120034
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Building scalable web apps and decentralized solutions with purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection('projects')} className="group bg-primary hover:bg-primary/90">
                  View Portfolio
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                  Contact Me
                </Button>
                <Button variant="outline" size="lg" onClick={downloadCV} className="bg-accent/10 hover:bg-accent/20">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm Muhammad Aquib, an experienced Full-Stack & Blockchain Developer with 7+ years of expertise in PHP (Laravel), smart contracts, and scalable multi-tenant apps. I specialize in Ethereum, Binance, Solana, and Polygon ecosystems, developing NFTs, tokens, and DeFi protocols.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Personal Details:</h3>
                  <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                    <div>📅 Born: May 16, 1997</div>
                    <div>🎓 BS Information Technology - University of Sindh (2016-2019)</div>
                    <div>🗣️ Languages: English, Urdu, Hindi</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">English</Badge>
                  <Badge variant="secondary">Urdu</Badge>
                  <Badge variant="secondary">Hindi</Badge>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/aquib20034/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="hover:bg-primary/10">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/aquib-shaikh-a31a49192" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="hover:bg-primary/10">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="mailto:aquib20034@gmail.com">
                    <Button variant="outline" size="icon" className="hover:bg-primary/10">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-semibold">Awards & Recognition</h3>
                    </div>
                    {awards.map((award, index) => (
                      <div key={index} className="mb-2">
                        <p className="font-medium text-primary">{award.title}</p>
                        <p className="text-sm text-muted-foreground">{award.event} - {award.organization} ({award.year})</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <BookOpen className="h-5 w-5 text-accent mr-2" />
                      <h3 className="font-semibold">Publications</h3>
                    </div>
                    {publications.map((pub, index) => (
                      <div key={index} className="mb-2">
                        <a href={pub.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
                          {pub.title}
                        </a>
                        <p className="text-sm text-muted-foreground">{pub.publisher}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-primary/10">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-primary">{exp.title}</CardTitle>
                        <CardDescription className="text-accent font-medium">
                          {exp.company} • {exp.period}
                        </CardDescription>
                        {exp.location && (
                          <CardDescription className="flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {exp.location}
                          </CardDescription>
                        )}
                        {exp.website && (
                          <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center mt-1">
                            <Globe className="h-3 w-3 mr-1" />
                            {exp.website}
                          </a>
                        )}
                      </div>
                      <Badge className={index === 0 ? 'bg-primary' : 'bg-secondary'}>
                        {index === 0 ? 'Current' : 'Previous'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    {exp.achievements && (
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <Star className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Projects</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('all')}
                className={activeFilter === 'all' ? 'bg-primary' : ''}
              >
                All Projects
              </Button>
              <Button
                variant={activeFilter === 'web' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('web')}
                className={activeFilter === 'web' ? 'bg-primary' : ''}
              >
                Web Development
              </Button>
              <Button
                variant={activeFilter === 'blockchain' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('blockchain')}
                className={activeFilter === 'blockchain' ? 'bg-primary' : ''}
              >
                Blockchain
              </Button>
              <Button
                variant={activeFilter === 'mobile' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('mobile')}
                className={activeFilter === 'mobile' ? 'bg-primary' : ''}
              >
                Mobile Apps
              </Button>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.company && (
                        <Badge variant="outline" className="text-xs">
                          {project.company}
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Let's work together</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:aquib20034@gmail.com" className="hover:text-primary transition-colors">
                      aquib20034@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+92 313 9120034</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Mirpurkhas, Pakistan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="https://github.com/aquib20034/" className="hover:text-primary transition-colors">
                      github.com/aquib20034
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a href="https://linkedin.com/in/aquib-shaikh-a31a49192" className="hover:text-primary transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Send Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Your Name" className="border-primary/20 focus:border-primary" />
                  <Input type="email" placeholder="Your Email" className="border-primary/20 focus:border-primary" />
                  <Textarea placeholder="Your Message" rows={4} className="border-primary/20 focus:border-primary" />
                  <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Muhammad Aquib. All rights reserved.</p>
            <p className="text-sm mt-2">Full-Stack & Blockchain Developer | Building the future with code</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
