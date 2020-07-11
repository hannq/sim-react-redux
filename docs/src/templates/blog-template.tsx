import React from "react"
import { graphql } from "gatsby"
import "@primer/css/core/index.scss";
import "@primer/css/markdown/index.scss";
import 'prismjs-github/scheme.css';
import 'katex/dist/katex.min.css';
import './index.less';
import styles from './index.module.less';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className={`${styles.markdownWrapper} markdown-wrapper`}>
      <div
        className={`${styles.blogWrapper} markdown-body`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        publishDate
        path
        title
      }
    }
  }
`
