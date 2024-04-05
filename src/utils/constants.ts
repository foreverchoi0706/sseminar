import Member from "@/pages/member";
import Overview from "@/pages/overview";
import { ProductFilled, UserOutlined } from "@ant-design/icons";

export const ACCESS_TOKEN = "ACCESS_TOKEN" as const;

export const SAVE_ID = "SAVE_ID" as const;

export const SIGN_IN_ROUTES = [
  {
    key: "0",
    Icon: ProductFilled,
    Page: Overview,
    path: "/overview",
    label: "개요",
  },
  {
    key: "1",
    Icon: UserOutlined,
    Page: Member,
    path: "/member",
    label: "등록자 관리",
  },
];
