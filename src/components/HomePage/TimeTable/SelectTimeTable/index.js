import { Button, Input, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";

const { Option } = Select;

function SelectTimeTable(props) {
  let data = props.data;

  return (
    <div className={s.contCard}>
      <div className={s.parent}>
        <div className={s.div1}>
          <div className={s.header}>Наименование</div>
          <Input placeholder="Наименование направленности" />
        </div>
        <div className={s.div2}>
          <div className={s.header}>&nbsp;</div>
          <div className={s.contBtn}>
            <Button type="primary" danger>
              Удалить
            </Button>
            <Button type="primary" style={{ marginLeft: "20px" }}>
              Сохранить изменения
            </Button>
          </div>
        </div>
        <div className={s.div3}>
          <div className={s.header}>Группа</div>
          <Select placeholder="Номер" style={{ width: "100%" }}>
            <Option value="tech">Техническая</Option>
          </Select>
        </div>
        <div className={s.div4}></div>
        <div className={s.div5 + " " + s.flexCont}>
          <div className={s.header}>Понедельник:</div>
          <Space className={s.flexSub1}>
            <Button danger className={s.btn} icon="X" />
            <Input className={s.inputTime} placeholder="С" />
            <div>-</div>
            <Input className={s.inputTime} placeholder="До" />
          </Space>
        </div>
        <div className={s.div6 + " " + s.flexCont}>
          <div className={s.header}>Вторник:</div>
          <Space className={s.flexSub1}>
            <Button danger className={s.btn} icon="X" />
            <Input className={s.inputTime} placeholder="С" />
            <div>-</div>
            <Input className={s.inputTime} placeholder="До" />
          </Space>
        </div>
        <div className={s.div7 + " " + s.flexCont}>
          <div className={s.header}>Среда:</div>
          <Space className={s.flexSub1}>
            <Button danger className={s.btn} icon="X" />

            <Input className={s.inputTime} placeholder="С" />
            <div>-</div>
            <Input className={s.inputTime} placeholder="До" />
          </Space>
        </div>
        <div className={s.div8 + " " + s.flexCont}>
          <div className={s.header}>Четверг:</div>
          <Space className={s.flexSub1}>
            <Button danger className={s.btn} icon="X" />
            <Input className={s.inputTime} placeholder="С" />
            <div>-</div>
            <Input className={s.inputTime} placeholder="До" />
          </Space>
        </div>
        <div className={s.div9 + " " + s.flexCont}>
          <div className={s.header}>Пятница:</div>
          <Space className={s.flexSub1}>
            <Button danger className={s.btn} icon="X" />
            <Input className={s.inputTime} placeholder="С" />
            <div>-</div>
            <Input className={s.inputTime} placeholder="До" />
          </Space>
        </div>
        <div className={s.div10 + " " + s.flexCont}>
          <div className={s.header}>Суббота:</div>
          <Space className={s.flexSub1}>
            <Button danger className={s.btn} icon="X" />
            <Input className={s.inputTime} placeholder="С" />
            <div>-</div>
            <Input className={s.inputTime} placeholder="До" />
          </Space>
        </div>
        <div className={s.div11 + " " + s.flexCont}>
          <div className={s.header}>Воскресенье:</div>
          <Space className={s.flexSub1}>
            <Button danger className={s.btn} icon="X" />
            <Input className={s.inputTime} placeholder="С" />
            <div>-</div>
            <Input className={s.inputTime} placeholder="До" />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default SelectTimeTable;
