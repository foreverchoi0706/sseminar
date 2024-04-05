import { FC, useState } from "react";
import { Button, Layout, Menu, Select, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import module from "./index.module.css";
import { SIGN_IN_ROUTES } from "@/utils/constants";
import SignIn from "@/pages/signIn";
import useUserStore from "@/hooks/store/useUserStore.ts";
import SignUp from "./pages/signUp";

const App: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isSignIn, setIsSignIn } = useUserStore(
    ({ isSignIn, setIsSignIn }) => ({
      isSignIn,
      setIsSignIn,
    })
  );
  const [selectedKey, setSelectedKey] = useState<string>(
    SIGN_IN_ROUTES.find(({ path }) => path === pathname)?.key ?? "0"
  );
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  if (isSignIn) {
    return (
      <Layout className={module.layout}>
        <Layout.Sider trigger={null} collapsible collapsed={isCollapsed}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
            items={SIGN_IN_ROUTES.map(({ key, Icon, label }) => ({
              key,
              icon: <Icon />,
              label,
            }))}
            onSelect={({ key }) => {
              const route = SIGN_IN_ROUTES.at(+key);
              if (route) {
                setSelectedKey(route.key);
                navigate(route.path);
              }
            }}
          />
        </Layout.Sider>
        <Layout>
          <Layout.Header className={module.header}>
            <Space size="large">
              <Button
                type="text"
                icon={
                  isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                }
                onClick={() => setIsCollapsed(!isCollapsed)}
              />
              <Select defaultValue="1">
                <Select.Option value="1">Sample</Select.Option>
                <Select.Option value="2">Sample</Select.Option>
                <Select.Option value="3">Sample</Select.Option>
                <Select.Option value="4">Sample</Select.Option>
              </Select>
            </Space>
            <Button
              type="text"
              icon={<LogoutOutlined />}
              onClick={() => setIsSignIn(false)}
            />
          </Layout.Header>
          <Layout.Content className={module.content}>
            <Routes>
              {SIGN_IN_ROUTES.map(({ Page, path }, index) => (
                <Route key={index} element={<Page />} path={path} />
              ))}
              <Route
                path="*"
                element={<Navigate replace to={SIGN_IN_ROUTES[0].path} />}
              />
            </Routes>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
  return (
    <Routes>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="*" element={<Navigate replace to="/signIn" />} />
    </Routes>
  );
};

export default App;
