import { Button, Input, Space, Table } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined, DownloadOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import SearchTable from "../../utils/Table";
import NewContracts from "./NewContracts";
import SelectContracts from "./SelectContracts";

const { Option } = Select;

function Contracts(props) {
  const columns = [
    {
      title: "Имя ученика",
      dataIndex: "label",
      key: "label",
      align: "center",
    },
    {
      title: "Программа",
      dataIndex: "program",
      key: "program",
      align: "center",
    },
  ];

  const data = [
    {
      id: 1,
      label: "Саманье Алунчи",
      program: "Борьба",
    },
    {
      id: 2,
      label: "Петренко Алберт",
      program: "Кожаное дело",
    },
    {
      id: 3,
      label: "Глав Главач",
      program: "Космос",
    },
    {
      id: 5,
      label: "Саманье Алунчи",
      program: "Борьба",
    },
    {
      id: 6,
      label: "Саманье Алунчи",
      program: "Борьба",
    },
  ];

  let [NCorSC, setNCorSC] = useState();

  let [dataForSettings, setDataForSettings] = useState();

  let showSettings = (data) => {
    setDataForSettings(data);
    setNCorSC("SC");
  };

  return (
    <div className={s.cont}>
      <SearchTable
        showNewProgram={() => {
          setNCorSC("NC");
        }}
        showSettings={showSettings}
        columns={columns}
        dataSource={data}
      />
      {NCorSC === "SC" && <SelectContracts data={dataForSettings} />}
      {NCorSC === "NC" && (
        <NewContracts setDataNewContract={props.setDataNewContract} />
      )}
    </div>
  );
}

export default Contracts;
