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
import { ACCESS_TOKEN, SIGN_IN_ROUTES } from "@/utils/constants";
import SignIn from "@/pages/signIn";
import SignUp from "@/pages/signUp";
import useFetch from "@/hooks/useFetch";
import { getAuth, getSeminars } from "@/utils/apis";
import { hasCookie } from "@/utils/cookie";
import useAuth from "@/hooks/useAuth";
import useStore from "@/hooks/useStore";

const Main: FC = () => {
  const { signOut } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState<string>(
    SIGN_IN_ROUTES.find(({ path }) => path === pathname)?.key ?? "0"
  );
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const setSeminarId = useStore(({ setSeminarId }) => setSeminarId);
  const { data: seminars = [] } = useFetch(getSeminars);

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
              icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
            <Select
              placeholder="세미나 선택"
              onSelect={(seminarId) => setSeminarId(seminarId)}
            >
              {seminars.map(({ seminarId, seminarName }) => (
                <Select.Option key={seminarId} value={seminarId}>
                  {seminarName}
                </Select.Option>
              ))}
            </Select>
          </Space>
          <Button type="text" icon={<LogoutOutlined />} onClick={signOut} />
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
};

const App: FC = () => {
  const { isSignIn, setIsSignIn } = useStore(({ isSignIn, setIsSignIn }) => ({
    isSignIn,
    setIsSignIn,
  }));

  const { isLoading } = useFetch(getAuth, {
    disabled: !hasCookie(ACCESS_TOKEN),
    onSuccess: setIsSignIn,
  });

  if (isLoading) return null;

  if (isSignIn) return <Main />;
  return (
    <Routes>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="*" element={<Navigate replace to="/signIn" />} />
    </Routes>
  );
};

export default App;
