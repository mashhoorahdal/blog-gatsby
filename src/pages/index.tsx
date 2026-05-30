import * as React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/Seo'
import Footer from '../components/Footer'

type IndexData = {
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

const IndexPage = ({ data }: PageProps<IndexData>) => {
  return (
    <>
      <Layout pageTitle="Home">
        <div className="space-y-16">
          <section>
            <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-3">
              Hey, I'm
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              Mashhoor Ahdal
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              BTech CS student &amp; full-stack developer. I write about software, programming, and things I'm learning.
            </p>
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {['React', 'Python', 'Django', 'MySQL'].map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Latest Posts
              </h2>
              <Link
                to="/blog"
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                All posts →
              </Link>
            </div>
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
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-1">
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
          </section>
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 5) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          slug
        }
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage
