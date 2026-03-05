import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone,Menu,  Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'skills', 'education', 'contact'];
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Product Manager with 4+ years owning developer-facing products across AI/ML platforms and B2B SaaS. CS background with deep empathy for developers and a track record of translating technical complexity into simple, usable products that drive adoption and retention. I find the wedge, write the spec, and own what ships.";

  const experience = [
    {
      company: "Fabrix.ai",
      role: "Product Manager (Co-Op)",
      location: "",
      dates: "Jan 2025 – Jul 2025",
      highlights: [
        "Owned the AI Agent platform for 2K+ users, defining how ML outputs surfaced through 3 interactive features validated via A/B testing in Google Analytics with engineering and UX, driving a 20% engagement increase.",
        "Uncovered 3 underserved segments through 15+ discovery interviews and competitive teardowns, translating unmet needs into 6 prioritized feature bets that improved win rate by 12%.",
        "Restructured the roadmap around 3 north star KPIs (activation, time-to-value, retention), deprioritizing 4 low-ROI features to focus engineering on revenue-critical capabilities, reducing cycle time by 30%.",
        "Defined the product quality bar by authoring acceptance criteria for every PRD with engineering and QA using Jira and Confluence, reducing defects by 30% and enabling bi-weekly releases."
      ]
    },
    {
      company: "Sony",
      role: "Product Manager",
      location: "",
      dates: "Dec 2022 – Sep 2023",
      highlights: [
        "Owned product vision and GTM strategy for PlayStation's Partner Developer Portal, scaling adoption from 800 pilot users to 60K+ active partners across NA, EU, APAC, and LATAM.",
        "Grew partner adoption by 18% across 4 regions by negotiating with external partners to resolve conflicting priorities, presenting data-backed business cases that secured senior leadership buy-in.",
        "ML deployment latency was the #1 onboarding blocker. Partnered with data science and engineering to optimize the pipeline using SQL and Power BI, reducing deployment time by 25%.",
        "Accelerated release velocity by 20% by diagnosing systemic blockers that stalled 2 quarterly launches, restructuring the workflow for 15+ engineers across 3 time zones, unblocking PlayStation's Q4 rollout."
      ]
    },
    {
      company: "Qliken Technology",
      role: "Associate Product Manager",
      location: "",
      dates: "Jan 2020 – Nov 2022",
      highlights: [
        "NPS sat at 6.5 and churn was climbing. Conducted 20+ customer interviews to identify the top 3 satisfaction detractors, translating findings into a prioritized improvement roadmap with engineering, lifting NPS to 8.0.",
        "Drove a 15% conversion lift in the signup-to-activation funnel, directly impacting trial-to-paid revenue, by diagnosing top 3 drop-off points and validating onboarding UX improvements in Figma.",
        "Shipped 8+ features from PRD to launch, reducing time-to-market by 20% by establishing dependency mapping and phased rollout plans with engineering and design in Jira.",
        "Maintained a 92% on-time release rate across 40+ sprints by owning data-driven backlog prioritization, balancing customer pain points, tech debt, and feature requests using a weighted scoring framework."
      ]
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Product Strategy',
      skills: ['Product Vision', 'PRDs', 'Roadmap Prioritization', 'OKRs', 'A/B Testing', 'Go-to-Market', 'Competitive Analysis', 'Product-Led Growth', 'Success Metrics']
    },
    {
      icon: TrendingUp,
      title: 'Data & Analytics',
      skills: ['SQL', 'Google Analytics', 'Funnel Analysis', 'Cohort Analysis', 'Data-Driven Decisions']
    },
    {
      icon: Users,
      title: 'Design & Research',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Usability Testing', 'Customer Discovery']
    },
    {
      icon: Lightbulb,
      title: 'Tools & Leadership',
      skills: ['Jira', 'Confluence', 'Asana', 'GitHub', 'Slack', 'Miro', 'Notion', 'Power BI', 'Tableau', 'Amplitude', 'Cross-functional Leadership', 'Technical Product Management', 'Executive Communication', 'Developer Experience', 'API & SDK Product Management']
    }
  ];

  const education = [
    {
      school: "Northeastern University",
      degree: "Master of Science, Project Management | GPA: 3.8",
      location: "Boston, MA",
      dates: "2023 – 2025",
      details: "Advanced studies in project management with focus on product development and technical leadership."
    },
    {
      school: "Gogte Institute of Technology",
      degree: "Bachelor of Engineering, Computer Science",
      location: "Karnataka, India",
      dates: "2016 – 2020",
      details: "Foundation in computer science with coursework in software engineering, algorithms, and systems design."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
  <div className="max-w-6xl mx-auto px-6 py-4">

    <div className="flex items-center justify-between">

      {/* Logo */}
      <div className="text-xl md:text-2xl font-display text-black tracking-wide">
        SOHAN ANAND HANAGANDI
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {[
          { id: 'hero', label: 'Home' },
          { id: 'summary', label: 'Summary' },
          { id: 'experience', label: 'Experience' },
          { id: 'skills', label: 'Skills' },
          { id: 'education', label: 'Education' },
          { id: 'contact', label: 'Contact' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm font-light tracking-wide transition-colors duration-300 ${
              activeSection === item.id
                ? "text-black font-medium"
                : "text-brown hover:text-black"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-black"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

    </div>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

        {[
          { id: 'hero', label: 'Home' },
          { id: 'summary', label: 'Summary' },
          { id: 'experience', label: 'Experience' },
          { id: 'skills', label: 'Skills' },
          { id: 'education', label: 'Education' },
          { id: 'contact', label: 'Contact' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => {
              scrollToSection(item.id)
              setMobileMenuOpen(false)
            }}
            className="text-left text-brown hover:text-black transition"
          >
            {item.label}
          </button>
        ))}

      </div>
    )}

  </div>
</nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Sohan Anand Hanagandi"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              SOHAN ANAND HANAGANDI
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Product Manager | AI Platforms & Growth Strategy
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              BOSTON, MA, USA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'PARTNERS SCALED', value: '60K+', detail: 'PlayStation Developer Portal' },
              { label: 'ENGAGEMENT INCREASE', value: '20%', detail: 'AI Agent Platform' },
              { label: 'NPS IMPROVEMENT', value: '+1.5', detail: 'Points Lifted' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Product Manager with CS background and deep empathy for developers. Track record of scaling AI/ML platforms and B2B SaaS products from 800 to 60K+ users, translating technical complexity into simple, usable products that drive adoption and retention.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'AI/ML Platforms',
                detail: 'Own developer-facing AI Agent platforms for 2K+ users, defining ML output surfacing through interactive features. Drive 20% engagement increases through A/B testing and close collaboration with engineering and UX teams.'
              },
              {
                icon: Rocket,
                title: 'Growth & Scale',
                detail: 'Scale PlayStation Partner Developer Portal from 800 pilot users to 60K+ active partners across 4 global regions. Drive 18% partner adoption growth and 25% ML deployment latency reduction through data-backed optimization.'
              },
              {
                icon: Lightbulb,
                title: 'Product Excellence',
                detail: 'Maintain 92% on-time release rate across 40+ sprints. Lift NPS from 6.5 to 8.0 through customer discovery. Reduce defects by 30% and cycle time by 30% through rigorous PRD standards and roadmap prioritization.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              4+ years of product management experience across AI/ML platforms, developer portals, and B2B SaaS at Fabrix.ai, Sony PlayStation, and Qliken Technology.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Product strategy, data analytics, design research, and technical product management expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss AI platform strategy, developer experience, or product management opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+18573702511"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (857) 370-2511
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/sohhhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:sohanhanagandi19@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                sohanhanagandi19@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Sohan Anand Hanagandi · Product Management & AI Platforms.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;