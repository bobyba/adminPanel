import { Button, Input, Space, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined } from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Avatar from "antd/lib/avatar/avatar";

const { Option } = Select;

function NewGroups(props) {
  return (
    <div className={s.contCard}>
      <div className={s.parent}>
        <div className={s.div1}>
          <div className={s.header}>Программа</div>
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
          <div>
            <div className={s.header}>Группа</div>
            <Input
              placeholder="99"
              style={{ width: "90%", textAlign: "center" }}
            />
          </div>
          <div>
            <div className={s.header}>Кол-во студентов</div>
            <Input
              placeholder="99"
              style={{ width: "100%", textAlign: "center" }}
            />
          </div>
        </div>
        <div className={s.div4}>
          <div className={s.header}>Преподаватель</div>
          <div style={{ textAlign: "center" }}>
            <div className={s.teacherName}>Чернова Светлана Викторовна</div>
          </div>
        </div>
        <div className={s.div5}>
          <div className={s.header}>Сформирована</div>
          <Input placeholder="Дата" />
        </div>
        <div className={s.div6}>
          <div className={s.header}>Корпус</div>
          <Input placeholder="" />
        </div>
        <div className={s.div7}>
          <div className={s.headerLast}>&nbsp;</div>
          <Button type="link" className={s.link} icon={<DownloadOutlined />}>
            Скачать отчёт 1С
          </Button>
        </div>
        <div className={s.div8}>
          <div className={s.headerLast}>&nbsp;</div>
          <Button type="link" className={s.link} icon={<DownloadOutlined />}>
            Скачать отчёт ЕСЗ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewGroups;
