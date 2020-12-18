import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./index.module.css";

const Main = (props) => {
  return (
    <div className={s.contButtons}>
      <span className={s.text}>Здравствуйте, Елена Владимировна!</span>
      <Button
        className={s.Button}
        block
        onClick={() => {
          props.setStep("timetable");
        }}
      >
        Расписание
      </Button>
      <Button
        className={s.Button}
        block
        onClick={() => {
          props.setStep("offers");
        }}
      >
        Оформленные услуги
      </Button>
      <Button
        className={s.Button}
        block
        onClick={() => {
          props.setStep("personal-data");
        }}
      >
        Личные данные
      </Button>
      <Button className={s.Button} style={{ borderColor: "red" }} block>
        Выйти
      </Button>
    </div>
  );
};

export default Main;
