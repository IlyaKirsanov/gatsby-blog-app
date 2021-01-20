import React from 'react'
import Layout from "../components/Layout";
import { graphql, Link, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/Head';
const BlogPage = () => {

	const data = useStaticQuery(graphql`
		query{
  allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}){
    edges{
      node{
        title
        slug
        publishedDate(formatString:"MMMM Do, YYYY")
      }
    }
  }
}
	`)

	return (
		<Layout>
			<Head title="Blog" />
			<h1>My Blog</h1>
			<ul className={blogStyles.posts}>
				{data.allContentfulBlogPost.edges.map(edge => {
					return (
						<li className={blogStyles.post}>
							<Link to={`/blog/${edge.node.slug}`}>
								<h3>{edge.node.title}</h3>
								<p>{edge.node.publishedDate}</p>
							</Link>
						</li>
					)
				})}
			</ul>
		</Layout >
	)
}

export default BlogPage