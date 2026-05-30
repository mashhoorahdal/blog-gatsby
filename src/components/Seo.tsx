import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

type SeoProps = {
  title: string
  description?: string
}

const Seo = ({ title, description }: SeoProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <title>{data.site.siteMetadata.title} | {title}</title>
      {description && <meta name="description" content={description} />}
    </>
  )
}

export default Seo
