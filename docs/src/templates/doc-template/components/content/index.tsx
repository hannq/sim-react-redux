import React from 'react';
import styles from './index.module.less';
import { Anchor } from 'antd';
const { Link } = Anchor;
interface IProps {
  content: string;
}

const Content: React.SFC<IProps> = ({ content }) => {
  return (
    <>
      <article className={styles.contentWrappper}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
      <Anchor className={styles.anchor}>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#components-anchor-demo-basic" title="Basic demo with Target" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor>
    </>
  )
}

export default Content
