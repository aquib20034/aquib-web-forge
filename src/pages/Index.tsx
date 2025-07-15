
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Filter, Calendar, Users, Code, Award, ChevronDown, Menu, X } from 'lucide-react';
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
      title: "NFT Marketplace",
      description: "Full-featured NFT marketplace built on Ethereum using ERC721A standard with advanced features like auctions, collections, and royalties.",
      tech: ["Solidity", "React", "Web3.js", "IPFS"],
      category: "blockchain",
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    },
    {
      title: "School Management SaaS",
      description: "Comprehensive school management system with multi-tenant architecture, student portals, and administrative features.",
      tech: ["Laravel", "VueJS", "MySQL", "Tailwind"],
      category: "web",
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    },
    {
      title: "Uniswap-style DEX",
      description: "Decentralized exchange built on Cosmos ecosystem with automated market making and liquidity pools.",
      tech: ["Cosmos SDK", "React", "TypeScript"],
      category: "blockchain",
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    },
    {
      title: "Blockchain Land Registry",
      description: "Transparent land registration system using blockchain technology for immutable property records.",
      tech: ["Solidity", "Next.js", "Polygon", "IPFS"],
      category: "blockchain",
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    }
  ];

  const skills = {
    "Web Development": ["Laravel", "React", "Next.js", "Vue.js", "PHP", "JavaScript", "TypeScript"],
    "Blockchain": ["Solidity", "Truffle", "Hardhat", "OpenZeppelin", "Web3.js", "Ethers.js", "IPFS"],
    "Databases & Tools": ["MySQL", "MongoDB", "Git", "Docker", "AWS", "Tailwind CSS"],
    "Blockchains": ["Ethereum", "Binance Smart Chain", "Polygon", "Solana", "Cosmos"]
  };

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

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Muhammad Aquib</div>
            
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
      <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Muhammad Aquib
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
                Senior Laravel & Blockchain Developer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Building scalable web apps and decentralized solutions with purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection('projects')} className="group">
                  View Portfolio
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                  Contact Me
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm Muhammad Aquib, an experienced Full-Stack & Blockchain Developer with 7+ years of expertise in PHP (Laravel), smart contracts, and scalable multi-tenant apps. I specialize in Ethereum, Binance, Solana, and Polygon ecosystems, developing NFTs, tokens, and DeFi protocols.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">English</Badge>
                  <Badge variant="secondary">Urdu</Badge>
                  <Badge variant="secondary">Hindi</Badge>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/aquib20034/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-semibold">Certification</h3>
                    </div>
                    <p className="text-muted-foreground">Certified Blockchain Developer</p>
                  </CardContent>
                </Card>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Full-Stack Developer</CardTitle>
                      <CardDescription className="text-primary font-medium">UpWork • Present</CardDescription>
                    </div>
                    <Badge>Current</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Working as a freelance full-stack developer, delivering high-quality web applications and blockchain solutions to clients worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Full-Stack & Blockchain Developer</CardTitle>
                      <CardDescription className="text-primary font-medium">Geeksroot • 2020–2023</CardDescription>
                    </div>
                    <Badge variant="secondary">3 years</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Delivered projects in NFT marketplaces, POS systems, DeFi apps, laundry and snooker management systems. Worked with Laravel, React, Next.js, Solidity, Hardhat, and Truffle.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Solidity</Badge>
                    <Badge variant="outline">Hardhat</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('all')}
              >
                All Projects
              </Button>
              <Button
                variant={activeFilter === 'web' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('web')}
              >
                Web Development
              </Button>
              <Button
                variant={activeFilter === 'blockchain' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('blockchain')}
              >
                Blockchain
              </Button>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                    <Code className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Let's work together</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>aquib@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="https://github.com/aquib20034/" className="hover:text-primary transition-colors">
                      github.com/aquib20034
                    </a>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button className="w-full">Send Message</Button>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
