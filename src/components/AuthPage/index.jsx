import React from "react";
import s from "./index.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

function AuthPage(props) {
  return (
    <div className={s.parent}>
      <div className={s.block}>Только стационарный ПК</div>
    </div>
  );
}

export default AuthPage;
