import React from 'react';
import { Link, graphql } from 'gatsby';
import styles from './index.module.less';
import { Menu } from 'antd';
const { ItemGroup, Item } = Menu;
interface IProps { }

const Footer: React.SFC<IProps> = () => {
  return (
    <div className={styles.sideBarWrapper}>
      <Menu>
        <ItemGroup title="Item 1">
          <Item key={1}>Option 1</Item>
          <Item key={2}>Option 2</Item>
        </ItemGroup>
        <ItemGroup title="Item 2">
          <Item key={3}>Option 1</Item>
          <Item key={4}>Option 2</Item>
        </ItemGroup>
        <ItemGroup title="Item 3">
          <Item key={3}>Option 1</Item>
          <Item key={4}>Option 2</Item>
        </ItemGroup>
        <ItemGroup title="Item 4">
          <Item key={3}>Option 1</Item>
          <Item key={4}>Option 2</Item>
        </ItemGroup>
        <ItemGroup title="Item 5">
          <Item key={3}>Option 1</Item>
          <Item key={4}>Option 2</Item>
        </ItemGroup>
      </Menu>
    </div>
  )
}

export default Footer
