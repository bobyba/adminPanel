import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/Table";
import ListRender from "../../utils/ListRender";

import s from "./index.module.css";

const OffersSubTable = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <HeaderBack setStep={props.setStep} name="Дисциплины" step="offers" />
      <div className={s.contButtons}>
        <ListRender
          selectItem={props.selectItem}
          data={props.selectedChildOffersData}
          page="offersSub"
        />
      </div>
    </div>
  );
};

export default OffersSubTable;
