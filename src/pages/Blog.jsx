import React from 'react'
import '../assets/css/Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Reverse Engineering di Applicazioni Android',
      excerpt: 'Analisi approfondita delle tecniche per decompilare e analizzare APK per scoprire vulnerabilità nascoste.',
      date: '15 MAG 2024',
      tags: ['Android', 'Security', 'Reverse Engineering'],
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Binary Exploitation: Stack Overflow Pratico',
      excerpt: 'Guida passo-passo per sfruttare buffer overflow in ambienti Linux x64 con protezioni moderne.',
      date: '28 APR 2024',
      tags: ['Exploit', 'PWN', 'Linux'],
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Costruire un Lab di Cybersecurity Casalingo',
      excerpt: 'Configurazione economica ma potente per testare vulnerabilità e praticare ethical hacking da casa.',
      date: '10 APR 2024',
      tags: ['Lab', 'Pentesting', 'Homelab'],
      readTime: '6 min read'
    }
  ]

  return (
    <section className="cyber-blog">
      <div className="matrix-effect"></div>
      
      <div className="blog-content">
        <h2 className="cyber-section-title">
          <span className="title-glitch">// latest_posts</span>
        </h2>
        
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="cyber-post">
              <div className="post-header">
                <time className="post-date" dateTime={post.date}>{post.date}</time>
                <span className="post-readtime">{post.readTime}</span>
              </div>
              
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              
              <div className="post-footer">
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="cyber-tag">{tag}</span>
                  ))}
                </div>
                <button className="cyber-readmore">
                  <span>Read More</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              
              <div className="post-hover-effect"></div>
            </article>
          ))}
        </div>
        
        <div className="view-all-container">
          <button className="cyber-view-all">
            <span>View All Articles</span>
            <div className="view-all-arrow"></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog