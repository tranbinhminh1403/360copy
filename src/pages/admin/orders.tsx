import { useEffect, useState } from 'react';
import { Table, notification, Tag, Card, Row, Col, Statistic, Button, Layout } from 'antd';
import { ShoppingCartOutlined, ClockCircleOutlined, CheckCircleOutlined, DollarOutlined, DownloadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import * as XLSX from 'xlsx';
import AdminFilter, { FilterValues } from '../../components/admin/AdminFilter';
import AdminHeader from '../../components/admin/AdminHeader';

const { Content } = Layout;

interface Order {
  id: string;
  email: string;
  age: number;
  fullName: string;
  gender: string;
  phoneNumber: string;
  note: string;
  title: string;
  period: string;
  price: string;
  order_id: number;
  mrc_order_id: string;
  time: string;
  status: string;
  createdAt: string;
}

interface OrderStats {
  total: number;
  pending: number;
  completed: number;
  totalRevenue: number;
}

const exportToExcel = (orders: Order[]) => {
  const exportData = orders.map(order => ({
    'Mã đơn hàng': order.mrc_order_id,
    'Tên': order.fullName,
    'Email': order.email,
    'Số điện thoại': order.phoneNumber,
    'Tuổi': order.age,
    'Giới tính': order.gender,
    'Gói': order.title,
    'Thời gian': order.period,
    'Giá': order.price,
    'Thời gian hẹn': dayjs(order.time).format('DD/MM/YYYY HH:mm'),
    'Trạng thái': order.status,
    'Ngày tạo': dayjs(order.createdAt).format('DD/MM/YYYY HH:mm'),
    'Ghi chú': order.note
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Orders');
  
  // Generate file name with current date
  const fileName = `orders_${dayjs().format('YYYY-MM-DD')}.xlsx`;
  
  // Save the file
  XLSX.writeFile(workbook, fileName);
};

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<OrderStats>({
    total: 0,
    pending: 0,
    completed: 0,
    totalRevenue: 0,
  });
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
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
        const ordersData = response.data.data || [];
        setOrders(ordersData);
        console.log(ordersData);
        
        // Calculate statistics
        const stats = ordersData.reduce((acc: OrderStats, order: Order) => {
          acc.total += 1;
          if (order.status === 'Pending') acc.pending += 1;
          if (order.status === 'Completed') {
            acc.completed += 1;
            acc.totalRevenue += parseFloat(order.price);
          }
          return acc;
        }, {
          total: 0,
          pending: 0,
          completed: 0,
          totalRevenue: 0,
        });
        
        setStats(stats);
      } catch (error: any) {
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

  useEffect(() => {
    setFilteredOrders(orders);
  }, [orders]);

  const handleFilterChange = (filters: FilterValues) => {
    let result = [...orders];

    if (filters.status) {
      result = result.filter(order => order.status === filters.status);
    }

    if (filters.searchText) {
      const searchLower = filters.searchText.toLowerCase();
      result = result.filter(order => 
        order.fullName.toLowerCase().includes(searchLower)
      );
    }

    if (filters.dateRange) {
      const [start, end] = filters.dateRange;
      result = result.filter(order => {
        const createdAt = dayjs(order.createdAt);
        return createdAt.isAfter(start) && createdAt.isBefore(end);
      });
    }

    setFilteredOrders(result);
  };

  const columns = [
    // {
    //   title: 'Order ID',
    //   dataIndex: 'order_id',
    //   key: 'order_id',
    // },
    {
      title: 'Mã MRC',
      dataIndex: 'mrc_order_id',
      key: 'mrc_order_id',
    },
    {
      title: 'Tên',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Tuổi',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      render: (text: string) => text.charAt(0).toUpperCase() + text.slice(1),
    },
    {
      title: 'Gói',
      dataIndex: 'title',
      key: 'title',
      render: (text: string) => text.charAt(0).toUpperCase() + text.slice(1),
    },
    {
      title: 'Thời lượng',
      dataIndex: 'period',
      key: 'period',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      render: (text: string) => new Intl.NumberFormat('vi-VN').format(parseFloat(text)),
    },
    {
      title: 'Thời gian hẹn',
      dataIndex: 'time',
      key: 'time',
      render: (text: string) => dayjs(text).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Pending' ? 'gold' : status === 'Completed' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text: string) => dayjs(text).format('DD/MM/YYYY HH:mm'),
    },
  ];

  return (
    <Layout className="min-h-screen">
      <AdminHeader />
      <Content className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button 
            type="primary"
            icon={<DownloadOutlined />}
            onClick={() => exportToExcel(filteredOrders)}
            className="bg-green-500 hover:bg-green-600"
          >
            Xuất Excel
          </Button>
        </div>
        
        <Row gutter={16} className="mb-8">
          <Col span={6}>
            <Card>
              <Statistic
                title="Tổng đơn hàng"
                value={stats.total}
                prefix={<ShoppingCartOutlined />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Đơn hàng chờ xử lý"
                value={stats.pending}
                prefix={<ClockCircleOutlined />}
                valueStyle={{ color: '#faad14' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Đơn hàng hoàn thành"
                value={stats.completed}
                prefix={<CheckCircleOutlined />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Tổng doanh thu"
                value={stats.totalRevenue}
                prefix={<DollarOutlined />}
                valueStyle={{ color: '#cf1322' }}
                formatter={(value) => new Intl.NumberFormat('vi-VN').format(value as number)}
              />
            </Card>
          </Col>
        </Row>

        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Danh sách đơn hàng</h2>
          <Button 
            type="primary"
            icon={<DownloadOutlined />}
            onClick={() => exportToExcel(filteredOrders)}
            className="bg-green-500 hover:bg-green-600"
          >
            Xuất Excel theo bộ lọc
          </Button>
        </div>

        <AdminFilter onFilterChange={handleFilterChange} />
        
        <Table 
          dataSource={filteredOrders} 
          columns={columns} 
          loading={loading}
          rowKey="id"
          scroll={{ x: true }}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `Tổng ${total} đơn hàng`,
          }}
        />
      </Content>
    </Layout>
  );
};

export default OrdersPage; 