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
  // 注: 这里所有的操作在 vscode 里都会有完备的代码提示和校验
  // ############### 获取数值 ###############
  // 可以直接这么做映射
  const count1 = useSelector(({ home }) => home.count1);
  const count2 = useSelector(({ home }) => home.count2);
  // 也可以使用解构的方法
  // const { count1 } = useSelector(({ home }) => home);

  // ############### 获取方法 ###############
  const { home: { addCount1 } } = useActors();
  // 也可以使用字符串提取的方式
  // 注: 在 vscode 里会有字符串提示直接供选择
  // const addCount = useActors('home', 'addCount');

  return (
    <div style={{ borderTop: '1px solid #ccc', padding: 10  }}>
      <h4>count-01</h4>
      <div>count-01: {count1}</div>
      <div>count-01: {count2}</div>
      <Button onClick={() => addCount1()}>count + 1</Button>
    </div>
  )
}

export default Count01
