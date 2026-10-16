import React from 'react';
import { 
  Server, 
  Database, 
  Zap, 
  ShieldCheck, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  MapPin,
  CheckCircle,
  FileText
} from 'lucide-react';
import { professionalSummary } from '../data/resumeData';

export default function About({ onOpenResume }) {
  const pillars = [
    {
      icon: <Server size={22} className="pillar-icon-svg" />,
      title: "Backend & Microservices",
      desc: "Robust RESTful APIs, microservices, and asynchronous queue processing with Node.js, Express, Fastify, and Laravel (PHP 8). Architecture built on clean code, repository patterns, and strict role-based access control (RBAC/JWT)."
    },
    {
      icon: <Zap size={22} className="pillar-icon-svg" />,
      title: "Real-Time & High Concurrency",
      desc: "Architect of sub-100ms real-time messaging engines using Socket.IO, WebSockets, and RabbitMQ message brokers, successfully supporting 500+ simultaneous connections and 10,000+ daily events."
    },
    {
      icon: <Database size={22} className="pillar-icon-svg" />,
      title: "Database & Query Tuning",
      desc: "Deep proficiency in PostgreSQL, MySQL, MongoDB, and Redis. Proven track record reducing database query execution times by 40% and boosting API response speeds by 30% through index optimization and schema design."
    },
    {
      icon: <ShieldCheck size={22} className="pillar-icon-svg" />,
      title: "Enterprise & Government Scale",
      desc: "Delivering mission-critical platforms for state and national government projects (UCC Uttarakhand, NIHFW, PM SHRI, UDISE+, HRMS). Engineered for audit-grade security, Dockerized CI/CD, and citizen-scale reliability."
    }
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Professional Profile</span>
          </div>
          <h2 className="section-title">
            Engineering for <span className="gradient-text">Scale & Reliability</span>
          </h2>
          <p className="section-description">
            A comprehensive look at my background, architectural philosophies, and enterprise track record.
          </p>
        </div>

        {/* Main Bio Grid */}
        <div className="about-grid">
          
          {/* Left: Summary Card */}
          <div className="about-summary-card glass-card">
            <h3 className="card-heading">
              <Briefcase size={20} className="card-heading-icon" />
              <span>Professional Summary</span>
            </h3>

            <p className="summary-paragraph">
              {professionalSummary}
            </p>

            <div className="key-attributes-list">
              <div className="attribute-item">
                <CheckCircle size={16} className="attr-check" />
                <span>Enterprise & Government Digital Platforms Developer</span>
              </div>
              <div className="attribute-item">
                <CheckCircle size={16} className="attr-check" />
                <span>Experienced in MVC, Repository Pattern & Microservices</span>
              </div>
              <div className="attribute-item">
                <CheckCircle size={16} className="attr-check" />
                <span>Docker Containerization & GitHub Actions CI/CD Automations</span>
              </div>
              <div className="attribute-item">
                <CheckCircle size={16} className="attr-check" />
                <span>Redis In-Memory Caching & Elastic Database Optimization</span>
              </div>
            </div>

            <div className="summary-footer">
              <button onClick={onOpenResume} className="btn btn-secondary btn-sm">
                <FileText size={15} />
                <span>Inspect Full Credentials</span>
              </button>
            </div>
          </div>

          {/* Right: Quick Specs Table */}
          <div className="about-specs-card glass-card">
            <h3 className="card-heading">
              <GraduationCap size={20} className="card-heading-icon" />
              <span>Snapshot Details</span>
            </h3>

            <div className="specs-list">
              <div className="spec-row">
                <span className="spec-title">Full Name</span>
                <span className="spec-value">Rahul Chaurasia</span>
              </div>
              <div className="spec-row">
                <span className="spec-title">Experience</span>
                <span className="spec-value">4+ Years (2022 – Present)</span>
              </div>
              <div className="spec-row">
                <span className="spec-title">Current Role</span>
                <span className="spec-value">Full Stack Developer @ ECHT TECH</span>
              </div>
              <div className="spec-row">
                <span className="spec-title">Primary Focus</span>
                <span className="spec-value">Node.js, Laravel, React.js & DB Tuning</span>
              </div>
              <div className="spec-row">
                <span className="spec-title">Post Graduate</span>
                <span className="spec-value">MCA (Chandigarh University, 2020–22)</span>
              </div>
              <div className="spec-row">
                <span className="spec-title">Under Graduate</span>
                <span className="spec-value">B.Sc IT (SRMU, Lucknow, 2017–20)</span>
              </div>
              <div className="spec-row">
                <span className="spec-title">Location</span>
                <span className="spec-value">
                  <MapPin size={14} className="inline-icon" /> India (Remote / Onsite)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card glass-card">
              <div className="pillar-icon-box">
                {pillar.icon}
              </div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.35fr 0.85fr;
          }
        }

        .about-summary-card,
        .about-specs-card {
          padding: 2.25rem;
        }

        .card-heading {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .card-heading-icon {
          color: var(--accent-cyan);
        }

        .summary-paragraph {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .key-attributes-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .attribute-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.925rem;
          color: var(--text-primary);
        }

        .attr-check {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }

        .summary-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .specs-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .spec-row {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (min-width: 480px) {
          .spec-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .spec-title {
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .spec-value {
          font-size: 0.925rem;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .inline-icon {
          color: var(--accent-cyan);
        }

        /* Pillars */
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .pillar-card {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .pillar-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          margin-bottom: 1.25rem;
        }

        .pillar-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
        }

        .pillar-desc {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
