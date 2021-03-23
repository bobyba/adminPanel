import React, { useEffect } from "react";
import s from "./index.module.css";
import { Link, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  SmileOutlined,
  LikeOutlined,
  UsergroupAddOutlined,
  FileOutlined,
  HomeOutlined,
  UserOutlined,
  CalendarOutlined,
  CopyOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import Contracts from "./Contracts";
import Programs from "./Programs";
import TimeTable from "./TimeTable";
import Teachers from "./Teachers";
import Hulls from "./Hulls";
import Patterns from "./Patterns";
import Groups from "./Groups";
import Students from "./Students";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

const AdminPanel = ({
  programsData,
  setDataNewProgram,
  updateDataSelectProgram,

  deleteDataSelectProgram,
  teachersData,
  hullsData,
  setDataNewTeacher,
  updateDataSelectTeacher,
  deleteDataSelectTeacher,
  setDataNewHull,
  updateDataSelectHull,
  deleteDataSelectHull,
  contractsData,
  setDataNewContract,
  updateDataSelectContract,
  deleteDataSelectContract,
  patternsData,
  setDataNewPattern,
  updateDataSelectPattern,
  deleteDataSelectPattern,
}) => {
  let [step, setStep] = useState("1");

  let renderMenu = () => {
    switch (step) {
      case "1":
        return (
          <Programs
            programsData={programsData}
            setDataNewProgram={setDataNewProgram}
            updateDataSelectProgram={updateDataSelectProgram}
            setStep={setStep}
            deleteDataSelectProgram={deleteDataSelectProgram}
            teachersData={teachersData}
            hullsData={hullsData}
          />
        );
      case "2":
        return <TimeTable />;
      case "3":
        return (
          <Teachers
            setDataNewTeacher={setDataNewTeacher}
            updateDataSelectTeacher={updateDataSelectTeacher}
            teachersData={teachersData}
            deleteDataSelectTeacher={deleteDataSelectTeacher}
          />
        );
      case "4":
        return (
          <Hulls
            hullsData={hullsData}
            setDataNewHull={setDataNewHull}
            updateDataSelectHull={updateDataSelectHull}
            deleteDataSelectHull={deleteDataSelectHull}
          />
        );
      case "5":
        return (
          <Patterns
            patternsData={patternsData}
            setDataNewPattern={setDataNewPattern}
            updateDataSelectPattern={updateDataSelectPattern}
            deleteDataSelectPattern={deleteDataSelectPattern}
          />
        );
      case "6":
        return <Groups />;
      case "7":
        return (
          <Contracts
            contractsData={contractsData}
            setDataNewContract={setDataNewContract}
            updateDataSelectContract={updateDataSelectContract}
            deleteDataSelectContract={deleteDataSelectContract}
          />
        );
      case "8":
        return <Students />;
      case "9":
        return <Students />;
      default:
        break;
    }
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className={s.logo}>ШКОЛА 854</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={(data) => {
            setStep(data.key);
          }}
        >
          <Menu.Item key="1" icon={<CopyOutlined />}>
            Программы
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            Расписание
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Преподаватели
          </Menu.Item>
          <Menu.Item key="4" icon={<HomeOutlined />}>
            Корпуса
          </Menu.Item>
          <Menu.Item key="5" icon={<FileOutlined />}>
            Шаблоны
          </Menu.Item>
          <Menu.Item key="6" icon={<UsergroupAddOutlined />}>
            Группы
          </Menu.Item>
          <Menu.Item key="7" icon={<LikeOutlined />}>
            Договоры
          </Menu.Item>
          <Menu.Item key="8" icon={<SmileOutlined />}>
            Ученики
          </Menu.Item>
          <Menu.Item key="9" icon={<FileSearchOutlined />}>
            Документация
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ minHeight: "100%", marginLeft: 200 }}>
        <Content
          style={{
            backgroundColor: "rgba(202, 202, 202, 0.85)",
            boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.6)",
            minHeight: "100vh",
            height: "100%",
            padding: 24,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "1337px" }}>{renderMenu()}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPanel;
