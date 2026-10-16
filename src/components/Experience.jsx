import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Award,
  Zap,
  TrendingUp,
  Clock
} from 'lucide-react';
import { experiences } from '../data/resumeData';

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0].id);

  const activeExp = experiences.find(e => e.id === selectedExperience) || experiences[0];

  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Employment History</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-description">
            4+ years of driving full-stack engineering, performance optimization, and architectural scalability across enterprise & production systems.
          </p>
        </div>

        {/* Experience Dual-Panel Layout */}
        <div className="experience-layout">
          
          {/* Company Selector Navigation */}
          <div className="experience-nav">
            {experiences.map((exp) => {
              const isSelected = exp.id === selectedExperience;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExperience(exp.id)}
                  className={`exp-nav-item glass-card ${isSelected ? 'active' : ''}`}
                >
                  <div className="exp-nav-indicator"></div>
                  <div className="exp-nav-body">
                    <div className="exp-nav-company">{exp.company}</div>
                    <div className="exp-nav-role">{exp.role}</div>
                    <div className="exp-nav-period">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  {exp.featuredBadge && (
                    <span className="badge badge-emerald exp-featured-tag">
                      {exp.featuredBadge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Quick Metrics Callout */}
            <div className="exp-quick-metrics glass-card">
              <div className="quick-metrics-title">
                <TrendingUp size={16} className="trending-icon" />
                <span>Career Impact Milestones</span>
              </div>
              <ul className="quick-metrics-list">
                <li><strong>30% API boost</strong> via Redis & query tuning</li>
                <li><strong>40% DB latency reduction</strong> with index design</li>
                <li><strong>50% faster deployments</strong> via Docker + CI/CD</li>
                <li><strong>500+ real-time users</strong> with sub-100ms latency</li>
                <li><strong>35% payroll processing speedup</strong> at XEAM</li>
              </ul>
            </div>
          </div>

          {/* Detailed Experience View */}
          <div className="experience-detail-card glass-card">
            
            <div className="exp-detail-header">
              <div>
                <div className="exp-company-row">
                  <h3 className="exp-company-title">{activeExp.company}</h3>
                  {activeExp.featuredBadge && (
                    <span className="badge badge-emerald">{activeExp.featuredBadge}</span>
                  )}
                </div>
                <div className="exp-role-title gradient-text">{activeExp.role}</div>
              </div>

              <div className="exp-meta-badge-wrap">
                <div className="exp-meta-pill">
                  <Calendar size={14} />
                  <span>{activeExp.period}</span>
                </div>
                <div className="exp-meta-pill">
                  <MapPin size={14} />
                  <span>{activeExp.location}</span>
                </div>
                <div className="exp-meta-pill">
                  <Clock size={14} />
                  <span>{activeExp.type}</span>
                </div>
              </div>
            </div>

            <div className="exp-detail-divider"></div>

            {/* Bullet Points */}
            <div className="exp-highlights-list">
              <h4 className="highlights-header">Key Responsibilities & Deliverables:</h4>
              {activeExp.highlights.map((point, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-bullet-wrap">
                    <CheckCircle2 size={16} className="highlight-bullet-icon" />
                  </div>
                  <div className="highlight-text">{point}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div className="exp-tech-section">
              <h4 className="tech-section-header">Technologies & Tools Deployed:</h4>
              <div className="exp-tech-tags">
                {activeExp.techStack.map((tech) => (
                  <span key={tech} className="exp-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .experience-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 992px) {
          .experience-layout {
            grid-template-columns: 360px 1fr;
            gap: 2.5rem;
          }
        }

        /* Nav list */
        .experience-nav {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .exp-nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: all var(--transition-fast);
        }

        .exp-nav-item.active {
          border-color: var(--accent-cyan);
          background: var(--bg-card-hover);
        }

        .exp-nav-indicator {
          width: 4px;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          background: transparent;
          transition: background var(--transition-fast);
        }

        .exp-nav-item.active .exp-nav-indicator {
          background: linear-gradient(to bottom, var(--accent-cyan), var(--accent-indigo));
        }

        .exp-nav-body {
          flex: 1;
        }

        .exp-nav-company {
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.25rem;
        }

        .exp-nav-role {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.45rem;
        }

        .exp-nav-period {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .exp-featured-tag {
          align-self: flex-start;
          font-size: 0.7rem;
        }

        /* Quick metrics callout */
        .exp-quick-metrics {
          padding: 1.5rem;
          margin-top: 0.5rem;
          background: rgba(16, 185, 129, 0.04);
          border: 1px solid rgba(16, 185, 129, 0.15);
        }

        .quick-metrics-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-emerald);
          margin-bottom: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .trending-icon {
          color: var(--accent-emerald);
        }

        .quick-metrics-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.825rem;
          color: var(--text-secondary);
        }

        .quick-metrics-list li {
          position: relative;
          padding-left: 1.1rem;
        }

        .quick-metrics-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent-emerald);
          font-weight: bold;
        }

        .quick-metrics-list strong {
          color: var(--text-primary);
        }

        /* Detail card */
        .experience-detail-card {
          padding: 2.25rem;
        }

        .exp-detail-header {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .exp-detail-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .exp-company-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 0.25rem;
        }

        .exp-company-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .exp-role-title {
          font-size: 1.15rem;
          font-weight: 700;
        }

        .exp-meta-badge-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .exp-detail-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 1.75rem 0;
        }

        .exp-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .highlights-header,
        .tech-section-header {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .highlight-bullet-wrap {
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .highlight-bullet-icon {
          color: var(--accent-cyan);
        }

        .highlight-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .exp-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-tech-tag {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }
      `}</style>
    </section>
  );
}
