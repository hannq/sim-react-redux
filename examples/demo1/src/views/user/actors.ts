/*
 * @Author: hannq
 * @Date: 2020-06-04 13:05:34
 * @Last Modified by: hannq
 * @Last Modified time: 2020-06-04 22:15:03
 */

import state from "./state";
import { createActorsFactory } from "sim-react-redux";

const asdf = createActorsFactory(state, store => ({
  /**
   * 把 count1 +1
   */
  async addCount1() {
    const { count1 } = store.getState();
    return {
      count1: count1 + 1
    };
  },
  /**
   * 把 count2 +1
   */
  async addCount2() {
    const { count2 } = store.getState();
    return {
      count2: count2 + 1,
    };
  }
}));

export default asdf
