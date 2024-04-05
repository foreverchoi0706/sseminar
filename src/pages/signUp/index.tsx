import useStore from "@/hooks/useStore";
import {
  Layout,
  Form,
  FormProps,
  Input,
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

const SignUp: FC = () => {
  const navigate = useNavigate();
  const setIsSignIn = useStore(({ setIsSignIn }) => setIsSignIn);

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
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              회원가입
            </Button>
            <Button type="default" onClick={() => navigate(-1)}>
              뒤로가기
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SignUp;
