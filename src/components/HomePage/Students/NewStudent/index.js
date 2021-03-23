import { Button, Input, Space, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";

const { Option } = Select;

function NewStudent(props) {
  return (
    <div className={s.contCard}>
      <div className={s.parent}>
        <div className={s.div1}>
          <div className={s.header}>Фамилия</div>
          <Input placeholder="Фамилия" style={{ width: "80%" }} />
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
          <div className={s.header}>Имя</div>
          <Input placeholder="Имя" style={{ width: "80%", height: "34px" }} />
        </div>
        <div className={s.div4}>
          <div className={s.header}>Отчество</div>
          <Input placeholder="Имя" style={{ width: "80%", height: "34px" }} />
        </div>
        <div className={s.div5}>
          <div className={s.header}>Программа</div>
          <Select placeholder="Направленность" style={{ width: "80%" }}>
            <Option value="tech">Техническая</Option>
          </Select>
        </div>
        <div className={s.div6}>
          <div className={s.header}>Группа</div>
          <Input placeholder="Номер" style={{ width: "80%" }} />
        </div>
        <div className={s.div7}>
          <div className={s.header}>Дата рождения</div>
          <Input placeholder="Дата" style={{ width: "80%" }} />
        </div>
        <div className={s.div8}>
          <div className={s.header}>Номер СНИЛС</div>
          <Input placeholder="Номер" style={{ width: "80%" }} />
        </div>
        <div className={s.div9}>
          <div className={s.header}>Документ</div>
          <Input placeholder="Тип" style={{ width: "80%" }} />
        </div>
        <div className={s.div10}>
          <div className={s.header}>Серия и номер</div>
          <div className={s.contBtn}>
            <div>
              <Input
                placeholder="99"
                style={{ width: "90%", textAlign: "center" }}
              />
            </div>
            <div>
              <Input
                placeholder="99"
                style={{ width: "100%", textAlign: "center" }}
              />
            </div>
          </div>
        </div>
        <div className={s.div11}>
          <div className={s.header}>Когда выдан</div>
          <Input placeholder="1 сентября" style={{ width: "80%" }} />
        </div>
        <div className={s.div12}>
          <div className={s.header}>Кем и выдан</div>
          <Input placeholder="45" style={{ width: "80%" }} />
        </div>
        <div className={s.div13}>
          <div className={s.header}>Телефон</div>
          <Input placeholder="Ссылка" style={{ width: "80%" }} />
        </div>
        <div className={s.div14}>
          <div className={s.header}>Email</div>
          <Input placeholder="email" style={{ width: "80%" }} />
        </div>
      </div>
    </div>
  );
}

export default NewStudent;
