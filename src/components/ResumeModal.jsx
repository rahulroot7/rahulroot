import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Maximize2, 
  CheckCircle, 
  Printer, 
  UserCheck 
} from 'lucide-react';
import { personalInfo, professionalSummary, experiences, keyProjects, education } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('pdf');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="modal-title">Rahul Chaurasia – Official Resume</h3>
              <p className="modal-subtitle">Full Stack Developer • Node.js • Laravel • 4+ Years Experience</p>
            </div>
          </div>

          <div className="modal-header-actions">
            <div className="modal-tab-toggle">
              <button 
                className={`tab-toggle-btn ${activeTab === 'pdf' ? 'active' : ''}`}
                onClick={() => setActiveTab('pdf')}
              >
                PDF View
              </button>
              <button 
                className={`tab-toggle-btn ${activeTab === 'text' ? 'active' : ''}`}
                onClick={() => setActiveTab('text')}
              >
                Structured View
              </button>
            </div>

            <a
              href="/Rahul_Chaurasia_Resume.pdf"
              download="Rahul_Chaurasia_Resume.pdf"
              className="btn btn-primary btn-sm"
              title="Download Resume PDF"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <a
              href="/Rahul_Chaurasia_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Open PDF in new tab"
            >
              <ExternalLink size={15} />
            </a>

            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="modal-body">
          {activeTab === 'pdf' ? (
            <div className="pdf-frame-wrapper">
              <iframe
                src="/Rahul_Chaurasia_Resume.pdf#toolbar=1"
                title="Rahul Chaurasia Resume PDF"
                className="pdf-iframe"
              />
              <div className="pdf-fallback-note">
                <span>PDF not rendering directly in your browser?</span>
                <a href="/Rahul_Chaurasia_Resume.pdf" target="_blank" rel="noopener noreferrer" className="fallback-link">
                  Open PDF in New Tab <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ) : (
            <div className="structured-resume-view">
              
              <div className="structured-header">
                <h2>{personalInfo.name}</h2>
                <h4>{personalInfo.role}</h4>
                <p>{personalInfo.email} | {personalInfo.phone} | {personalInfo.socials.linkedin}</p>
              </div>

              <div className="structured-section">
                <h3>PROFESSIONAL SUMMARY</h3>
                <p>{professionalSummary}</p>
              </div>

              <div className="structured-section">
                <h3>EXPERIENCE</h3>
                {experiences.map(exp => (
                  <div key={exp.id} className="structured-item">
                    <div className="structured-item-head">
                      <strong>{exp.company}</strong>
                      <span>{exp.period}</span>
                    </div>
                    <em>{exp.role}</em>
                    <ul>
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="structured-section">
                <h3>KEY PROJECTS</h3>
                {keyProjects.map(proj => (
                  <div key={proj.id} className="structured-item">
                    <strong>{proj.title}</strong>
                    <p className="proj-techs">{proj.technologies.join(' | ')}</p>
                    <ul>
                      {proj.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="structured-section">
                <h3>EDUCATION</h3>
                {education.map((edu, i) => (
                  <div key={i} className="structured-item">
                    <div className="structured-item-head">
                      <strong>{edu.institution}</strong>
                      <span>{edu.duration}</span>
                    </div>
                    <div>{edu.degree} — {edu.location}</div>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fade-in 0.2s ease-out;
        }

        .modal-container {
          width: 100%;
          max-width: 1000px;
          height: 90vh;
          max-height: 850px;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-hover);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
          animation: modal-pop 0.25s ease-out;
        }

        @keyframes modal-pop {
          from {
            transform: scale(0.96) translateY(10px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.75rem;
          border-bottom: 1px solid var(--border-subtle);
          background: var(--bg-card);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .modal-title-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .modal-icon-badge {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(56, 189, 248, 0.2);
        }

        .modal-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .modal-header-actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .modal-tab-toggle {
          display: flex;
          background: var(--bg-tertiary);
          padding: 0.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }

        .tab-toggle-btn {
          padding: 0.35rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .tab-toggle-btn.active {
          background: var(--bg-card);
          color: var(--accent-cyan);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .modal-close-btn {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.4);
        }

        .modal-body {
          flex: 1;
          overflow: hidden;
          position: relative;
          background: #0b0f19;
        }

        .pdf-frame-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
          flex: 1;
        }

        .pdf-fallback-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.6rem;
          background: var(--bg-tertiary);
          border-top: 1px solid var(--border-subtle);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .fallback-link {
          color: var(--accent-cyan);
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 600;
        }

        /* Structured View */
        .structured-resume-view {
          height: 100%;
          overflow-y: auto;
          padding: 2.5rem;
          background: var(--bg-secondary);
          color: var(--text-primary);
          line-height: 1.7;
        }

        .structured-header {
          text-align: center;
          padding-bottom: 1.5rem;
          border-bottom: 2px solid var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        .structured-header h2 {
          font-size: 1.8rem;
          font-weight: 800;
        }

        .structured-header h4 {
          font-size: 1.1rem;
          color: var(--accent-cyan);
          margin-bottom: 0.35rem;
        }

        .structured-header p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .structured-section {
          margin-bottom: 2rem;
        }

        .structured-section h3 {
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 0.4rem;
          margin-bottom: 1rem;
          color: var(--accent-cyan);
        }

        .structured-item {
          margin-bottom: 1.25rem;
        }

        .structured-item-head {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
        }

        .structured-item ul {
          padding-left: 1.25rem;
          margin-top: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .proj-techs {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
