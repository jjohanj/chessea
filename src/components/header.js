/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import './header.css'
import { Link } from "gatsby"

function Header(props) {

  return (
    <header className="container">
        <nav>
        <div className="logo"><h1>Chessea</h1></div>
          <ul>
            <li><Link activeStyle={{ color: "#087F8C" }} to="/">Home</Link></li>
            <li><Link activeStyle={{ color: "#087F8C" }} state={{ data: props.data }}to="/page-3">Artikelen</Link></li>
            <li><Link activeStyle={{ color: "#087F8C" }} to="/page-4">Partijen</Link></li>
          </ul>
        </nav>
    </header>
  )
}


export default Header
