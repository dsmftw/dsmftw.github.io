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
          <li><Link to="/contact/">Contact</Link></li>
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
      <h3>Get in touch</h3>
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
        { name: 'description', content: 'Welcome to the personal website of Igor Kozlov (BSc, Computing Science, Software Engineer).' },
        { name: 'keywords', content: 'software engineer, software devloper, database developer, gatsby, personal website, portfolio' },
        { name: 'theme-color', content: '#689d6a' },
      ]}
      link={[
        { rel: 'apple-touch-icon', sizes: '180x180',  href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16',  href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32',  href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96',  href: '/favicon-96x96.png' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
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
