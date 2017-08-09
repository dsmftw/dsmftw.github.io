import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () =>
  <div
    style={{
      background: 'lightsteelblue',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'seashell',
            textDecoration: 'none',
          }}
        >
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
  </div>

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
  <div
    style={{
      background: 'lightsteelblue',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0, color: 'seashell', }}>Other ways to connect</h3>
      <ul>
        {FooterLinks.map(fl => (
           <li key={fl.name}>
             <a target="_blank" rel="nofollow" href={fl.url}>
               <span>{fl.name}</span>
             </a>
           </li>
         ))}
      </ul>
    </div>
  </div>


const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="ik - dsmftw"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
