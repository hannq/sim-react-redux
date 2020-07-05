/*
 * @Author: hannq
 * @Date: 2020-06-04 12:39:43
 * @Last Modified by: hannq
 * @Last Modified time: 2020-06-23 20:01:28
 */

import React, { FC } from "react";
import { Link } from "react-router-dom";
import Count01 from "./components/count-01";
import Count02 from "./components/count-02";
import UserCount from "./components/user-count";

interface IProps {}

const Home: FC<IProps> = () => (
  <div>
    <h1>Home</h1>
    <Count01 />
    <Count02 />
    <UserCount />
    <Link to="/user">跳转 user</Link>
  </div>
);

export default Home;
