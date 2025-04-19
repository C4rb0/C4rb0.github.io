import { writeupsByOrg } from './data';
import { Link } from 'react-router-dom';
import './writeups/style.css';

const Writeup = () => {
  // Total statistics
  const totalOrgs = Object.keys(writeupsByOrg).length;
  const totalWriteups = Object.values(writeupsByOrg).reduce(
    (sum, org) => sum + org.writeups.length, 0
  );

  return (
    <div className="writeups-page">
      {/* Hero Section */}
      <section className="writeups-hero">
        <div className="hero-content">
          <h1>Writeups Repository</h1>
          <p className="hero-subtitle">
            A collection of {totalWriteups} writeups from {totalOrgs} different CTF platforms
          </p>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">{totalOrgs}</span>
              <span className="stat-label">Platforms</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{totalWriteups}</span>
              <span className="stat-label">Writeups</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="orgs-container">
        <div className="section-header">
          <h2>Select a Platform</h2>
          <p className="section-description">
            Choose from the available platforms to view the corresponding writeups
          </p>
        </div>
        
        <div className="orgs-grid">
          {Object.entries(writeupsByOrg).map(([orgKey, orgData]) => (
            <Link 
              to={`/writeups/${orgKey}`} 
              key={orgKey}
              className="org-card"
            >
              <div className="org-icon">
                {orgData.name.charAt(0).toUpperCase()}
              </div>
              <h3>{orgData.name}</h3>
              <p>{orgData.writeups.length} writeups available</p>
              <span className="org-link">View all →</span>
            </Link>
          ))}
        </div>

        {/* Recent Updates Section */}
        <div className="recent-updates">
          <div className="section-header">
            <h2>Recent Updates</h2>
            <p className="section-description">
              Platforms with the most recently added writeups
            </p>
          </div>
          <div className="updates-grid">
            {Object.entries(writeupsByOrg)
              .sort((a, b) => new Date(b[1].updated) - new Date(a[1].updated))
              .slice(0, 3)
              .map(([orgKey, orgData]) => (
                <div key={orgKey} className="update-card">
                  <div className="update-header">
                    <span className="update-badge">NEW</span>
                    <span className="update-date">
                      Updated: {new Date(orgData.updated).toLocaleDateString()}
                    </span>
                  </div>
                  <h4>{orgData.name}</h4>
                  <p>{orgData.writeups.length} writeups available</p>
                  <Link 
                    to={`/writeups/${orgKey}`} 
                    className="update-link"
                  >
                    Explore →
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writeup;
