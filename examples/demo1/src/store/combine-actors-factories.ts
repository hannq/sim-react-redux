/*
 * @Author: hannq
 * @Date: 2020-06-04 23:19:33
 * @Last Modified by: hannq
 * @Last Modified time: 2020-06-23 11:44:01
 */

import { combineActorsFactories } from 'sim-react-redux';
import homeActorsFactory from '../views/home/actors';
import userActorsFactory from '../views/user/actors';

const rootActorsFactory = combineActorsFactories({
  /** 主页 */
  home: homeActorsFactory,
  /** 用户 */
  user: userActorsFactory,
});

export {
  rootActorsFactory
}
