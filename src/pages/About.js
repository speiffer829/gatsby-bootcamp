import React from 'react'
import { Link } from "gatsby";
import Layout from "../Components/Layout"


const About = () => {
	return (
		<Layout>
			<h1>About Me</h1>
			<p><Link to="/Contact">Contact Me</Link></p>
		</Layout>
	)
}

export default About
