import {
  Form,
  Button,
  Input,
  Space,
  Modal,
  DatePicker,
  InputNumber,
  message,
  Upload,
} from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

import {
  SettingOutlined,
  UploadOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

import { Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Avatar from "antd/lib/avatar/avatar";
import { saveAs } from "file-saver";
import { st } from "../../../../firebase";

import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";

const { Option } = Select;

function NewPatterns(props) {
  const [form] = Form.useForm();

  const [fileData, setFileData] = useState();
  const [statusFile, setStatusFile] = useState(false);

  let onFinish = (data) => {
    debugger;
    if (fileData) {
      props.setDataNewPattern({
        key: "",
        label: data.label,
        type: data.type,
        url: "https://fsd.csd",
        urlStorage: "docs.docx",
      });
    }
  };

  const onFinishFailed = () => {
    message.error("Не все поля заполнены");
  };

  const normFile = (e) => {
    debugger;
    st.ref()
      .child("patterns/" + e.file.originFileObj.name)
      .put(e.file.originFileObj)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      })
      .then((url) => {
        setFileData(url);
        console.log(url);
        setStatusFile(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const download = () => {
    let ref = st.ref();
    ref
      .child("1596833.jpg") // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      .getDownloadURL()
      .then((url) => {
        /*    debugger
        var data = new Blob([url], {
            type: "image/jpeg",
          }),
          csvURL = window.URL.createObjectURL(data),
          tempLink = document.createElement("a");
        tempLink.href = csvURL;
        tempLink.setAttribute("download", "new.jpg");
        tempLink.click(); */

        /*  let link = document.createElement("a");
        if (link.download !== undefined) {
          link.setAttribute("href", url);
          link.setAttribute("target", "_blank");
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } */

        fetch(url).then((response) => {
          response.blob().then((blob) => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;

            a.download = "testName.jpg"; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            a.click();
          });
        });
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  const [fileList, updateFileList] = useState([]);
  const propss = {
    fileList,
    beforeUpload: (file) => {
      if (file.type !== "image/png") {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === "image/png";
    },
    onChange: (info) => {
      console.log(info.fileList);
      // file.status is empty when beforeUpload return false
      updateFileList(info.fileList.filter((file) => !!file.status));
    },
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
            <div className={s.header}>Договор</div>
            <Form.Item noStyle={true} name="type" rules={[{ required: true }]}>
              <Input placeholder="Договор заключения услуг" />
            </Form.Item>
          </div>
          <div className={s.div4}>
            <div className={s.header}>&nbsp;</div>
            <div className={s.contBtn}>
              <Button
                type="primary"
                danger
                className={s.fileBtn + " " + `${statusFile && s.successFile}`}
                style={{ marginRight: "20px" }}
                icon={statusFile ? <CheckOutlined /> : <CloseOutlined />}
              >
                Файл
              </Button>
              <Button type="primary" onClick={download}>
                Скачать
              </Button>

              <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle="true"
              >
                <Upload {...propss} name="logo" showUploadList={false}>
                  <Button type="primary" style={{ marginLeft: "20px" }}>
                    Загрузить
                  </Button>
                </Upload>
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default NewPatterns;
