import { Button, Input, Space, Table } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import SearchTable from "../../utils/Table";
import SelectStudent from "./SelectStudent";
import NewStudent from "./NewStudent";

const { Option } = Select;

function Students(props) {
  const columns = [
    {
      title: "ФИО",
      dataIndex: "label",
      key: "label",
      align: "center",
    },
    {
      title: "Дата рождение",
      dataIndex: "birthday",
      key: "birthday",
      align: "center",
    },
  ];

  const data = [
    {
      id: 1,
      label: "Махмудинов Шамиль",
      birthday: "30.10.1999",
    },
    {
      id: 1,
      label: "Прокопенко Святогор",
      birthday: "21.05.2009",
    },
    {
      id: 1,
      label: "Билли Харрингтон",
      birthday: "14.07.1969",
    },
    {
      id: 1,
      label: "Хашогги Джамал",
      birthday: "14.03.2004",
    },
    {
      id: 1,
      label: "МАкопян Абрек",
      birthday: "12.09.2008",
    },
  ];

  let [NSorSS, setNSorSS] = useState();
  let [dataForSettings, setDataForSettings] = useState();

  let showSettings = (data) => {
    setDataForSettings(data);
    setNSorSS("SS");
  };

  return (
    <div className={s.cont}>
      <SearchTable
        columns={columns}
        dataSource={data}
        showNewProgram={() => {
          setNSorSS("NS");
        }}
        showSettings={showSettings}
      />
      {NSorSS === "SS" && <SelectStudent data={dataForSettings} />}
      {NSorSS === "NS" && <NewStudent />}
    </div>
  );
}

export default Students;
