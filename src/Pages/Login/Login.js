import React from 'react';
// import './App.css';
import { Row, Col, Card, Form, Input, Button, Checkbox   } from 'antd';
import { Link } from 'react-router-dom'
function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <Row >  
        <Col span={24}>
            <Card>
                <Row>
                    <h1> Student Management System</h1>
                    <Col span={6}>
                    <Link to="/"> Login </Link>
                        <Link to="/dashboard"> Dashboard </Link>
                        <Link to="/list"> List </Link>
                        <Link to="/form"> Form </Link>
                    </Col>

              </Row>

            </Card>
        </Col>
        <Col span ={24} style={{margin:'15px'}}>
        <Form 
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item 
         
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset:6,
          span: 16,
        }}
      >
        {/* <Button type="primary" htmlType="submit">
          Submit
        </Button> */}
        <Link to='/dashboard'> Submit</Link>
      </Form.Item>
    </Form>
        </Col>
    </Row>
  );
}

export default Login;