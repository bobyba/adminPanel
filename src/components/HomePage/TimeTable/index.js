import { Button, Input, Space, Table } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined } from "@ant-design/icons";
import SearchTable from "../../utils/Table";
import NewTimeTable from "./NewTimeTable";
import SelectTimeTable from "./SelectTimeTable";

function TimeTable(props) {
  const columns = [
    {
      title: "Наименование программы",
      dataIndex: "label",
      key: "label",
      align: "center",
    },
    {
      title: "Кол-во групп",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
    },
  ];

  const data = [
    {
      id: 1,
      label: "Финансовая грамотность",
      quantity: 1,
    },
    {
      id: 2,
      label: "Борьба",
      quantity: 5,
    },
    {
      id: 3,
      label: "Лего",
      quantity: 6,
    },
    {
      id: 4,
      label: "Матеш",
      quantity: 3,
    },
  ];

  let [NTorST, setNTorST] = useState();
  let [dataForSettings, setDataForSettings] = useState();

  let showSettings = (data) => {
    debugger;
    setDataForSettings(data);
    setNTorST("ST");
  };

  return (
    <div className={s.cont}>
      <SearchTable
        columns={columns}
        dataSource={data}
        showNewProgram={() => {
          setNTorST("NT");
        }}
        showSettings={showSettings}
      />
      {NTorST === "ST" && <SelectTimeTable data={dataForSettings} />}
      {NTorST === "NT" && <NewTimeTable />}
    </div>
  );
}

export default TimeTable;
