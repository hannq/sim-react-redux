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
  // 可以直接这么做映射
  const count1 = useSelector(({ home }) => home.count1);
  const count2 = useSelector(({ home }) => home.count2);
  // 也可以使用解构的方法
  // const { count2 } = useSelector(({ home }) => home);

  // ############### 获取方法 ###############
  const { home: { addCount2 } } = useActors();
  // 也可以使用字符串提取的方式
  // 注: 在 vscode 里会有直接的字符串提示
  // const addCount1 = useActors('home', 'addCount1');

  return (
    <div style={{ borderTop: '1px solid #ccc', padding: 10 }}>
      <h4>count-02</h4>
      <div>count-01: {count1}</div>
      <div>count-02: {count2}</div>
      <Button onClick={() => addCount2()}>count + 1</Button>
    </div>
  )
}

export default Count01
