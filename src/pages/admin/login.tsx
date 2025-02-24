import { Form, Input, Button, notification } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: { username: string; password: string }) => {
    try {
      setLoading(true);
      const response = await axios.post(import.meta.env.VITE_AUTH_API + '/login', values);
      
      // Store the JWT token
      localStorage.setItem('adminToken', response.data.token);
      
      notification.success({
        message: 'Đăng nhập thành công',
        description: 'Chào mừng quay trở lại!',
      });

      navigate('/admin/orders');
    } catch (error: any) {
      notification.error({
        message: 'Đăng nhập thất bại',
        description: error.response.data.message || 'Tên đăng nhập hoặc mật khẩu không đúng',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-red-500">Admin Login</h1>
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
              danger
              block
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin; 