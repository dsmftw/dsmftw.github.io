import React from 'react'
import Link from 'gatsby-link'

const sfu = 'https://www.sfu.ca/'
const compsci = 'https://www.sfu.ca/computing.html'
const dots = 'https://github.com/dsmftw/dotfiles'

const AboutPage = () => (
  <div>
    <h1>About</h1>
    <p><em>Hello, thanks for stopping by!</em> I&#39;m Igor Kozlov, a full-stack software developer and a recent <a target="_blank" rel="nofollow" href={sfu}>SFU</a> grad, <a target="_blank" rel="nofollow" href={compsci}>Computing Science Major</a>.</p>
    <p>Back-end software development is my passion and main area of expertise.
    I love working with databases, tackling algorithmic problems, and experimenting with code.
    While I&#39;m not working/studying I like to spend time customizing <a target="_blank" rel="nofollow" href={dots}>my Gentoo Linux machine</a>, getting involved with amature astronomy, playing soccer and hockey, snowboarding, and hiking the countless mauntain trails in my home province, Beautiful British Columbia.</p>
    <p>Oh, and I also build a daily-driven race/drag car as a &quot;side project&quot; &#9786;</p>
  </div>
)

export default AboutPage
