import {
  Form,
  Button,
  Input,
  Space,
  Modal,
  DatePicker,
  InputNumber,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import moment from "moment";

import { SettingOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";

import SearchTable from "../../../utils/Table/index";
import ModalTeacherTable from "../../../utils/ModalTeacherTable";
import ModalHullsTable from "../../../utils/ModalHullsTable";

import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import TextArea from "antd/lib/input/TextArea";

const { Option } = Select;

function SelectProgram(props) {
  const [form] = Form.useForm();

  /* Преподаватели настройка */

  const [isModalTeacherVisible, setIsModalTeacherVisible] = useState(false);

  const [teacherData, setTeacherData] = useState([]);

  /* --------------- */

  /* Корпус настройка */

  const [isModalHullVisible, setIsModalHullVisible] = useState(false);

  const [hullsData, setHullsData] = useState([]);

  /* ----------- */

  let onFinish = (data) => {
    let item = "";

    if (hullsData.length > 0 && teacherData.length > 0) {
      switch (data.categoriesEN) {
        case "tech":
          item = "Техническая";
          break;
        case "art":
          item = "Художественная";
          break;
        case "social":
          item = "Социально-педагогическая";
          break;
        case "sport":
          item = "Физкультурно-спортивная";
          break;
        case "science":
          item = "Естественнонаучная";
          break;
        case "tourist":
          item = "Краеведческая";
          break;
        default:
          break;
      }
      props.setDataNewProgram(
        {
          ...data,
          dateEnd: data.dateEnd.format("DD-MM-YY"),
          dateStart: data.dateStart.format("DD-MM-YY"),
          teachersData: teacherData,
          hullsData: hullsData,
          categories: item,
          ageFull: data.age1 + "-" + data.age2,
        },
        data.categoriesEN
      );

      form.setFieldsValue({
        age1: "",
        age2: "",
        ageFull: "",
        categories: "",
        categoriesEN: "",
        dateEnd: undefined,
        dateStart: undefined,
        description: "",
        documentLink: "",
        duration: "",
        id: "",
        label: "",
        levelProgram: "",
        location: "",
        price: "",
        quantityHours: "",
        quantityPlace: "",
      });
      message.info("Создана новая программа");

      props.closeSettingCard();
    } else {
      message.error("Не все поля заполнены");
    }
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
              <Input placeholder="Наименование направленности" />
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
            <div className={s.header}>Описание</div>
            <Form.Item
              rules={[{ required: true }]}
              noStyle={true}
              name="description"
            >
              <TextArea rows={2} placeholder="Описание" />
            </Form.Item>
          </div>

          <div className={s.div4}>
            <div className={s.header}>Направленность</div>
            <Form.Item
              rules={[{ required: true }]}
              noStyle={true}
              name="categoriesEN"
            >
              <Select placeholder="Направленность" style={{ width: "80%" }}>
                <Option value="tech">Техническая</Option>
                <Option value="art">Художественная</Option>
                <Option value="social">Социально-педагогическая</Option>
                <Option value="sport">Физкультурно-спортивная</Option>
                <Option value="science">Естественнонаучная</Option>
                <Option value="tourist">Краеведческая</Option>
              </Select>
            </Form.Item>
          </div>
          <div className={s.div5}>
            <div className={s.header}>Кол-во мест</div>
            <Form.Item
              rules={[{ required: true }]}
              noStyle={true}
              name="quantityPlace"
            >
              <InputNumber placeholder="Кол-во мест" style={{ width: "80%" }} />
            </Form.Item>
          </div>
          <div className={s.div6}>
            <div className={s.header}>Возраст</div>
            <Space>
              <div>C</div>
              <Form.Item
                rules={[{ required: true }]}
                noStyle={true}
                name="age1"
              >
                <Select
                  placeholder="Направленность"
                  style={{
                    width: "100px",
                    marginRight: "20px",
                    textAlign: "center",
                  }}
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                  <Option value="9">9</Option>
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                  <Option value="13">13</Option>
                  <Option value="14">14</Option>
                  <Option value="15">15</Option>
                  <Option value="16">16</Option>
                  <Option value="17">17</Option>
                  <Option value="18">18</Option>
                </Select>
              </Form.Item>
              <div>До</div>
              <Form.Item
                rules={[{ required: true }]}
                noStyle={true}
                name="age2"
              >
                <Select
                  placeholder="Направленность"
                  style={{
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                  <Option value="9">9</Option>
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                  <Option value="13">13</Option>
                  <Option value="14">14</Option>
                  <Option value="15">15</Option>
                  <Option value="16">16</Option>
                  <Option value="17">17</Option>
                  <Option value="18">18</Option>
                </Select>
              </Form.Item>
            </Space>
          </div>
          <div className={s.div7}>
            <div>
              <div className={s.header}>Кол-во часов</div>
              <Form.Item
                rules={[{ required: true }]}
                noStyle={true}
                name="quantityHours"
              >
                <InputNumber
                  placeholder="99"
                  style={{ width: "90%", textAlign: "center" }}
                />
              </Form.Item>
            </div>
            <div>
              <div className={s.header}>Занятий в неделю</div>
              <Form.Item
                rules={[{ required: true }]}
                noStyle={true}
                name="duration"
              >
                <InputNumber
                  placeholder="99"
                  style={{ width: "100%", textAlign: "center" }}
                />
              </Form.Item>
            </div>
          </div>
          <div className={s.div8}>
            <div className={s.header}>Стоимость</div>
            <Form.Item rules={[{ required: true }]} noStyle={true} name="price">
              <InputNumber
                formatter={(value) => `${value}.00`}
                parser={(value) => value.replace(".00", "")}
                placeholder="9999"
                style={{ width: "80%" }}
              />
            </Form.Item>
          </div>
          <div className={s.div9}>
            <div className={s.header}>Дата начала</div>
            <Form.Item
              rules={[{ required: true }]}
              noStyle={true}
              name="dateStart"
            >
              <DatePicker
                locale={locale}
                format={"DD-MM-YYYY"}
                style={{ width: "80%" }}
              />
            </Form.Item>
          </div>
          <div className={s.div10}>
            <div className={s.header}>Продолжительность часа</div>

            <InputNumber placeholder="45" style={{ width: "80%" }} />
          </div>
          <div className={s.div11}>
            <div className={s.header}>Ссылка на документацию</div>
            <Form.Item
              rules={[{ required: true }]}
              noStyle={true}
              name="documentLink"
            >
              <Input placeholder="Ссылка" style={{ width: "80%" }} />
            </Form.Item>
          </div>
          <div className={s.div12}>
            {/* <div className={s.header}>Корпус</div>
            <Form.Item noStyle={true} name="location">
              <Select placeholder="Корпус" style={{ width: "80%" }}>
                <Option value="Спортзал">Спортзал</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="ЦДТ">ЦДТ</Option>
                <Option value="672">672</Option>
              </Select>
            </Form.Item> */}
            <div className={s.header}>Корпус</div>

            <Space size="middle">
              <div
                className={s.extraHull}
                onClick={() => {
                  setIsModalHullVisible(true);
                }}
              >
                Настройка корпусов
              </div>
              <SettingOutlined
                onClick={() => {
                  setIsModalHullVisible(true);
                }}
                style={{ color: "blue", fontSize: "20px" }}
              />

              <ModalHullsTable
                isModalVisible={isModalHullVisible}
                setModalVisible={setIsModalHullVisible}
                setHulls={setHullsData}
                setStep={props.setStep}
                dataSourceAll={props.hullsData}
              />
            </Space>
          </div>
          <div className={s.div13}>
            <div className={s.header}>Уровень программы</div>
            <Form.Item
              rules={[{ required: true }]}
              noStyle={true}
              name="levelProgram"
            >
              <Select style={{ width: "80%" }}>
                {/*  КАКой-то баг */}
                <Option value="Подготовительная">Подготовительная</Option>
                <Option value="Базовая">Базовая</Option>
              </Select>
            </Form.Item>
          </div>
          <div className={s.div14}>
            <div className={s.header}>Период обучения</div>
            <Space>
              <div>C</div>
              <Form.Item
                rules={[{ required: true }]}
                noStyle={true}
                name="dateStart"
              >
                <DatePicker
                  locale={locale}
                  format={"DD-MM-YY"}
                  style={{
                    width: "100px",
                    marginRight: "20px",
                    textAlign: "center",
                  }}
                />
              </Form.Item>
              <div>До</div>
              <Form.Item
                rules={[{ required: true }]}
                noStyle={true}
                name="dateEnd"
              >
                <DatePicker
                  locale={locale}
                  format={"DD-MM-YY"}
                  style={{
                    width: "100px",
                    textAlign: "center",
                  }}
                />
              </Form.Item>
            </Space>
          </div>
          <div className={s.div15}>
            <div className={s.header}>Преподаватель</div>

            <Space size="middle">
              <div
                className={s.extraTeacher}
                onClick={() => {
                  setIsModalTeacherVisible(true);
                }}
              >
                Настройка преподавателей
              </div>
              <SettingOutlined
                onClick={() => {
                  setIsModalTeacherVisible(true);
                }}
                style={{ color: "blue", fontSize: "20px" }}
              />
              <ModalTeacherTable
                isModalVisible={isModalTeacherVisible}
                setModalVisible={setIsModalTeacherVisible}
                /*  */
                setTeacher={setTeacherData}
                setStep={props.setStep}
                dataSourceAll={props.teachersData}
              />
            </Space>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default SelectProgram;
