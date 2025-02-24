import { Layout, Button, Space } from 'antd';
import { LogoutOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Header } = Layout;

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.post(import.meta.env.VITE_AUTH_API + '/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      localStorage.removeItem('adminToken');
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // Force logout anyway
      localStorage.removeItem('adminToken');
      navigate('/admin/login');
    }
  };

  return (
    <Header className="bg-white shadow-md px-6 flex justify-end items-center">
      <Space>
        <Button 
          icon={<HomeOutlined />}
          onClick={() => navigate('/')}
        >
          Trang chủ
        </Button>
        <Button 
          type="primary" 
          danger 
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        >
          Đăng xuất
        </Button>
      </Space>
    </Header>
  );
};

export default AdminHeader; 