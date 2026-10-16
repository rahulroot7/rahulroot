import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/resumeData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    onShowToast(`Copied ${field} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast("Message sent successfully! Rahul will get back to you shortly.");
    }, 800);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Discuss <span className="gradient-text">Your Next Project</span>
          </h2>
          <p className="section-description">
            Available for Senior Full Stack Developer, Node.js Engineer, and Laravel Architect roles, as well as high-impact consultancy.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left: Contact Info & Direct Links */}
          <div className="contact-info-card glass-card">
            <h3 className="contact-card-title">Contact Channels</h3>
            <p className="contact-card-desc">
              Feel free to reach out directly via email, phone, or LinkedIn. I typically respond within 24 business hours.
            </p>

            <div className="contact-methods-list">
              
              {/* Email */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Mail size={18} />
                </div>
                <div className="method-content">
                  <span className="method-label">Direct Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="method-link">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'Email')}
                  className="method-copy-btn"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedField === 'Email' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Phone size={18} />
                </div>
                <div className="method-content">
                  <span className="method-label">Phone & WhatsApp</span>
                  <a href={`tel:${personalInfo.phone}`} className="method-link">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'Phone number')}
                  className="method-copy-btn"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedField === 'Phone number' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <LinkedinIcon size={18} />
                </div>
                <div className="method-content">
                  <span className="method-label">LinkedIn</span>
                  <a 
                    href={personalInfo.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="method-link"
                  >
                    linkedin.com/in/rahul-chaurasia-80371a194
                  </a>
                </div>
                <a 
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="method-copy-btn"
                  aria-label="Open LinkedIn in new tab"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* GitHub */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <GithubIcon size={18} />
                </div>
                <div className="method-content">
                  <span className="method-label">GitHub</span>
                  <a 
                    href={personalInfo.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="method-link"
                  >
                    github.com/rahulroot7
                  </a>
                </div>
                <a 
                  href={personalInfo.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="method-copy-btn"
                  aria-label="Open GitHub in new tab"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Location */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <MapPin size={18} />
                </div>
                <div className="method-content">
                  <span className="method-label">Location</span>
                  <span className="method-text">India (Open to Remote / Hybrid / Relocation)</span>
                </div>
              </div>

            </div>

            {/* Quick response note */}
            <div className="quick-response-banner">
              <span className="pulse-dot"></span>
              <span>Actively interviewing for full-time and contractual opportunities</span>
            </div>

          </div>

          {/* Right: Interactive Message Form */}
          <div className="contact-form-card glass-card">
            <h3 className="contact-card-title">Send a Direct Message</h3>

            {submitted ? (
              <div className="contact-success-state">
                <div className="success-icon-badge">
                  <Check size={32} />
                </div>
                <h4>Message Received!</h4>
                <p>Thank you for getting in touch. I will review your inquiry and follow up promptly.</p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g., Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g., alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject / Purpose</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="e.g., Senior Full Stack Role / Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message Details</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Write your project details or job opening requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn btn-primary w-full submit-btn"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr;
            gap: 2.5rem;
          }
        }

        .contact-info-card,
        .contact-form-card {
          padding: 2.25rem;
        }

        .contact-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
        }

        .contact-card-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-methods-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          margin-bottom: 2rem;
        }

        .contact-method-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          transition: border-color var(--transition-fast);
        }

        .contact-method-item:hover {
          border-color: var(--border-hover);
        }

        .method-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .method-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .method-label {
          font-size: 0.725rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .method-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .method-link:hover {
          color: var(--accent-cyan);
        }

        .method-text {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .method-copy-btn {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .method-copy-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-hover);
        }

        .text-emerald {
          color: var(--accent-emerald);
        }

        .quick-response-banner {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.75rem 1rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-emerald);
        }

        /* Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .form-label {
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-input {
          padding: 0.75rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.925rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .form-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.15);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          margin-top: 0.5rem;
        }

        /* Success State */
        .contact-success-state {
          padding: 3rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon-badge {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--accent-emerald);
        }

        .contact-success-state h4 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .contact-success-state p {
          font-size: 0.925rem;
          color: var(--text-secondary);
          max-width: 380px;
        }
      `}</style>
    </section>
  );
}
