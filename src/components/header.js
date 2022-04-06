import React from "react"
import { Link } from "gatsby"

import * as headerStyles from "./header.module.scss"

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <nav className={headerStyles.nav}>
      <ul className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/mixes"
          >
            Mixtapes
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
