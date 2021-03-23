import { Button, Input, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import SearchTable from "../../utils/Table";
import SelectProgram from "./SelectProgram";
import NewProgram from "./NewProgram";

const { Option } = Select;

function Programs(props) {
  const columns = [
    {
      title: "Наименование",
      dataIndex: "label",
      key: "label",
      align: "center",
    },
    {
      title: "Направленность",
      dataIndex: "categories",
      key: "categories",
      align: "center",
    },
    {
      title: "Возраст",
      dataIndex: "ageFull",
      key: "ageFull",
      align: "center",
    },
  ];

  let [NPorSP, setNPorSP] = useState();
  let [dataProgramForSettings, setDataProgramForSettings] = useState(0);

  let showSettings = (data) => {
    setDataProgramForSettings(data.key);
    setNPorSP("SP");
  };

  

  return (
    <div className={s.cont}>
      <SearchTable
        showNewProgram={() => {
          debugger;
          setNPorSP("NP");
        }}
        showSettings={showSettings}
        columns={columns}
        dataSource={props.programsData}
      />
      {NPorSP === "SP" && (
        <SelectProgram
          closeSettingCard={() => {
            setNPorSP("");
          }}
          hullsData={props.hullsData}
          teachersData={props.teachersData}
          setStep={props.setStep}
          data={props.programsData[dataProgramForSettings]}
          updateDataSelectProgram={props.updateDataSelectProgram}
          deleteDataSelectProgram={props.deleteDataSelectProgram}
        />
      )}
      {NPorSP === "NP" && (
        <NewProgram
          closeSettingCard={() => {
            setNPorSP("");
          }}
          setDataNewProgram={props.setDataNewProgram}
          hullsData={props.hullsData}
          teachersData={props.teachersData}
          setStep={props.setStep}
        />
      )}
    </div>
  );
}

export default Programs;
