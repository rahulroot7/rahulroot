import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Terminal, 
  Heart,
  Code
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/resumeData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        
        <div className="footer-top">
          
          <div className="footer-brand">
            <a href="#hero" className="footer-logo-link" aria-label="Back to top">
              <img 
                src="/rahul-logo.png" 
                alt="Rahul - Software Engineer" 
                className="footer-logo-img" 
              />
            </a>
            <p className="footer-bio">
              Full Stack Developer specializing in high-concurrency Node.js, enterprise Laravel architectures, real-time messaging, and high-performance full-stack web applications.
            </p>
            <div className="footer-social-icons">
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="footer-social-btn"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="footer-social-btn"
                aria-label="Direct Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Summary</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#experience">Career Experience</a></li>
              <li><a href="#projects">Key Projects</a></li>
              <li><a href="#architecture">System Architecture</a></li>
              <li><a href="#education">Education & Degrees</a></li>
              <li><a href="#contact">Contact Information</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Key Projects</h4>
            <ul className="footer-links-list">
              <li><a href="#projects">VAK – Real-Time Chat</a></li>
              <li><a href="#projects">NumberDekho – Marketplace</a></li>
              <li><a href="#projects">UCC Uttarakhand Platform</a></li>
              <li><a href="#projects">NIHFW & PM SHRI Portals</a></li>
              <li><a href="#projects">HRMS & ERP Applications</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Documents</h4>
            <div className="footer-resume-box">
              <p>Official curriculum vitae with complete project descriptions and tech stacks.</p>
              <button onClick={onOpenResume} className="btn btn-secondary btn-sm w-full">
                Preview Resume
              </button>
              <a 
                href="/Rahul_Chaurasia_Resume.pdf" 
                download="Rahul_Chaurasia_Resume.pdf" 
                className="btn btn-primary btn-sm w-full"
                style={{ marginTop: '0.5rem' }}
              >
                Download PDF
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Rahul Chaurasia. Designed & Built in React with Human Engineering Craftsmanship.
          </p>

          <button 
            onClick={scrollToTop} 
            className="scroll-to-top-btn"
            aria-label="Scroll to top of page"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-wrapper {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-subtle);
          padding: 5rem 0 2.5rem;
          margin-top: 4rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }

        @media (min-width: 640px) {
          .footer-top {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-top {
            grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
            gap: 3rem;
          }
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .footer-bio {
          font-size: 0.875rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .footer-social-icons {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .footer-social-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
          transform: translateY(-2px);
        }

        .footer-nav-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links-list a {
          font-size: 0.875rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: var(--accent-cyan);
        }

        .footer-resume-box {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .footer-resume-box p {
          font-size: 0.825rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
        }

        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
          }
        }

        .copyright-text {
          font-size: 0.825rem;
          color: var(--text-muted);
          text-align: center;
        }

        .scroll-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .scroll-to-top-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
        }
      `}</style>
    </footer>
  );
}
