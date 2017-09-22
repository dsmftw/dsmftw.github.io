import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import 'typeface-open-sans'

import './index.scss'

const Header = () => (
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
          <li><Link to="/cv/">R&eacute;sum&eacute;</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

const FooterLinks = [
  {
    name: 'LinkedIn',
    url:  'https://www.linkedin.com/in/kozlov-igor/'
  }, {
    name: 'GitHub',
    url:  'https://github.com/dsmftw'
  }
]

const Footer = () => (
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
      <p><small>&copy; 2017 Igor Kozlov</small></p>
    </div>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Igor Kozlov"
      meta={[
        { name: 'description', content: 'Software Developer' },
        { name: 'keywords', content: 'personal website, portfolio' },
      ]}
    />
    <Header />
    <main>
      {children()}
    </main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
