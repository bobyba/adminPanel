import { Button, Input, Space, Table } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import {
  SettingOutlined,
  UploadOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import SearchTable from "../../utils/Table";
import Avatar from "antd/lib/avatar/avatar";
import SelectPatterns from "./SelectPatterns";
import NewPatterns from "./NewPatters";

const { Option } = Select;

function Hulls(props) {
  const columns = [
    {
      title: "Наименование договора",
      dataIndex: "label",
      key: "label",
      align: "center",
    },
  ];

  const data = [
    {
      key: 1,
      label: "Договор от 23.02",
      type: "вывфы",
      url: "https://fsd.csd",
      urlStorage: "docs.docx",
    },
    {
      key: 2,
      label: "Договор от 24.02",
      type: "вывфы",
      url: "https://fsd.csd",
      urlStorage: "docs.docx",
    },
    {
      key: 3,
      label: "Договор от 12.05",
      type: "вывфы",
      url: "https://fsd.csd",
      urlStorage: "docs.docx",
    },
    {
      key: 4,
      label: "Договор от 21.07",
      type: "вывфы",
      url: "https://fsd.csd",
      urlStorage: "docs.docx",
    },
  ];

  let [NPorSP, setNPorSP] = useState();
  let [dataForSettings, setDataForSettings] = useState();

  let showSettings = (data) => {
    setDataForSettings(data);
    setNPorSP("SP");
  };

  return (
    <div className={s.cont}>
      <SearchTable
        showNewProgram={() => {
          setNPorSP("NP");
        }}
        showSettings={showSettings}
        columns={columns}
        dataSource={props.patternsData}
      />
      {NPorSP === "SP" && (
        <SelectPatterns
          updateDataSelectPattern={props.updateDataSelectPattern}
          deleteDataSelectPattern={props.deleteDataSelectPattern}
          data={dataForSettings}
        />
      )}
      {NPorSP === "NP" && (
        <NewPatterns
          showNewProgram={() => {
            setNPorSP("NP");
          }}
          setDataNewPattern={props.setDataNewPattern}
        />
      )}
    </div>
  );
}

export default Hulls;
