import {Form, Input, Checkbox, Button, message} from "antd";
import './index.css'
import {useNavigate} from 'react-router-dom'
import {useEffect} from "react";


const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish = (values: any) => {
        //点击了登录按钮
        console.log('Success:', values);
        //如果账号密码正确，则跳转到首页
        if(values.username=='admin'&&values.password=='123456'){
            navigate('/contentPage/homePage')
            message.success('恭喜~登录成功!');
        }else{
            message.error('账号或密码错误，请重试！');
        }


    };

    return (
        <div className="all-box">
            <div className="login-form">
                <Form
                    name="basic"
                    labelCol={{span: 4}}
                    wrapperCol={{span: 18}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: false,username:'admin',password:'123456'}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="账号"
                        name="username"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="密码"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{offset: 4, span: 18}}
                    >
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item style={{width:'100%'}}>
                        <div className="twoBtns">

                            <Button className="login-btn" type="primary" htmlType="submit">立即登录</Button>
                            <div className="right-register">
                                <span>还没有账号？</span>
                                <span className="register-style" onClick={() => {
                                    window.location.href = "#/register"
                                }}>去注册</span>
                            </div>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Login
