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
          siteUrl
        }
      }
    }
  `)

  const { title: siteTitle, siteUrl } = data.site.siteMetadata
  const fullTitle = `${siteTitle} | ${title}`
  const ogImage = `${siteUrl}/og-image.png`
  const twitterImage = `${siteUrl}/twitter-image.png`

  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}

      {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
    </>
  )
}

export default Seo
