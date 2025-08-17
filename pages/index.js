import Head from 'next/head'
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <Head>
        <title>Vishwajit Rikame - Frontend Developer & Team Lead</title>
        <meta name="description" content="Frontend Developer with 10+ years experience. Team Lead at Media.net. Expert in React JS, JavaScript, and modern web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* Navigation */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              VishwajitRikame
            </div>
            <nav className="navigation">
              <ul>
                <li>
                  <a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
                    About
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>
                    Skills
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>
                    Experience
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>
                    Projects
                  </a>
                  </li>
                <li>
                  <a onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-actions">
              <Link href="/Vishwajit%20Rikame_Frontend%20Lead.pdf">
                <a target="_blank" className="resume-btn">Resume</a>
              </Link>
              <a href="https://api.whatsapp.com/send?phone=9702270708&text=Hi,%20Website%20Query" className="connect-btn">
                Let's Chat
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className='hero-section'>
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className='hero-text'>
                <div className="typermain">
                  <h1 className='greeting'>Hi! I Am</h1>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString('Vishwajit Rikame')
                        .pauseFor(300)
                        .deleteChars(16)
                        .typeString('Frontend Developer')
                        .pauseFor(300)
                        .deleteChars(20)
                        .typeString('Team Lead')
                        .pauseFor(300)
                        .deleteChars(9)
                        .typeString('Creative Designer')
                        .pauseFor(300)
                        .deleteChars(17)
                        .typeString('Frontend Developer')
                        .pauseFor(2500)
                        .start();
                    }}
                  />
                </div>
                <h3 className="role">Senior Frontend Developer & Technical Lead at Media.net</h3>
                <p className="intro">
                  Passionate Frontend Developer and Technical Leader with 12+ years of experience architecting and building 
                  exceptional web applications. I specialize in React ecosystem, TypeScript, and modern frontend technologies, 
                  leading teams to deliver scalable, performant, and user-centric solutions that impact millions of users.
                </p>
                <div className='hero-tags'>
                  <span>#TechnicalLead</span>
                  <span>#ReactExpert</span>
                  <span>#TypeScript</span>
                  <span>#TeamMentor</span>
                  <span>#Architecture</span>
                </div>
                <div className="hero-buttons">
                  <a onClick={() => scrollToSection('projects')} className="btn-primary">View My Work</a>
                  <a onClick={() => scrollToSection('contact')} className="btn-secondary">Get In Touch</a>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-image">
                <img src="/vishwajitrikame.jpeg" alt="Vishwajit Rikame" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p>Learn more about my journey and expertise</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Senior Frontend Developer & Technical Lead</h3>
              <p>
                With over 12 years of comprehensive web development experience, I've evolved from a passionate 
                freelance developer to a strategic technical leader. Currently spearheading frontend development 
                initiatives at Media.net, I specialize in architecting scalable, performant, and innovative web solutions 
                that drive business growth and exceptional user experiences.
              </p>
              <p>
                My expertise spans the complete frontend ecosystem - from React and TypeScript to modern build tools 
                and deployment strategies. I've successfully led teams through complex migrations, implemented 
                micro-frontend architectures, and established development practices that have improved productivity 
                and code quality across multiple organizations.
              </p>
              <p>
                Beyond technical skills, I'm passionate about mentoring developers, fostering collaborative team 
                environments, and staying at the forefront of emerging web technologies. My approach combines 
                strategic thinking with hands-on development to deliver solutions that are both technically excellent 
                and business-focused.
              </p>
              <div className="about-highlights">
                <div className="highlight">
                  <h4>12+</h4>
                  <span>Years Experience</span>
                </div>
                <div className="highlight">
                  <h4>100+</h4>
                  <span>Projects Delivered</span>
                </div>
                <div className="highlight">
                  <h4>8+</h4>
                  <span>Team Members Led</span>
                </div>
                <div className="highlight">
                  <h4>500k+</h4>
                  <span>Users Impacted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Skills & Technologies</h2>
            <p>Technologies I work with to bring ideas to life</p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Technologies</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span>React JS & Ecosystem</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '95%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>TypeScript</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '90%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>JavaScript (ES6+)</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '95%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>HTML5 & CSS3</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '95%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Sass/SCSS & CSS</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '90%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Responsive Design</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '95%'}}></div></div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span>Next.js</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '90%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Redux & Context API</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '88%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Vue.js</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '75%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Material-UI & Styled Components</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '85%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Selenium Testing Library</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '80%'}}></div></div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Development Tools</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span>Git & GitHub Actions</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '90%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Webpack & Vite</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '85%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Docker & CI/CD</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '75%'}}></div></div>
                  </div>
                <div className="skill-item">
                  <span>ESLint & Prettier</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '90%'}}></div></div>
                  </div>
                <div className="skill-item">
                  <span>Performance Optimization</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '88%'}}></div></div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend & Leadership</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span>Node.js & Express</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '75%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>PHP, Python & MySQL</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '80%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>WordPress Development</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '90%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Team Leadership</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '90%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Agile & Scrum</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '85%'}}></div></div>
                </div>
                <div className="skill-item">
                  <span>Mentoring & Code Review</span>
                  <div className="skill-bar"><div className="skill-progress" style={{width: '88%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <div className="section-header">
            <h2>Work Experience</h2>
            <p>My professional journey and key achievements</p>
          </div>
                    <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2022 - Present</div>
              <div className="timeline-content">
                <h3>Team Lead - Frontend Development</h3>
                <h4>Media.net</h4>
                <p>Leading a cross-functional team of frontend developers, driving innovation and implementing cutting-edge web technologies. Responsible for architectural decisions, code quality standards, and strategic technical planning.</p>
                <ul>
                  <li>Scaled team from 3 to 8 developers while maintaining high productivity</li>
                  <li>Implemented micro-frontend architecture reducing deployment time by 50%</li>
                  <li>Led React 18 migration and modern state management adoption</li>
                  <li>Established CI/CD pipelines improving deployment frequency by 3x</li>
                  <li>Mentored 5+ junior developers with 100% retention rate</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Nov 2014 - Aug 2015</div>
              <div className="timeline-content">
                <h3>Junior Web Developer</h3>
                <h4>Flarepath</h4>
                <p>Developed high-performance web applications serving 500k+ active users. Led frontend development for multiple client projects using React, TypeScript, and modern tooling.</p>
                <ul>
                  <li>Built responsive applications achieving 98% performance scores</li>
                  <li>Implemented advanced state management with Redux Toolkit</li>
                  <li>Optimized bundle sizes reducing load times by 60%</li>
                  <li>Developed reusable component library used across 15+ projects</li>
                  <li>Collaborated with UX team to implement pixel-perfect designs</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">May 2014 - Nov 2014</div>
              <div className="timeline-content">
                <h3>Web Developer</h3>
                <h4>Hogoworks Solutions</h4>
                <p>Specialized in creating dynamic user interfaces for diverse client portfolios. Worked extensively with React, Vue.js, and JavaScript ES6+ to deliver engaging web experiences.</p>
                <ul>
                  <li>Delivered 25+ client projects with 100% on-time completion</li>
                  <li>Implemented responsive designs supporting all major browsers</li>
                  <li>Developed custom WordPress themes and plugins</li>
                  <li>Created email templates for marketing campaigns</li>
                  <li>Improved website loading speeds by average of 40%</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">June 2013 - May 2014</div>
              <div className="timeline-content">
                <h3>Web App Developer</h3>
                <h4>SAPS Technologies</h4>
                <p>Began professional journey developing websites using PHP, MySQL, and jQuery. Gained comprehensive understanding of full-stack development and client relationship management.</p>
                <ul>
                  <li>Built 60+ custom WordPress websites from scratch</li>
                  <li>Developed custom PHP applications for business automation</li>
                  <li>Created responsive email templates for various industries</li>
                  <li>Implemented SEO best practices improving search rankings</li>
                  <li>Managed client communications and project deliverables</li>
                </ul>
              </div>
            </div>            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Freelance Projects</h2>
            <p>Some of my recent work and achievements</p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/frontend.webp" alt="Algo Trading Platform" />
              </div>
              <div className="project-content">
                <h3>Algo Trading Platform</h3>
                <p>A sophisticated algorithmic trading platform developed using Python and MongoDB, integrated with Angelone Smart API for real-time trading capabilities.</p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>MongoDB</span>
                  <span>Angelone API</span>
                  <span>Trading Algorithms</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/vishwajitr/aone-app" target="_blank" className="project-link">
                    <img src="/github-50.svg" alt="GitHub" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/frontend.webp" alt="Coupons Website" />
              </div>
              <div className="project-content">
                <h3>Coupons Website</h3>
                <p>A comprehensive coupons and deals platform built with Next.js and API integration, hosted on Oracle Cloud with data sourced through advanced web scraping techniques.</p>
                <div className="project-tech">
                  <span>Next.js</span>
                  <span>API Integration</span>
                  <span>Oracle Cloud</span>
                  <span>Web Scraping</span>
                </div>
                <div className="project-links">
                  <a href="https://ofccode-sportybruh1990s-projects.vercel.app/" target="_blank" className="project-link">
                    <img src="/github-50.svg" alt="Live Demo" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/frontend.webp" alt="Site Builder Platform" />
              </div>
              <div className="project-content">
                <h3>Custom Site Builder</h3>
                <p>A config-based website builder platform enabling users to create dynamic websites through configuration. Features include multilingual support and responsive design.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Config-based</span>
                  <span>Responsive</span>
                  <span>Multilingual</span>
                </div>
                <div className="project-links">
                  <a href="https://www.sommarskulen.no/" target="_blank" className="project-link">
                    <img src="/github-50.svg" alt="Live Demo" />
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="freelance-projects">
            <h3>Additional Freelance Projects</h3>
            <div className="freelance-grid">
              <div className="freelance-item">
                <div className="freelance-image">
                  <img src="/foodtruck-tracking.png" alt="Food Truck Tracking System Interface" />
                </div>
                <div className="freelance-content">
                  <h4>Food Truck Tracking System</h4>
                  <p>A real-time tracking system using geolocation services and Firebase database for managing food truck locations and customer interactions. Features live map integration, route optimization, and customer notifications.</p>
                  <div className="project-tech">
                    <span>Geolocation API</span>
                    <span>Firebase</span>
                    <span>Real-time Updates</span>
                    <span>Maps Integration</span>
                  </div>
                </div>
              </div>
              <div className="freelance-item">
              <div className="freelance-image">
                  <img src="/fitistan-app.webp" alt="Fitistan.com Mobile App"  />
                </div>
                <div className="freelance-content">
                  <h4>Fitistan.com Mobile App</h4>
                  <p>Complete mobile app revamp using React.js with IONIC Framework, providing a seamless fitness and wellness experience.</p>
                  <div className="project-tech">
                    <span>React.js</span>
                    <span>IONIC Framework</span>
                    <span>Mobile Development</span>
                  </div>
                <div className="freelance-links mt-10">
                  <a href="https://www.fitistan.com/" target="_blank" className="project-link btn-primary">
                    Live Demo
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-cta">
            <p>Want to see more of my work?</p>
            <Link href="https://vishwajitposts.tumblr.com/">
              <a target="_blank" className="btn-primary">View Full Portfolio</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Let's Work Together</h2>
            <p>Ready to bring your ideas to life? Let's discuss your next project</p>
          </div>
          <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>I'm always interested in new opportunities and exciting projects. Whether you're a company looking to hire or you're someone with a great project idea, I'd love to hear from you!</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <strong>Email</strong>
                  <p>vishwajit.rikame@gmail.com</p>
                </div>
                <div className="contact-method">
                  <strong>Location</strong>
                  <p>Mumbai, India</p>
                </div>
                <div className="contact-method">
                  <strong>Response Time</strong>
                  <p>Within 24 hours</p>
                </div>
              </div>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/vishwajitrikame/" target="_blank" className="social-link">
                  <img src="/linkedin-50.svg" alt="LinkedIn" />
                  LinkedIn
                </a>
                <a href="https://github.com/vishwajitr/" target="_blank" className="social-link">
                  <img src="/github-50.svg" alt="GitHub" />
                  GitHub
                </a>
                <a href="https://api.whatsapp.com/send?phone=9702270708&text=Hi,%20Website%20Query" className="social-link">
                  WhatsApp
                </a>
              </div>
            </div>
            
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">VishwajitRikame</div>
              <p>Frontend Developer & Team Lead passionate about creating exceptional web experiences.</p>
            </div>
            <div className="footer-right">
              <div className="footer-links">
                <a onClick={() => scrollToSection('home')}>Home</a>
                <a onClick={() => scrollToSection('about')}>About</a>
                <a onClick={() => scrollToSection('skills')}>Skills</a>
                <a onClick={() => scrollToSection('experience')}>Experience</a>
                <a onClick={() => scrollToSection('projects')}>Projects</a>
                <a onClick={() => scrollToSection('contact')}>Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Vishwajit Rikame. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}