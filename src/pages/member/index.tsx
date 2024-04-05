import type { FC } from "react";
import { Space, Tabs } from "antd";
import Search from "@/pages/member/search";
import Upload from "@/pages/member/upload";

const Member: FC = () => {
  return (
    <Space>
      <Tabs
        items={[
          {
            key: "1",
            label: "등록자 검색",
            children: <Search />,
          },
          {
            key: "2",
            label: "등록자 명단 업로드",
            children: <Upload />,
          },
        ]}
        defaultActiveKey="1"
      />
    </Space>
  );
};

export default Member;
