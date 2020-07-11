import React from 'react';
import { Link } from 'gatsby';
import styles from './index.module.less';
import simReactReduxImg from '../../../../images/sim-react-redux.png';
import { version } from '../../../../../../package.json';
import { GithubFilled } from '@ant-design/icons';
// import {  } from "@";
// import Img from "gatsby-image";
interface IProps {

}

const Footer: React.SFC<IProps> = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Link className={styles.linkWrapper} to="/">
          <img className={styles.logo} src={simReactReduxImg} alt="logo"/>
          <span className={styles.text}>Sim React Redux {version}</span>
        </Link>
        <Link to="https://github.com/hannq/sim-react-redux"><GithubFilled className={styles.githubIcon} /></Link>
      </header>
    </section>
  )
}

export default Footer
