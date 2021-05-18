import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby";
// import './header.module.scss'


const Header = () => {

  const data = useStaticQuery(
    graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  
	return (
    <header>
      <nav>
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
        <ul>
          <li>
            <Link to="/Blog" activeClassName="current">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/About" activeClassName="current">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" activeClassName="current">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
