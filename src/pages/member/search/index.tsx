import { Space, Table } from "antd";
import type { FC } from "react";
import module from "./index.module.css";
import useStore from "@/hooks/useStore";

const dataSource = [
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
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const Search: FC = () => {
  const seminarId = useStore(({ seminarId }) => seminarId);

  console.log(seminarId);

  return (
    <Space direction="vertical" className={module.space}>
      <Table dataSource={dataSource} pagination={false} columns={columns} />
      <Table
        dataSource={[
          ...dataSource,
          ...dataSource,
          ...dataSource,
          ...dataSource,
          ...dataSource,
          ...dataSource,
        ]}
        pagination={false}
        columns={columns}
      />
    </Space>
  );
};
export default Search;
