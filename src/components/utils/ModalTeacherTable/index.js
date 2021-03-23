import React, { useEffect } from "react";
import s from "./index.module.css";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Table, Input, Button, Space, Modal, message } from "antd";
import { useState } from "react";

import { SettingOutlined } from "@ant-design/icons";
import Checkbox from "antd/lib/checkbox/Checkbox";

const ModalTeacherTable = (props) => {
  debugger;
  let [searchText, setSearchText] = useState("");
  let [searchedColumn, setSearchedColumn] = useState("");
  let searchInput;
  let getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder="Поиск"
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Поиск
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Сброс
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: "#1890ff", fontSize: "13px" }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  let handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  let handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  /* ------------- */

  let columns = [
    {
      title: "ФИО преподавателя",
      dataIndex: "label",
      key: "label",
      ...getColumnSearchProps("label"),
    },
  ];
  /* ------------- */

  const handleOkTeachers = () => {
    props.setModalVisible(false);
    props.setTeacher(selectedRows);
    message.success("Преподаватели сохранены");
  };

  const handleCancelTeachers = () => {
    props.setModalVisible(false);
  };

  /* ------------- */

  let [selectedRowKeys, setSelectedRowKeys] = useState([]);

  let [selectedRows, setSelectedRows] = useState();

  useEffect(() => {
    setSelectedRowKeys(props.arrRows);
    debugger;
  }, [props.arrRows]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      debugger;
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);
    },
    selectedRowKeys,
  };
  /* ------------- */

  return (
    <Modal
      title="Выбор преподавателя"
      visible={props.isModalVisible}
      onOk={handleOkTeachers}
      onCancel={handleCancelTeachers}
    >
      <Button
        className={s.headerCont}
        type="primary"
        onClick={() => {
          props.setStep("3");
        }}
      >
        Добавить нового
      </Button>
      <Table
        align="center"
        /*  pagination={false} */
        columns={columns}
        dataSource={props.dataSourceAll}
        className={s.table}
        /* size="middle" */
        pagination={{ responsive: true, position: ["topRight"] }}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
      />
    </Modal>
  );
};

export default ModalTeacherTable;
