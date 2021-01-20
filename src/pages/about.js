import React from 'react'
import { Link } from 'gatsby';
import Layout from "../components/Layout";
import Head from '../components/Head';
const AboutPage = () => {
	return (
		<Layout>
			<Head title="About" />
			<h1>About</h1>
			<p>Some information about me will be here</p>
			<p>Let`s get in touch <Link to="/contact">Contact me</Link></p>
		</Layout>
	)
}

export default AboutPage;