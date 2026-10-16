import React, { useState } from 'react';
import { 
  Network, 
  Cpu, 
  Database, 
  Workflow, 
  GitBranch, 
  ArrowRight, 
  CheckCircle, 
  Layers,
  Terminal,
  Activity
} from 'lucide-react';

export default function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState('realtime');

  const architectures = [
    {
      id: 'realtime',
      title: 'Real-Time Messaging & WebSockets Engine',
      subtitle: 'Engineered for sub-100ms latency across 500+ concurrent users (VAK Chat & Live Notifications)',
      icon: <Activity size={20} />,
      diagram: [
        { label: 'Client (React.js)', role: 'Bidirectional WS Handshake', status: 'Active' },
        { label: 'Node.js / Socket.IO', role: 'Room State & Event Broker', status: 'Sub-100ms' },
        { label: 'RabbitMQ / Redis', role: 'Pub/Sub & Channel Sync', status: 'In-Memory' },
        { label: 'MongoDB / FCM', role: 'Compound Indexed Store + Push', status: 'Persistent' }
      ],
      points: [
        'Maintains persistent full-duplex WebSocket connections with automatic fallback polling for erratic network connections.',
        'Separates message broadcast pipelines from persistence writes to avoid I/O blocking on the Node.js event loop.',
        'FCM (Firebase Cloud Messaging) integration ensures mobile & background users receive push alerts when offline.',
        'Supports message read receipts, typing indicators, and user presence with sub-100ms roundtrip latency.'
      ]
    },
    {
      id: 'caching',
      title: 'Database Indexing & Redis Caching Layer',
      subtitle: 'Achieved 30% faster API responses and 40% reduction in query execution times',
      icon: <Database size={20} />,
      diagram: [
        { label: 'API Request', role: 'RESTful Call with JWT RBAC', status: 'Ingress' },
        { label: 'Redis Cache', role: 'Cache-Aside Key-Value Lookup', status: 'Cache Hit 30% Boost' },
        { label: 'Query Optimizer', role: 'Composite Indexing & Explain Plans', status: '40% Drop' },
        { label: 'MySQL / Postgres', role: 'Normalized ACID Storage', status: 'Reliable' }
      ],
      points: [
        'Implemented cache-aside strategy for high-frequency government and marketplace endpoints.',
        'Conducted thorough EXPLAIN ANALYZE reviews on complex multi-table joins, establishing compound B-Tree indexes.',
        'Applied database connection pooling and schema normalizations to prevent thread starvation under peak loads.',
        'Reduced heavy enterprise payroll and reporting query latency by 35-40% at XEAM and ECHT TECH.'
      ]
    },
    {
      id: 'async',
      title: 'Asynchronous Processing & Message Queues',
      subtitle: 'Decoupling compute-heavy workflows via RabbitMQ and Laravel Queue Workers',
      icon: <Workflow size={20} />,
      diagram: [
        { label: 'Producer Service', role: 'Dispatches Event Message', status: 'Non-Blocking' },
        { label: 'RabbitMQ Broker', role: 'Durable Queues & Dead-Letter Ex', status: 'Zero Data Loss' },
        { label: 'Worker Clusters', role: 'Asynchronous Background Jobs', status: 'Auto-Retry' },
        { label: 'Notification / DB', role: 'Event Dispatch & Audit Log', status: 'Committed' }
      ],
      points: [
        'Offloaded vendor notifications, report generation, and third-party SMS/email dispatches to background queues.',
        'Implemented Dead-Letter Exchanges (DLX) and exponential backoff retry policies to handle transient upstream API failures.',
        'Ensures core web application APIs remain lightweight and respond to users in single-digit milliseconds.',
        'Managed background cron jobs and queue workers with fault-tolerant supervisor daemons.'
      ]
    },
    {
      id: 'devops',
      title: 'Docker Containerization & CI/CD Pipelines',
      subtitle: '50% reduction in deployment cycle times with GitHub Actions and Nginx reverse proxy',
      icon: <GitBranch size={20} />,
      diagram: [
        { label: 'Git Commit', role: 'Feature Branch PR Verification', status: 'Automated Test' },
        { label: 'GitHub Actions', role: 'Multi-Stage Docker Image Build', status: 'CI Pipeline' },
        { label: 'Registry / Server', role: 'Zero-Downtime Rolling Update', status: '50% Time Saved' },
        { label: 'Nginx + PM2', role: 'SSL Termination & Process Cluster', status: '99.9% Uptime' }
      ],
      points: [
        'Containerized multi-tier Node.js and Laravel applications with multi-stage Dockerfiles for minimal production footprint.',
        'Automated testing, linting, build verification, and deployment using custom GitHub Actions workflows.',
        'Configured Nginx as reverse proxy with SSL termination, Gzip/Brotli compression, and rate limiting headers.',
        'PM2 cluster mode utilized for zero-downtime reloads and automatic core-balanced worker recovery.'
      ]
    }
  ];

  const currentArch = architectures.find(a => a.id === activeTab) || architectures[0];

  return (
    <section id="architecture" className="section-wrapper architecture-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Network size={14} />
            <span>Systems Engineering</span>
          </div>
          <h2 className="section-title">
            Architecture & <span className="gradient-text">System Design</span>
          </h2>
          <p className="section-description">
            Hands-on patterns behind 4+ years of building production-grade services that handle real-time traffic and citizen-scale platforms.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="arch-tabs-container">
          {architectures.map((arch) => (
            <button
              key={arch.id}
              onClick={() => setActiveTab(arch.id)}
              className={`arch-tab-btn ${activeTab === arch.id ? 'active' : ''}`}
            >
              <span className="arch-tab-icon">{arch.icon}</span>
              <span className="arch-tab-text">{arch.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Architecture Display */}
        <div className="arch-display-card glass-card">
          
          <div className="arch-display-header">
            <div>
              <h3 className="arch-title">{currentArch.title}</h3>
              <p className="arch-subtitle">{currentArch.subtitle}</p>
            </div>
            <span className="badge badge-cyan">Production Proven</span>
          </div>

          {/* Interactive Flow Diagram */}
          <div className="arch-flow-diagram">
            {currentArch.diagram.map((node, idx) => (
              <React.Fragment key={idx}>
                <div className="diagram-node">
                  <div className="node-label">{node.label}</div>
                  <div className="node-role">{node.role}</div>
                  <div className="node-status">{node.status}</div>
                </div>
                {idx < currentArch.diagram.length - 1 && (
                  <div className="diagram-connector">
                    <ArrowRight size={18} className="connector-arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Engineering Key Points */}
          <div className="arch-points-grid">
            {currentArch.points.map((point, idx) => (
              <div key={idx} className="arch-point-item">
                <CheckCircle size={16} className="point-icon" />
                <span className="point-text">{point}</span>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .arch-tabs-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.65rem;
          margin-bottom: 2.5rem;
        }

        .arch-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          transition: all var(--transition-fast);
        }

        .arch-tab-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-hover);
        }

        .arch-tab-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, #0284c7 0%, #4f46e5 100%);
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.35);
        }

        .arch-tab-icon {
          display: flex;
        }

        .arch-display-card {
          padding: 2.5rem;
        }

        .arch-display-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        @media (min-width: 640px) {
          .arch-display-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        .arch-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .arch-subtitle {
          font-size: 0.95rem;
          color: var(--accent-cyan);
          font-weight: 500;
        }

        /* Flow Diagram */
        .arch-flow-diagram {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          margin-bottom: 2.25rem;
        }

        @media (min-width: 860px) {
          .arch-flow-diagram {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .diagram-node {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          flex: 1;
          text-align: center;
          transition: transform var(--transition-fast);
        }

        .diagram-node:hover {
          transform: translateY(-2px);
          border-color: var(--border-hover);
        }

        .node-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .node-role {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .node-status {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          font-family: var(--font-mono);
          color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.1);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
        }

        .diagram-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        @media (max-width: 859px) {
          .diagram-connector {
            transform: rotate(90deg);
            margin: -0.25rem 0;
          }
        }

        /* Points Grid */
        .arch-points-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .arch-points-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .arch-point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: var(--bg-card);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-subtle);
        }

        .point-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .point-text {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
