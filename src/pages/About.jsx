import React from 'react'
import '../assets/css/About.css'

const About = () => {
  const skills = [
    {
      name: '- Python: ',
      desc: "Extensively used for CTF challenges, automation scripts, and cybersecurity tools. Skilled in exploit development, network analysis, and data manipulation."
    },
    {
      name: '- Java: ',
      desc: "Used mainly in academic projects to strengthen object-oriented programming and software engineering fundamentals."
    },
    {
      name: '- C/C++: ',
      desc: "Applied in competitive programming and university-level projects. Also used for low-level system programming, binary exploitation, and performance-critical applications."
    },
    {
      name: '- React/TypeScript: ',
      desc: "Developed modern and responsive web interfaces with clean architecture, component-based design, and a focus on user experience."
    },
    {
      name: '- Docker: ',
      desc: "Experienced in containerizing applications, setting up isolated testing environments, and managing microservices with Docker and Docker Compose."
    }
  ]

  return (
    <section className="cyber-about">
      <div className="about-content">

        <div className="about-section">
          <h2 className="section-title">$ ~/ >> about_me</h2>
          <div className="section-content">
            <p>
              Hi! 👋 I'm a Computer Science student from Italy and a passionate developer. I specialize in full-stack web development and ethical hacking, with a strong foundation in languages like Python, C++, and Java. I love building high-quality software and solving real-world problems through code and cybersecurity.
            </p>
            <p>
              I started as a self-taught programmer and expanded my skills through formal education and hands-on experience. My main interests revolve around secure application development, reverse engineering, and offensive security.
            </p>
          </div>
        </div>

        <div className="about-section">
          <h2 className="section-title">$ ~/ >> skills</h2>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-section">
          <h2 className="section-title">$ ~/ >> cybersecurity</h2>
          <div className="section-content">
            <p>
              I'm deeply passionate about cybersecurity, with hands-on experience in Capture The Flag (CTF) competitions, vulnerability research, and exploit development. My focus areas include binary exploitation, reverse engineering, and red team tactics.
            </p>
            <p>
              I regularly take part in international hacking competitions and continuously work on developing my skills in offensive security. I also enjoy building custom tools to automate analysis and enhance penetration testing workflows.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">20+</div>
                <div className="stat-label">CTF Competitions</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">10+</div>
                <div className="stat-label">Security Tools Built</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">5</div>
                <div className="stat-label">CVEs Reported</div>
              </div>
            </div>
          </div>
        </div>

        {/* Education section remains commented out if not needed now */}
      </div>
    </section>
  )
}

export default About
