/*
 * @Author: hannq
 * @Date: 2020-06-04 12:39:43
 * @Last Modified by: hannq
 * @Last Modified time: 2020-06-23 20:01:28
 */

import React, { FC } from 'react';
import { Button } from 'antd';
// 这里可以配置路径别名 如使用 '@store'
import { useActors, useSelector } from '../../../../store';

interface IProps { }
const Count01: FC<IProps> = () => {
  // 注: 在 vscode 里会有字符串提示直接供选择
  // ############### 获取数值 ###############
  const { count1, count2 } = useSelector(({ user }) => user);

  // ############### 获取方法 ###############
  const { user: {
    addCount1,
    addCount2
  } } = useActors();

  return (
    <div style={{ borderTop: '1px solid #ccc', padding: 10 }}>
      <h4>user-count</h4>
      <div>user-count-01: {count1}</div>
      <div>user-count-02: {count2}</div>
      <Button onClick={() => addCount1()}>count1 + 1</Button>
      <Button style={{ marginLeft: 4 }} onClick={() => addCount2()}>count2 + 1</Button>
    </div>
  )
}

export default Count01
