import Member from "@/pages/member";
import Overview from "@/pages/overview";

export const ACCESS_TOKEN = "ACCESS_TOKEN" as const;

export const SAVE_ID = "SAVE_ID" as const;

export const SIGN_ROUTES = [
  {
    Element: Overview,
    path: "/overview",
    name: "개요",
  },
  {
    Element: Member,
    path: "/member",
    name: "등록자 관리",
  },
];
