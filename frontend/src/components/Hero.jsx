import React from 'react'

const Hero = ({name}) => {
  return (
    <section>
        <div className="hero-image">
            <div className="hero-text">
                <h1>Hi, I'm {name}</h1>
                <p>I'm a fullstack developer</p>
            </div>
        </div>
    </section>
  )
}

export default Hero