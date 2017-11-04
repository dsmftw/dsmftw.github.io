import React from 'react'
import Link from 'gatsby-link'

const resumepdf = 'https://github.com/dsmftw/resume/raw/master/ik-resume.pdf'
const latexsrc = 'https://github.com/dsmftw/resume'

const CVPage = () => (
  <div>
    <h1>R&eacute;sum&eacute; / CV</h1>
    <p><a href={resumepdf} download>Download</a> a copy of my r&eacute;sum&eacute;.</p>
    <p>Also, feel free to explore its <span className="latex">L<sup>a</sup>T<sub>e</sub>X</span> <a target="_blank" rel="nofollow" href={latexsrc}>source code</a> on my GitHub repository.</p>
  </div>
)

export default CVPage
