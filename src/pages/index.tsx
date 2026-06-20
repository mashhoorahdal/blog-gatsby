import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import Seo from '../components/Seo'
import Feed, { type FeedPost } from '../components/Feed'

type IndexData = {
  allMdx: {
    nodes: {
      id: string
      frontmatter: {
        title: string
        date: string
        slug: string
        hook?: string
      }
      excerpt: string
    }[]
  }
}

const IndexPage = ({ data }: PageProps<IndexData>) => {
  const posts: FeedPost[] = data.allMdx.nodes.map(node => ({
    id: node.id,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    slug: node.frontmatter.slug,
    hook: node.frontmatter.hook,
    excerpt: node.excerpt,
  }))

  return <Feed posts={posts} />
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          slug
          hook
        }
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage
