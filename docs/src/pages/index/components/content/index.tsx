import React from 'react';
import { Link, graphql } from 'gatsby';
import Img, { FluidObject } from "gatsby-image";
import { Button } from 'antd';
import simReactReduxImg from '../../../../images/sim-react-redux.png';
import styles from './index.module.less';

interface IProps { }

const Footer: React.SFC<IProps> = (props) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <img className={styles.logo} src={simReactReduxImg} alt="logo"/>
        <h1 className={styles.title}>Sim React Redux</h1>
      </div>
      <h2 className={styles.subtitle}>Official React bindings for Redux</h2>
      <Link to={`/introduction/quick-start`}>
        <Button
          className={styles.startBtn}
          type='primary'
        >开始使用</Button>
      </Link>
    </article>
  )
}

export default Footer
