import React from 'react';
import { Link, graphql } from 'gatsby';
import styles from './index.module.less';

interface IProps { }

const Footer: React.SFC<IProps> = () => {
  return (
    <div className={styles.sideBarWrapper}>sidebar</div>
  )
}

export default Footer
