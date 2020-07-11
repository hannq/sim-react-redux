import React from 'react';
import { Link, graphql } from 'gatsby';
import Img, { FluidObject } from "gatsby-image";
import SEO from '../../components/seo';
import Header from './components/header';
import Footer from './components/footer';
import SideBar from './components/side-bar';
import '@primer/css/core/index.scss';
import styles from './index.module.less';

interface IAllMarkdownRemark {
  edges: {
    node: {
      id: string;
      /** 内容节选 */
      excerpt: string;
      /** markdown 文件的 frontmatter 配置信息 */
      frontmatter: {
        /** 标题 */
        title: string;
        /** 页面路径 */
        path: string;
        /** 发布时间 */
        publishDate: string;
        /** 封面信息 */
        cover: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
      }
    }
  }[]
}

interface IQueryData {
  /** 所有的 markdown 信息 */
  allMarkdownRemark: IAllMarkdownRemark;
}

interface IProps {
  /** 通过 graphql 注入的数据 */
  data: IQueryData;
}

const IndexPage: React.SFC<IProps> = (props) => {
  const { data } = props;
  return (
    <>
      <SEO title="博客首页" />
      <Header />
      <SideBar />
      <article className={styles.contentWrappper}>
        {data.allMarkdownRemark.edges.map(edge => (
          <div className={styles.blogItem} key={edge.node.id}>
            <Img className={styles.blogCover} fluid={edge.node.frontmatter.cover.childImageSharp.fluid} alt={edge.node.frontmatter.title} />
            <div className={styles.blogItemContent}>
              <div className={styles.tagWrapper}>
                <p className={styles.blogItemDate}>{edge.node.frontmatter.publishDate}</p>
              </div>
              <h4 className={styles.blogItemTitle}>
                <Link to={edge.node.frontmatter.path}>
                  {edge.node.frontmatter.title}
                </Link>
              </h4>
              <p className={styles.blogItemDesc}>{edge.node.excerpt}</p>
              <p className={styles.detailLink}>
                <Link to={edge.node.frontmatter.path}>阅读全文...</Link>
              </p>
            </div>
          </div>
        ))}
      </article>
      <Footer />
    </>
  )
}
//

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___publishDate}) {
      edges {
        node {
          id
          excerpt(pruneLength: 300, format: PLAIN, truncate: true)
          frontmatter {
            title
            path
            publishDate(formatString: "YYYY-MM-DD")
            cover {
              childImageSharp {
                fluid {
                  sizes
                  src
                  srcSet
                  aspectRatio
                  base64
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
