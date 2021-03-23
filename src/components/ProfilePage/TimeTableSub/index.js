import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/Table";

import FullCalendar, { formatDate } from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";

import ruLocale from "@fullcalendar/core/locales/ru";

import s from "./index.module.css";

const TimeTableSub = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <HeaderBack setStep={props.setStep} name="Расписание" step="timetable" />
      <div className={s.contButtons}>
        <FullCalendar
          headerToolbar={{ end: "prev,next" }}
          locale={ruLocale}
          height="auto"
          className={s.Calendar}
          initialView="listWeek"
          events={props.selectedTimeTableData}
          plugins={[listPlugin]}
        />
      </div>
    </div>
  );
};

export default TimeTableSub;
