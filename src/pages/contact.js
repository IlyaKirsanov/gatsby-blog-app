import React from 'react'
import Layout from "../components/Layout";
import Head from '../components/Head';
const ContactPage = () => {
	return (
		<Layout>
			<Head title="Contacts" />
			<h1>Contacts</h1>
			<p>Contacts me will be here. Mail to ilya.kirsanov@gmail.com</p>
			<p>LinkedIn <a href="https://www.linkedin.com/in/ilyakirsanov/" target="_blank">Ilya Kirsanov</a></p>
		</Layout>
	)
}

export default ContactPage;