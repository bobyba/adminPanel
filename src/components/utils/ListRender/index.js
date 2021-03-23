import React from "react";
import { List, Avatar, Button, Skeleton } from "antd";
import s from "./index.module.css";
import Checkbox from "antd/lib/checkbox/Checkbox";

const ListRender = (props) => {
  return (
    <List
      className="das"
      size="small"
      itemLayout="horizontal"
      dataSource={props.data}
      bordered
      renderItem={(item) => (
        <List.Item
          className={s.listItem}
          actions={[
            <div style={{ marginRight: "-2.5vw" }}>
              {props.checkbox ? <Checkbox /> : <a>ещё</a>}
            </div>,
          ]}
          onClick={() => {
            {
              props.selectItem && props.selectItem(item);
            }
          }}
        >
          <List.Item.Meta
            avatar={props.avatar ? <Avatar src={props.avatar} /> : ""}
            title={item.fio || item.label}
            description={item.descrip}
          />
          {props.price && <div>{item.price} P</div>}
        </List.Item>
      )}
    />
  );
};

export default ListRender;
