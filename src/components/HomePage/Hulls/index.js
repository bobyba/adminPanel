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
import SelectHulls from "./SelectHulls";
import NewHulls from "./NewHulls";

const { Option } = Select;

function Hulls(props) {
  const columns = [
    {
      title: "Название корпуса",
      dataIndex: "label",
      key: "label",
      align: "center",
    },
  ];

  let [NHorSH, setNHorSH] = useState();
  let [dataForSettings, setDataForSettings] = useState(0);

  let showSettings = (data) => {
    setDataForSettings(data.key);
    setNHorSH("SH");
  };

  return (
    <div className={s.cont}>
      <SearchTable
        showNewProgram={() => {
          debugger;
          setNHorSH("NH");
        }}
        showSettings={showSettings}
        columns={columns}
        dataSource={props.hullsData}
      />
      {NHorSH === "SH" && (
        <SelectHulls
          closeSettingCard={() => {
            setNHorSH("");
          }}
          deleteDataSelectHull={props.deleteDataSelectHull}
          updateDataSelectHull={props.updateDataSelectHull}
          data={props.hullsData[dataForSettings]}
        />
      )}
      {NHorSH === "NH" && (
        <NewHulls
          closeSettingCard={() => {
            setNHorSH("");
          }}
          setDataNewHull={props.setDataNewHull}
        />
      )}
    </div>
  );
}

export default Hulls;
