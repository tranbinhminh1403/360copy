import { useEffect, useState } from 'react';
import { Table, notification } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const fetchOrders = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_ORDERS_API, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOrders(response.data);
      } catch (error) {
        notification.error({
          message: 'Error',
          description: 'Failed to fetch orders',
        });
        if (error.response?.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  const columns = [
    {
      title: 'Order Reference',
      dataIndex: 'orderReference',
      key: 'orderReference',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Orders Management</h1>
      <Table 
        dataSource={orders} 
        columns={columns} 
        loading={loading}
        rowKey="orderReference"
      />
    </div>
  );
};

export default OrdersPage; 