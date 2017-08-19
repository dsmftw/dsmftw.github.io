import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const Header = () =>
  <header>
    <div>
      <h1>
        <Link to="/">
          dsmftw.github.io
        </Link>
      </h1>
      <nav>
        <ul>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/cv/">CV</Link></li>
        </ul>
      </nav>
    </div>
  </header>

const FooterLinks = [
  {
    name: 'LinkedIn',
    url:  'https://www.linkedin.com/in/kozlov-igor/'
  }, {
    name: 'Github',
    url:  'https://github.com/dsmftw'
  }
]

const Footer = () =>
  <footer>
    <div>
      <h3>Check out my</h3>
      <ul>
        {FooterLinks.map(fl => (
           <li key={fl.name}>
             <a target="_blank" rel="nofollow" href={fl.url}>
               <span>{fl.name}</span>
             </a>
           </li>
         ))}
      </ul>
      <p><small>Made with <a target="_blank" rel="nofollow" href='https://www.gatsbyjs.org/'>Gatsby.js</a> and hosted on Github</small></p>
    </div>
  </footer>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Igor Kozlov"
      meta={[
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'personal, portfolio' },
      ]}
    />
    <Header />
    <main>
      {children()}
    </main>
    <Footer />
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
