import { Button, Input, Space, Table } from "antd";
import React from "react";
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
import Avatar from "antd/lib/avatar/avatar";

const { Option } = Select;

function SelectPatterns(props) {
  return (
    <div className={s.contCard}>
      <div className={s.parent}>
        <div className={s.div1}>
          <div className={s.header}>Наименование</div>
          <Input placeholder="Наименование" />
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
          <div className={s.header}>Договор</div>
          <Input placeholder="Договор заключения услуг" />
        </div>
        <div className={s.div4}>
          <div className={s.header}>&nbsp;</div>
          <div className={s.contBtn}>
            <Button
              type="primary"
              danger
              className={s.fileBtn}
              style={{ marginRight: "20px" }}
              icon={<CloseOutlined />}
            >
              Файл
            </Button>
            <Button type="primary">Скачать</Button>
            <Button type="primary" style={{ marginLeft: "20px" }}>
              Загрузить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPatterns;
