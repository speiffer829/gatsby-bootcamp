import React from 'react'
import { Link } from "gatsby";
import Layout from "../Components/Layout"
import Head from "../Components/head"



const About = () => {
	return (
		<Layout>
			<Head title="About Me" />
			<h1>About Me</h1>
			<p><Link to="/Contact">Contact Me</Link></p>
		</Layout>
	)
}

export default About
