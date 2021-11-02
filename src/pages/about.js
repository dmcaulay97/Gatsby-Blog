import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const aboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <h2>Dylan McAulay</h2>
            <p>Front end web developer, with degrees in Applied Mathematics and Physics, bringing an analytical lens to building websites and online tools. Earned a certificate in Full Stack Web Development from the University of Connecticut Coding Boot Camp. Dependable problem-solver with a passion for detail oriented design. Strengths in analytical thinking, communication, and adaptability.</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default aboutPage