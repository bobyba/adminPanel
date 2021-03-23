import { Button, Input, Space, Table } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import SearchTable from "../../utils/Table";
import Avatar from "antd/lib/avatar/avatar";
import SelectTeacher from "./SelectTeacher";
import NewTeacher from "./NewTeacher";

const { Option } = Select;

function Teachers(props) {
  const columns = [
    {
      title: "ФИО учителя",
      dataIndex: "label",
      key: "label",
      align: "center",
    },
  ];

  let [NTorST, setNTorST] = useState();
  let [dataForSettings, setDataForSettings] = useState(0);

  let showSettings = (data) => {
    setDataForSettings(data.key);
    setNTorST("ST");
  };

  return (
    <div className={s.cont}>
      <SearchTable
        columns={columns}
        dataSource={props.teachersData}
        showNewProgram={() => {
          setNTorST("NT");
        }}
        showSettings={showSettings}
      />
      {NTorST === "ST" && (
        <SelectTeacher
          updateDataSelectTeacher={props.updateDataSelectTeacher}
          data={props.teachersData[dataForSettings]}
          deleteDataSelectTeacher={props.deleteDataSelectTeacher}
          closeSettingCard={() => {
            setNTorST("");
          }}
        />
      )}
      {NTorST === "NT" && (
        <NewTeacher
          closeSettingCard={() => {
            setNTorST("");
          }}
          setDataNewTeacher={props.setDataNewTeacher}
        />
      )}
    </div>
  );
}

export default Teachers;
