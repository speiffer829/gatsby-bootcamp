import React from 'react'
import {Link} from 'gatsby';
import Layout from '../Components/Layout'
import Head from "../Components/head"


const NotFound = () => {
	return (
		<Layout>
			<Head title="Page Not Found" />
			<h1>404. Now <Link to="/">Go Home</Link></h1>
		</Layout>
	)
}

export default NotFound
