import React from "react"
import { Link } from "gatsby";
import Layout from "../Components/Layout";
import Head from '../Components/head'

const Home = () => {
  return (
    <Layout>
      <Head />
      <h1>Sexy world!</h1>
      <h2>I'm spenser and I'm the best</h2>
      <p>
        Need A dev? <Link to="/Contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default Home