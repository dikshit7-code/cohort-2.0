import React from 'react'

const Footer = () => {
  return (
    <div className="footer-section">
        <div className="info-card">
            <span className="badge">Services</span>
            <h2>Explore our full range of coaching, training, and tennis experiences. From first serve to match point — we've got the right program for you.</h2>
            <a href="#" className="explore-btn">
                Explore More
                <span className="arrow">↗</span>
            </a>
        </div>

        <div className="image-card training-card">
            <span className="card-badge">Training Programs</span>
            <div className="card-content">
                <p className="card-description">Programs designed for all ages and abilities.</p>
                <div className="card-actions">
                    <button className="icon-btn">↗</button>
                </div>
            </div>
        </div>
        <div className="image-card court-card">
            <div className="blackdrop"></div>
            <span className="card-badge">Court Access</span>
            <div className="card-content">
                <h3 className="card-title">Hourly Court Rental</h3>
                <p className="card-description">Step into a space built for players — to grow, compete, and thrive.</p>
                <div className="card-actions">
                    <button className="icon-btn">←</button>
                    <button className="icon-btn">→</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer