import React, { useEffect } from "react";
import s from "./index.module.css";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Table, Input, Button, Space } from "antd";
import { useState } from "react";

import { SettingOutlined } from "@ant-design/icons";

const SearchTable = (props) => {
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

  let columns = props.columns.map((item) => {
    if (item.key === "action") {
      return { ...item };
    }
    return { ...item, ...getColumnSearchProps(item.dataIndex) };
  });

  let topMargin = "";
  if (props.dataSource.length === 0) {
    topMargin = s.topMargin;
  }

  return (
    <>
      <Button
        className={s.headerCont}
        type="primary"
        onClick={props.showNewProgram}
      >
        Добавить
      </Button>

      <Table
        align="center"
        /*  pagination={false} */
        columns={columns}
        dataSource={props.dataSource}
        className={s.table + " " + topMargin}
        /* size="middle" */
        pagination={{
          responsive: true,
          position: ["topRight"],
        }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              props.showSettings(record);
            }, // click row
            onDoubleClick: (event) => {}, // double click row
            onContextMenu: (event) => {}, // right button click row
            onMouseEnter: (event) => {}, // mouse enter row
            onMouseLeave: (event) => {}, // mouse leave row
          };
        }}
      />
    </>
  );
};

export default SearchTable;
