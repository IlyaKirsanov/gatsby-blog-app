import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/Head'

export const query = graphql`
	query($slug: String!){
		contentfulBlogPost(slug: {eq: $slug}){
			title
			publishedDate(formatString: "MMMM Do, YYYY")
			body{
				raw
				references{
					file{
						url
					}
      	}
			}
		}
	}
`

const Blog = (props) => {
	const body = props.data.contentfulBlogPost.body

	const options = {
		renderNode: {
			"embedded-asset-block": (node) => {
				const id = node.data.target.sys.id
				const alt = 'post'
				let url = ''
				body.references.forEach(ref => {
					if (ref.file.url.includes(id)) {
						url = ref.file.url
					}
				})
				return <img alt={alt} src={url} />
			}
		}
	}

	return (
		<Layout>
			<Head title={props.data.contentfulBlogPost.title}/>
			<h1>{props.data.contentfulBlogPost.title}</h1>
			<p>{props.data.contentfulBlogPost.publishedDate}</p>
			{documentToReactComponents(JSON.parse(body.raw), options)}
		</Layout>
	)
}


export default Blog