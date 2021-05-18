import React from 'react'
import { Link } from "gatsby";
import Layout from "../Components/Layout";
import Head from '../Components/head'


const Contact = () => {
	return (
		<Layout>
			<Head title="Contact" />
			<h1>Contact</h1>
			<p><strong>Phone</strong>: 1-800-NUNYA</p>
			<p>
				<Link to="/">Home</Link>
			</p>

		</Layout>
	)
}

export default Contact
