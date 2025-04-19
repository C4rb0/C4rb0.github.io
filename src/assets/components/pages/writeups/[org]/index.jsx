import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadOrgWriteups } from '../../writeupLoader';

const OrgWriteups = ({ org }) => {
  const [writeups, setWriteups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    loadOrgWriteups(org).then(data => {
      setWriteups(data);
      setLoading(false);
    });
  }, [org]);

  if (loading) return <div className="loading">Loading...</div>;

  // Get unique categories
  const categories = ['all', ...new Set(writeups.map(writeup => writeup.category || 'uncategorized'))];

  // Filter writeups based on active filter
  const filteredWriteups = activeFilter === 'all' 
    ? writeups 
    : writeups.filter(writeup => 
        activeFilter === 'uncategorized' 
          ? !writeup.category 
          : writeup.category === activeFilter
      );

  return (
    <div className="writeup-list">
      <h1>{org.toUpperCase()} Writeups</h1>
      
      {/* Category filter buttons */}
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Writeups grid */}
      <div className="writeups-grid">
        {filteredWriteups.map(writeup => (
          <div key={writeup.slug} className="writeup-card">
            <div className="writeup-card-header">
              <h2 className="writeup-card-title">{writeup.title}</h2>
              <div className="writeup-card-meta">
                {writeup.category && (
                  <span className="writeup-card-category">{writeup.category}</span>
                )}
                {writeup.difficulty && (
                  <span className="writeup-card-difficulty">{writeup.difficulty}</span>
                )}
              </div>
              {writeup.date && (
                <span className="writeup-card-date">{writeup.date}</span>
              )}
            </div>
            <Link to={`${writeup.slug}`} className="writeup-card-link">
              Read Writeup
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgWriteups;