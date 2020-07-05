/*
 * @Author: hannq
 * @Date: 2020-06-04 12:39:43
 * @Last Modified by: hannq
 * @Last Modified time: 2020-06-23 20:01:28
 */

import React, { FC } from "react";
import { Button } from "antd";
import { useActors, useSelector } from "../../store";
import Count01 from "./components/count-01";
import Count02 from "./components/count-02";
import { Link } from "react-router-dom";

interface IProps {}

const Home: FC<IProps> = () => (
  <div>
    <h1>Home 6666</h1>
    <Count01 />
    <Count02 />
    <Link to="/user">跳转 user</Link>
  </div>
);

export default Home;
