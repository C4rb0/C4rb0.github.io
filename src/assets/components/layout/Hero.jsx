import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { SiBuymeacoffee } from 'react-icons/si'
import './Hero.css'

const Hero = () => {
  return (
    <section className="cyber-hero">
      <div className="hero-content">
        <h1 className="cyber-title">
          <span className="title-gradient">CARBO</span>
        </h1>
        
        <p className="cyber-desc">
        Software Developer and Cybersecurity enthusiast
        </p>
        
        <div className="cyber-socials">
          {[
            { icon: <FaGithub />, label: 'GitHub' },
            { icon: <FaLinkedin />, label: 'LinkedIn' },
            { icon: <FaTwitter />, label: 'Twitter' },
            { icon: <FaEnvelope />, label: 'Email' },
            { icon: <SiBuymeacoffee />, label: 'Support' }
          ].map((social, index) => (
            <a 
              key={index} 
              href="#" 
              className="cyber-icon" 
              aria-label={social.label}
            >
              {social.icon}
              <span className="icon-hover-effect"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero