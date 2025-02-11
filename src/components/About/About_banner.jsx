import React from 'react'
import { Link } from 'react-router-dom'

const About_banner = () => {
  return (
    <>
        <div className="about-banner-main">
            <div className="container">
                <div className="about-banner-inner">
                    <div className="about-banner-content">
                        <h1>About</h1>
                        <p>
                            <Link to="/">Home</Link>|
                            <span>About</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About_banner