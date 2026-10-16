import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Users, 
  Zap, 
  ShieldCheck, 
  Search, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { keyProjects } from '../data/resumeData';

export default function Projects({ onOpenResume }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Real-Time / Full Stack', 'Marketplace / Search', 'Enterprise / GovTech'];

  const filteredProjects = selectedCategory === 'All' 
    ? keyProjects 
    : keyProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Key Engineering <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Production-grade systems delivering high throughput, real-time communication, and secure enterprise governance.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`project-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              
              <div className="project-card-top">
                <div className="project-category-badge">
                  <span className="badge badge-cyan">{project.category}</span>
                </div>
                <div className="project-header-actions">
                  <span className="project-tagline">{project.tagline}</span>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>

              {/* Metrics Row */}
              <div className="project-metrics-row">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="project-metric-item">
                    <span className="metric-val gradient-text">{metric.value}</span>
                    <span className="metric-lbl">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Bullet Points */}
              <div className="project-points-list">
                {project.points.map((point, idx) => (
                  <div key={idx} className="project-point-item">
                    <CheckCircle2 size={15} className="point-icon" />
                    <span className="point-text">{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="project-tech-footer">
                <div className="project-tech-chips">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Callout */}
        <div className="project-note-banner glass-card">
          <div className="note-icon">
            <ShieldCheck size={22} />
          </div>
          <div className="note-text">
            <h4>Enterprise Confidentiality & Compliance</h4>
            <p>
              Government platforms and proprietary enterprise ERP/marketplaces are deployed within secure on-premise and VPC environments. Architecture patterns, schemas, and live demonstration walk-throughs can be provided during technical discussions.
            </p>
          </div>
          <button onClick={onOpenResume} className="btn btn-secondary btn-sm">
            Contact for Details
          </button>
        </div>

      </div>

      <style>{`
        .projects-filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }

        .project-filter-btn {
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .project-filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
        }

        .project-filter-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-indigo));
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .project-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .project-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .project-tagline {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-align: right;
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.5rem;
        }

        .project-subtitle {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        /* Metrics row */
        .project-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 0.85rem 0.5rem;
          text-align: center;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }

        .project-metric-item {
          display: flex;
          flex-direction: column;
        }

        .metric-val {
          font-size: 1.15rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .metric-lbl {
          font-size: 0.675rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        /* Points list */
        .project-points-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
          flex: 1;
        }

        .project-point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }

        .point-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .point-text {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* Tech chips */
        .project-tech-footer {
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .project-tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .tech-chip {
          font-size: 0.75rem;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        /* Note banner */
        .project-note-banner {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 2rem;
          background: rgba(15, 23, 42, 0.4);
          border: 1px dashed var(--border-subtle);
        }

        .note-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }

        .note-text {
          flex: 1;
        }

        .note-text h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .note-text p {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .project-note-banner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
