import React, { useState } from 'react';
import { 
  Code, 
  Search, 
  Terminal, 
  Layers, 
  Database, 
  Cloud, 
  Cpu, 
  Bot, 
  Monitor,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { skillsCategories } from '../data/resumeData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    "Languages": <Terminal size={18} />,
    "Backend": <Cpu size={18} />,
    "Architecture": <Layers size={18} />,
    "Databases": <Database size={18} />,
    "Cloud & DevOps": <Cloud size={18} />,
    "Messaging & Tools": <Terminal size={18} />,
    "AI & GenAI": <Bot size={18} />,
    "Frontend": <Monitor size={18} />
  };

  const tabs = ['All', ...skillsCategories.map(c => c.category)];

  const filteredCategories = skillsCategories.map(cat => {
    let matchesCategory = activeTab === 'All' || cat.category === activeTab;
    if (!matchesCategory) return null;

    let matchingSkills = cat.skills.filter(s => 
      s.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Competencies</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="section-description">
            Comprehensive skill set aligned exactly with enterprise production demands, microservices, and high-concurrency systems.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="skills-controls">
          
          {/* Search Input */}
          <div className="skills-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search skills (e.g., Redis, Docker, Fastify, Laravel, Kafka)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
              aria-label="Filter skills"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="skills-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`skill-tab-btn ${activeTab === tab ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((group) => (
              <div key={group.category} className="skill-category-card glass-card">
                
                <div className="category-header">
                  <div className="category-icon-wrapper">
                    {categoryIcons[group.category] || <Code size={18} />}
                  </div>
                  <div className="category-title-wrap">
                    <h3 className="category-title">{group.category}</h3>
                    <span className="category-count">{group.skills.length} skills</span>
                  </div>
                </div>

                <div className="skills-pill-wrap">
                  {group.skills.map((skill) => (
                    <div key={skill} className="skill-pill">
                      <span className="skill-bullet">•</span>
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))
          ) : (
            <div className="no-skills-found glass-card">
              <Search size={32} className="no-results-icon" />
              <p>No skills matching "<strong>{searchQuery}</strong>" in the selected category.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveTab('All'); }} 
                className="btn btn-secondary btn-sm"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Senior Stack Highlights Banner */}
        <div className="skills-summary-banner glass-card">
          <div className="banner-icon">
            <Sparkles size={24} />
          </div>
          <div className="banner-text">
            <h4>Core Production Stack</h4>
            <p>Node.js • Express.js • Laravel 10/11 • React.js • MySQL / PostgreSQL • Redis • Docker • GitHub Actions CI/CD • Socket.IO • RabbitMQ</p>
          </div>
        </div>

      </div>

      <style>{`
        .skills-controls {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .skills-search-box {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .skills-search-input {
          width: 100%;
          padding: 0.75rem 2.5rem 0.75rem 2.8rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.925rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .skills-search-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
        }

        .search-clear-btn {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          font-size: 1.25rem;
          line-height: 1;
        }

        .skills-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }

        .skill-tab-btn {
          padding: 0.45rem 0.95rem;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .skill-tab-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
        }

        .skill-tab-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-indigo));
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .skills-categories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 640px) {
          .skills-categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .skills-categories-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .skill-category-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .category-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .category-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .category-count {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .skills-pill-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .skill-pill:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
          background: var(--bg-secondary);
          transform: translateY(-1px);
        }

        .skill-bullet {
          color: var(--accent-cyan);
          font-size: 0.9rem;
          line-height: 1;
        }

        .no-skills-found {
          grid-column: 1 / -1;
          padding: 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--text-secondary);
        }

        .no-results-icon {
          color: var(--text-muted);
        }

        /* Banner */
        .skills-summary-banner {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 2rem;
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.08), rgba(99, 102, 241, 0.08));
          border: 1px solid rgba(56, 189, 248, 0.2);
        }

        .banner-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .banner-text h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .banner-text p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        @media (max-width: 640px) {
          .skills-summary-banner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
