import React from 'react'
import { Link } from 'gatsby'

import * as headerStyles from "./header.module.scss"

const Header = () => {

    return (
        <header>
            <h1>Dylan McAulay</h1>
            <nav>
                <ul>
                    <li>
                        <Link className={headerStyles.link} to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.link} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header