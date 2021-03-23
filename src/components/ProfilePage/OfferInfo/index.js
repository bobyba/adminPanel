import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/Table";
import s from "./index.module.css";

const OfferInfo = (props) => {
  ;
  return (
    <>
      <HeaderBack
        setStep={props.setStep}
        name={props.offerData.nameCourse}
        step="offersSub"
      />
      <div className={s.contButtons}>
        <Button
          className={s.Button}
          block
          onClick={() => {
            props.setStep("timetable");
          }}
        >
          Посмотреть договор
        </Button>
        <Button
          className={s.Button}
          block
          onClick={() => {
            props.setStep("offers");
          }}
        >
          Оплатить следующий месяц
        </Button>
        <Button
          className={s.Button}
          block
          onClick={() => {
            props.setStep("personal-data");
          }}
        >
          Подключить автоматический платеж
        </Button>
      </div>
    </>
  );
};

export default OfferInfo;
