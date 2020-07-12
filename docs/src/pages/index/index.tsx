import React from 'react';
import SEO from '../../components/seo';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import './index.module.less';

interface IProps { }

const IndexPage: React.SFC<IProps> = () => {
  return (
    <>
      <SEO title="Sim React Redux" />
      <Header />
      <Content />
      <Footer />
    </>
  )
}

export default IndexPage
