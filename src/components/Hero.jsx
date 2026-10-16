import React from 'react';
import { 
  FileText, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Download,
  Sparkles,
  Layers,
  Database,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/resumeData';

export default function Hero({ onOpenResume, onShowToast }) {
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    onShowToast(`Copied ${type} to clipboard: ${text}`);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          
          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="pulse-dot"></span>
            <span className="status-text">Available for Senior Full Stack & Backend Roles</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="hero-roles">
            <span className="role-tag">Full Stack Developer</span>
            <span className="role-sep">•</span>
            <span className="role-tag">Node.js Engineer</span>
            <span className="role-sep">•</span>
            <span className="role-tag">Laravel Architect</span>
          </div>

          <p className="hero-summary">
            Full Stack Developer with <strong>4+ years of hands-on experience</strong> architecting, developing, and deploying high-concurrency web applications, robust RESTful APIs, real-time messaging engines, and citizen-scale government platforms.
          </p>

          {/* Quick Contact & Info Chips */}
          <div className="hero-contact-chips">
            <button 
              onClick={() => copyToClipboard(personalInfo.email, 'Email')}
              className="contact-chip"
              title="Click to copy email"
            >
              <Mail size={15} />
              <span>{personalInfo.email}</span>
            </button>

            <button 
              onClick={() => copyToClipboard(personalInfo.phone, 'Phone number')}
              className="contact-chip"
              title="Click to copy phone"
            >
              <Phone size={15} />
              <span>{personalInfo.phone}</span>
            </button>

            <span className="contact-chip static-chip">
              <MapPin size={15} />
              <span>India</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button onClick={onOpenResume} className="btn btn-primary">
              <FileText size={18} />
              <span>View Full Resume</span>
            </button>

            <a href="#projects" className="btn btn-secondary">
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </a>

            <a 
              href="/Rahul_Chaurasia_Resume.pdf" 
              download="Rahul_Chaurasia_Resume.pdf" 
              className="btn btn-outline"
              title="Download Resume PDF file"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social-links">
            <span className="social-label">Connect:</span>
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>github.com/rahulroot7</span>
            </a>
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

        {/* Right Column: Profile Image & Tech Card */}
        <div className="hero-visual">
          <div className="profile-card-wrapper">
            
            {/* Ambient Back Glow */}
            <div className="profile-ambient-glow"></div>

            {/* Profile Card Container */}
            <div className="profile-card glass-card">
              <div className="profile-img-container">
                <img 
                  src={personalInfo.avatar} 
                  alt={personalInfo.name} 
                  className="profile-photo"
                  loading="eager"
                />
                <div className="profile-badge-overlay">
                  <span className="badge badge-emerald">
                    <CheckCircle2 size={12} /> Verified 4+ Yrs
                  </span>
                </div>
              </div>

              <div className="profile-details">
                <h3 className="profile-name">{personalInfo.name}</h3>
                <p className="profile-subtitle">Software Developer (Full Stack)</p>
                <div className="profile-tech-pills">
                  <span className="tech-pill">Node.js</span>
                  <span className="tech-pill">Laravel</span>
                  <span className="tech-pill">React.js</span>
                  <span className="tech-pill">Docker</span>
                  <span className="tech-pill">Redis</span>
                  <span className="tech-pill">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Floating Mini Badges for Human Engineering Credibility */}
            <div className="floating-stat-badge stat-top-right">
              <div className="stat-badge-icon">
                <Cpu size={16} />
              </div>
              <div className="stat-badge-content">
                <span className="stat-badge-number">30% Faster</span>
                <span className="stat-badge-label">API Response via Redis</span>
              </div>
            </div>

            <div className="floating-stat-badge stat-bottom-left">
              <div className="stat-badge-icon">
                <Database size={16} />
              </div>
              <div className="stat-badge-content">
                <span className="stat-badge-number">40% Reduced</span>
                <span className="stat-badge-label">DB Query Exec Time</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Metrics Counter Bar */}
      <div className="container hero-metrics-container">
        <div className="metrics-grid glass-card">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="metric-box">
              <div className="metric-value-row">
                <span className="metric-number gradient-text">{stat.value}</span>
              </div>
              <div className="metric-label">{stat.label}</div>
              <div className="metric-detail">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 8rem;
          padding-bottom: 4rem;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-container {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 4rem;
          }
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          margin-bottom: 1.25rem;
        }

        .status-text {
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--accent-emerald);
        }

        .hero-title {
          font-size: 2.75rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }

        .hero-roles {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .role-tag {
          color: var(--accent-cyan);
        }

        .role-sep {
          color: var(--text-muted);
        }

        .hero-summary {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 620px;
        }

        .hero-summary strong {
          color: var(--text-primary);
        }

        .hero-contact-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2rem;
        }

        .contact-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.825rem;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .contact-chip:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
          background: var(--bg-secondary);
        }

        .static-chip {
          cursor: default;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }

        .hero-social-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .social-label {
          font-weight: 500;
        }

        .social-icon-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--text-secondary);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          font-size: 0.825rem;
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
        }

        /* Profile Visual Column */
        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .profile-card-wrapper {
          position: relative;
          max-width: 380px;
          width: 100%;
        }

        .profile-ambient-glow {
          position: absolute;
          inset: -15px;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(99, 102, 241, 0.2));
          filter: blur(28px);
          z-index: 0;
          opacity: 0.8;
        }

        .profile-card {
          position: relative;
          z-index: 1;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          background: var(--bg-card);
        }

        .profile-img-container {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 3/4;
          background: #1e293b;
          border: 1px solid var(--border-subtle);
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition: transform 0.4s ease;
        }

        .profile-card:hover .profile-photo {
          transform: scale(1.02);
        }

        .profile-badge-overlay {
          position: absolute;
          bottom: 0.85rem;
          left: 0.85rem;
        }

        .profile-details {
          padding-top: 1rem;
        }

        .profile-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .profile-subtitle {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }

        .profile-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .tech-pill {
          font-size: 0.75rem;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          border: 1px solid var(--border-subtle);
        }

        /* Floating Badges */
        .floating-stat-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border-subtle);
          padding: 0.65rem 1rem;
          border-radius: var(--radius-md);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          z-index: 2;
          max-width: 210px;
          animation: float 4s ease-in-out infinite alternate;
        }

        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(-8px); }
        }

        .stat-top-right {
          top: -1.5rem;
          right: -1.5rem;
        }

        .stat-bottom-left {
          bottom: 2rem;
          left: -2rem;
          animation-delay: -2s;
        }

        @media (max-width: 640px) {
          .stat-top-right, .stat-bottom-left {
            display: none;
          }
        }

        .stat-badge-icon {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: rgba(56, 189, 248, 0.15);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-badge-content {
          display: flex;
          flex-direction: column;
        }

        .stat-badge-number {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-badge-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          line-height: 1.2;
        }

        /* Metrics Bar */
        .hero-metrics-container {
          margin-top: 3.5rem;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 1.5rem 1rem;
          border-radius: var(--radius-lg);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .metrics-grid {
            grid-template-columns: repeat(4, 1fr);
            padding: 2rem;
          }
        }

        .metric-box {
          text-align: center;
          padding: 0.5rem;
        }

        .metric-value-row {
          margin-bottom: 0.35rem;
        }

        .metric-number {
          font-size: 2.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .metric-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .metric-detail {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
}
