import { Button, Space, Table } from "antd";
import type { FC } from "react";
import module from "./index.module.css";

interface DataType {}
const dataSource: DataType[] = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "등록자명단",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "업로드",
    dataIndex: "age",
    key: "age",
  },
];
const Upload: FC = () => {
  return (
    <Space direction="vertical" className={module.space}>
      <Table dataSource={dataSource} pagination={false} columns={columns} />
      <Space>
        <Button type="primary">업로드</Button>
        <Button>취소</Button>
      </Space>
    </Space>
  );
};
export default Upload;
