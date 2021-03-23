import { Header } from "antd/lib/layout/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBack from "../../utils/Table";
import ListRender from "../../utils/ListRender";

import { Form, Input, InputNumber, Button } from "antd";

import s from "./index.module.css";

const PersonalForm = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };

  let form2 = !props.selectedUserData.snils && s.form2;

  return (
    <>
      <HeaderBack
        setStep={props.setStep}
        name="Личные данные"
        step="personal-data"
      />
      <Form
        className={s.form + " " + form2}
        onFinish={onFinish}
        initialValues={props.selectedUserData}
      >
        <Form.Item
          className={s.fio}
          name="fio"
          label={<div className={s.label}>ФИО ребёнка</div>}
        >
          <Input className={s.InputFio} />
        </Form.Item>

        <div className={s.formSub}>
          {props.selectedUserData.snils && (
            <>
              <Form.Item
                name="birthday"
                label={<div className={s.label}>Дата рождения</div>}
                className={s.InputCont}
                rules={[{ type: "email" }]}
              >
                <Input className={s.Input} />
              </Form.Item>
              <Form.Item
                name="snils"
                label={<div className={s.label}>Номер СНИЛС</div>}
                className={s.InputCont}
              >
                <InputNumber className={s.Input} />
              </Form.Item>
              <Form.Item
                name="typeDocument"
                label={<div className={s.label}>Документ</div>}
                className={s.InputCont}
              >
                <Input className={s.Input} />
              </Form.Item>
            </>
          )}
          <Form.Item
            name="passportId"
            label={<div className={s.label}>Серия и номер</div>}
            className={s.InputCont}
          >
            <div className={s.passCont}>
              <Input
                defaultValue={props.selectedUserData.id1part}
                className={s.InputPass}
              />
              <Input
                defaultValue={props.selectedUserData.id2part}
                className={s.InputPass}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label={<div className={s.label}>Телефон</div>}
            className={s.InputCont}
          >
            <Input className={s.Input} />
          </Form.Item>
          <Form.Item
            name="email"
            className={s.InputCont}
            label={<div className={s.label}>Email</div>}
          >
            <Input className={s.Input} />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default PersonalForm;
