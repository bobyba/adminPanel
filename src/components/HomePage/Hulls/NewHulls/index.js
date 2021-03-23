import { Button, Input, Space, Table, Form, message } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Avatar from "antd/lib/avatar/avatar";

const { Option } = Select;

function NewHulls(props) {
  const [form] = Form.useForm();

  let onFinish = (data) => {
    props.setDataNewHull({
      ...data,
    });

    props.closeSettingCard();

    message.info("Корпус добавлен");
  };

  const onFinishFailed = () => {
    message.error("Не все поля заполнены");
  };
  return (
    <Form form={form} onFinishFailed={onFinishFailed} onFinish={onFinish}>
      <div className={s.contCard}>
        <div className={s.parent}>
          <div className={s.div1}>
            <div className={s.header}>Наименование</div>
            <Form.Item noStyle={true} name="label" rules={[{ required: true }]}>
              <Input placeholder="Наименование" />
            </Form.Item>
          </div>
          <div className={s.div2}>
            <div className={s.header}>&nbsp;</div>
            <div className={s.contBtn}>
              <Button type="primary" danger>
                Удалить
              </Button>
              <Form.Item noStyle={true}>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ marginLeft: "20px" }}
                >
                  Сохранить изменения
                </Button>
              </Form.Item>
            </div>
          </div>
          <div className={s.div3}>
            <div className={s.header}>Местоположение</div>
            <Form.Item
              noStyle={true}
              name="address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Адрес" />
            </Form.Item>
          </div>
          <div className={s.div4}>
            <div className={s.header}>Контактный номер</div>
            <Form.Item noStyle={true} name="phone" rules={[{ required: true }]}>
              <Input placeholder="Номер телефона" />
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default NewHulls;
