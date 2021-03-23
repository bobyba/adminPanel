import { Button, Input, Space, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined, DownloadOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";

const { Option } = Select;

function NewContracts(props) {
  return (
    <div className={s.contCard}>
      <div className={s.parent}>
        <div className={s.div1}>
          <div className={s.headerUl}>ФИО ребёнка</div>
          <Input placeholder="ФИО" />
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
          <div className={s.header}>Дата рождения</div>
          <Input placeholder="00.00.0000" style={{ width: "80%" }} />
        </div>
        <div className={s.div4}>
          <div className={s.header}>Номер СНИЛС</div>
          <Input placeholder="000-000-000-00" style={{ width: "80%" }} />
        </div>
        <div className={s.div5}>
          <div className={s.header}>Документ</div>
          <Input placeholder="Описание" style={{ width: "80%" }} />
        </div>
        <div className={s.div6}>
          <div className={s.header}>Серия и номер</div>
          <div className={s.contInput}>
            <Input
              placeholder="0000"
              style={{
                width: "50%",
                textAlign: "center",
                marginRight: "20px",
              }}
            />
            <Input
              placeholder="000-000"
              style={{ width: "50%", textAlign: "center" }}
            />
          </div>
        </div>
        <div className={s.div7}>
          <div className={s.header}>Телефон</div>
          <Input placeholder="Возраст" style={{ width: "80%" }} />
        </div>
        <div className={s.div8}>
          <div className={s.header}>Email</div>
          <Input placeholder="9999" style={{ width: "80%" }} />
        </div>
        <div className={s.div9}>
          <div className={s.headerUl}>ФИО родителя</div>
          <Input placeholder="1 сентября" style={{ width: "80%" }} />
        </div>
        <div className={s.div10}>
          <div className={s.header}>Телефон</div>
          <Input placeholder="Телефон" style={{ width: "80%" }} />
        </div>
        <div className={s.div11}>
          <div className={s.header}>Серия и номер</div>
          <div className={s.contInput}>
            <Input
              placeholder="0000"
              style={{
                width: "50%",
                textAlign: "center",
                marginRight: "20px",
              }}
            />
            <Input
              placeholder="000-000"
              style={{ width: "50%", textAlign: "center" }}
            />
          </div>
        </div>
        <div className={s.div12}>
          <div className={s.header}>Email</div>
          <Input placeholder="Возраст" style={{ width: "80%" }} />
        </div>
        <div className={s.div13}>
          <div className={s.headerUl}>Договор</div>
          <Input placeholder="Возраст" style={{ width: "80%" }} />
        </div>
        <div className={s.div14}>
          <div className={s.headerLast}>&nbsp;</div>
          <Button type="link" className={s.link} icon={<DownloadOutlined />}>
            Скачать договор
          </Button>
        </div>
        <div className={s.div15}>
          <div className={s.header}>Программа</div>
          <Input placeholder="Наименование" style={{ width: "80%" }} />
        </div>
        <div className={s.div16}>
          <div className={s.header}>Группа</div>
          <Input placeholder="Наименование" style={{ width: "80%" }} />
        </div>
        <div className={s.div17}>
          <div className={s.header}>Оплачено</div>
          <Input placeholder="Срок" style={{ width: "80%" }} />
        </div>
        <div className={s.div18}>
          <div className={s.headerLast}>&nbsp;</div>
          <Button type="link" className={s.link} icon={<DownloadOutlined />}>
            Скачать платёж
          </Button>
        </div>
        <div className={s.div19}>
          <div className={s.header}>Дата платежа</div>
          <Input placeholder="Дата" style={{ width: "80%" }} />
        </div>
        <div className={s.div20}>
          <div className={s.header}>Дата начала занятий</div>
          <Input placeholder="Дата" style={{ width: "80%" }} />
        </div>
      </div>
    </div>
  );
}

export default NewContracts;
