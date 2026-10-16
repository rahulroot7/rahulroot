import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award,
  CheckCircle2 
} from 'lucide-react';
import { education } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="section-wrapper education-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-description">
            Strong foundational computer science and application engineering qualifications.
          </p>
        </div>

        <div className="education-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="education-card glass-card">
              
              <div className="edu-card-header">
                <div className="edu-icon-wrap">
                  <GraduationCap size={24} />
                </div>
                <div className="edu-meta-badges">
                  <span className="badge badge-cyan">
                    <Calendar size={12} />
                    {edu.duration}
                  </span>
                  <span className="badge">
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                </div>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>

              <div className="edu-divider"></div>

              <div className="edu-focus-box">
                <div className="focus-header">
                  <BookOpen size={15} />
                  <span>Curriculum & Specialization</span>
                </div>
                <p className="focus-detail">{edu.focus}</p>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .education-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 960px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .education-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .education-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
        }

        .edu-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .edu-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .edu-meta-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .edu-degree {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.35rem;
        }

        .edu-institution {
          font-size: 1.05rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .edu-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 1.5rem 0;
        }

        .edu-focus-box {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .focus-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.5rem;
        }

        .focus-detail {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
