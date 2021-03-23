import { Button, Input, Space, Table } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined } from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import SearchTable from "../../utils/Table";
import Avatar from "antd/lib/avatar/avatar";
import NewGroups from "./NewGroups";
import SelectGroups from "./SelectGroups";

const { Option } = Select;

function Groups(props) {
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
      label: "Физра",
      quantity: "1",
    },
    {
      id: 2,
      label: "Англ",
      quantity: "3",
    },
    {
      id: 3,
      label: "Матеш",
      quantity: "6",
    },
    {
      id: 4,
      label: "Геогр",
      quantity: "8",
    },
  ];
  let [NGorSG, setNGorSG] = useState();
  let [dataForSettings, setDataForSettings] = useState();

  let showSettings = (data) => {
    setDataForSettings(data);
    setNGorSG("SG");
  };

  return (
    <div className={s.cont}>
      <SearchTable
        showNewProgram={() => {
          debugger;
          setNGorSG("NG");
        }}
        showSettings={showSettings}
        columns={columns}
        dataSource={data}
      />
      {NGorSG === "SG" && <SelectGroups data={dataForSettings} />}
      {NGorSG === "NG" && <NewGroups />}
    </div>
  );
}

export default Groups;
