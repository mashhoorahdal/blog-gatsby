import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/Seo'
import {post,dateClass} from './index.module.css'
import Footer from '../../components/Footer'

const BlogPost = ({ data, children }) => {
  return (<>
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={post}>
      <h2>{data.mdx.frontmatter.title}</h2>
      <p className={dateClass}>{data.mdx.frontmatter.date}</p>
      {children}
      </div>

    </Layout>
    <Footer/>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost