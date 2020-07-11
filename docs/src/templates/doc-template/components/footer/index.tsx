import React from 'react';
import { Link, graphql } from 'gatsby';
import Img, { FluidObject } from "gatsby-image";
import styles from './index.module.less';

interface IProps { }

const Footer: React.SFC<IProps> = (props) => {
  return (
    <footer className={styles.footer}>
      <span>Copyright&nbsp;</span>
      <a href="https://hannq.github.io">&copy;NianQi Han&nbsp;</a>
      <span>的技术博客&nbsp;{new Date().getFullYear()}</span>
      <span>&nbsp;备案号:&nbsp;</span>
      <a href="http://www.beian.miit.gov.cn/">苏ICP备18010893号-1</a>
    </footer>
  )
}

export default Footer
