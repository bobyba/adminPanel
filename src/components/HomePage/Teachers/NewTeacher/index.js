import { Button, Input, message, Space, Table, Form } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import { SettingOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Avatar from "antd/lib/avatar/avatar";
import TextArea from "antd/lib/input/TextArea";

const { Option } = Select;

function NewTeacher(props) {
  const [form] = Form.useForm();

  let onFinish = (data) => {
    props.setDataNewTeacher({
      ...data,
    });

    props.closeSettingCard();

    message.info("Преподаватель добавлен");
  };

  const onFinishFailed = () => {
    message.error("Не все поля заполнены");
  };

  return (
    <Form form={form} onFinishFailed={onFinishFailed} onFinish={onFinish}>
      <div className={s.contCard}>
        <div className={s.parent}>
          <div className={s.div1}>
            <div className={s.header}>ФИО</div>
            <Form.Item noStyle={true} name="label" rules={[{ required: true }]}>
              <Input placeholder="" />
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
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: "20px" }}
                >
                  Сохранить изменения
                </Button>
              </Form.Item>
            </div>
          </div>
          <div className={s.div3}>
            <div className={s.header}>Номер телефона</div>
            <Form.Item noStyle={true} name="phone" rules={[{ required: true }]}>
              <Input placeholder="+71234567890" />
            </Form.Item>
          </div>
          <div className={s.div4}>
            <div className={s.header}>Ссылка на фото</div>
            <Input placeholder="" />
          </div>
          <div className={s.div5}>
            <div className={s.header}>Информация о преподавателе</div>
            <Form.Item
              noStyle={true}
              name="description"
              rules={[{ required: true }]}
            >
              <TextArea rows={4} className={s.descrip} placeholder="" />
            </Form.Item>
          </div>
          <div className={s.div6}>
            <div className={s.contAva}>
              <Avatar className={s.Avatar} />
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default NewTeacher;
