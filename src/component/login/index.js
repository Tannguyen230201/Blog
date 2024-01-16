import React, { Fragment, useState } from "react";
import { LockOutlined, UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { LoginAPI } from "../../api";
import { toast } from "react-toastify";

const Login = () => {
  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
  };
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = {
    user: {
      email: email,
      password: password,
    },
  };
  const isLoading = useSelector((state) => state.login.isLoading);
  const navigation = useNavigate();
  const handleLogin = async () => {
    dispatch(LoginAPI(user)).then((e) => {
      if (e.payload?.user) {
        navigation("/home");
        localStorage.setItem("token", e.payload.user.token);
        localStorage.setItem("user", JSON.stringify(e.payload.user));
      } else {
        toast.error("Tài khoản không chính xác");
      }
    });
  };
  return (
    <Fragment>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{ maxWidth: "500px", padding: "80px 30px", margin: "auto" }}
      >
        <h3 style={{ textAlign: "center" }}>ĐĂNG NHẬP</h3>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleLogin}
            disabled={email && password ? false : true}
            style={{ marginRight: "3px" }}
          >
            {isLoading ? <LoadingOutlined /> : ""} 
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    </Fragment>
  );
};
export default Login;
