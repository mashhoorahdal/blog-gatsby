import * as React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/Seo'
import Footer from '../../components/Footer'

type BlogData = {
  allMdx: {
    nodes: {
      id: string
      frontmatter: {
        title: string
        date: string
        slug: string
      }
      excerpt: string
    }[]
  }
}

const BlogPage = ({ data }: PageProps<BlogData>) => {
  return (
    <>
      <Layout pageTitle="Writing">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-10">
            Writing
          </h1>
          <div>
            {data.allMdx.nodes.map(node => (
              <Link
                key={node.id}
                to={`/blog/${node.frontmatter.slug}`}
                className="group flex items-start justify-between py-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {node.frontmatter.title}
                  </p>
                  {node.excerpt && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {node.excerpt}
                    </p>
                  )}
                </div>
                <span className="text-sm text-zinc-400 dark:text-zinc-500 ml-8 shrink-0">
                  {node.frontmatter.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Writing" />

export default BlogPage
