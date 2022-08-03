import { React, useEffect } from 'react'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return <div>About</div>
}

export default About
