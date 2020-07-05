/*
 * @Author: hannq
 * @Date: 2020-06-04 12:50:36
 * @Last Modified by: hannq
 * @Last Modified time: 2020-06-04 17:02:03
 */

interface IState {
  /** 标题 */
  title: string;
  /** 计数器1 */
  count1: number;
  /** 计数器2 */
  count2: number;
}

const defaultState: IState = {
  title: '首页',
  count1: 0,
  count2: 0,
}

export default defaultState;
