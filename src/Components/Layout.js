import React from 'react'
import Header from "./Header";
import Footer from "./footer";
import '../styles/index.scss'

const Layout = (props) => {
	return (
		<div className="layout">
			<div className="content-contain">
				<Header />
				{ props.children }
			</div>
			<Footer />
		</div>
	)
}

export default Layout
