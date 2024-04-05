import useUserStore from "@/hooks/store/useUserStore";
import {
  Layout,
  Form,
  FormProps,
  Input,
  Checkbox,
  Button,
  Typography,
  Space,
} from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import module from "./index.module.css";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const SignIn: FC = () => {
  const navigate = useNavigate();
  const setIsSignIn = useUserStore(({ setIsSignIn }) => setIsSignIn);

  const onFinish: FormProps<FieldType>["onFinish"] = () => {
    setIsSignIn(true);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout className={module.layout}>
      <Typography.Title>쎄미나 어드민</Typography.Title>
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              로그인
            </Button>
            <Button type="default" onClick={() => navigate("/signUp")}>
              회원가입
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SignIn;
