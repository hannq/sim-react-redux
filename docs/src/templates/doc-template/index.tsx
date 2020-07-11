import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/seo';
import Header from './components/header';
import Footer from './components/footer';
import SideBar from './components/side-bar';
import '@primer/css/core/index.scss';
import styles from './index.module.less';

interface IPathContext {
  /** 当前页面的内容 */
  content: string;
}

interface IProps {
  /** 通过 graphql 注入的数据 */
  data: any;
  /** 创建页面时注入的内容 */
  pathContext: IPathContext;
}

const IndexPage: React.SFC<IProps> = (props) => {
  const { data, pathContext: {
    content
  } } = props;
  return (
    <>
      <SEO title="博客首页" />
      <Header />
      <SideBar />
      <article
        className={styles.contentWrappper}
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
      <Footer />
    </>
  )
}
//

// export const query = graphql`
//   query IndexPageQuery {

//   }
// `

export default IndexPage
