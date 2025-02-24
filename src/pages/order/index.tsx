import { Card, Descriptions, QRCode, Button } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';
import { usePostOrderReference } from '../../hooks/usePostOrderReference';
import HeaderAndFooter from '../../components/headerAndFooter';

const Order = () => {
  const { mutate } = usePostOrderReference();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const stateParam = searchParams.get('state');
  const orderData = stateParam ? JSON.parse(decodeURIComponent(stateParam)) : null;

  if (!orderData) {
    return <div>No order data available</div>;
  }

  const handlePostOrder = (order_reference: any) => {
    mutate(order_reference);
    console.log(order_reference);
  };

  return (
    <HeaderAndFooter>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">
        <Card className="shadow-lg rounded-lg overflow-hidden">
          <h1 className="text-3xl text-red-500 font-bold text-gray-800 mb-6">Thông tin chi tiết</h1>
          <Descriptions column={{ xs: 1, sm: 2 }} bordered className="mb-8">
            <Descriptions.Item label="Mã đơn hàng" className="font-semibold">
              {orderData.orderReference}
            </Descriptions.Item>
            <Descriptions.Item label="Họ và tên">{orderData.fullName}</Descriptions.Item>
            <Descriptions.Item label="Email">{orderData.email}</Descriptions.Item>
            <Descriptions.Item label="Số điện thoại">{orderData.phoneNumber}</Descriptions.Item>
            <Descriptions.Item label="Tuổi">{orderData.age}</Descriptions.Item>
            <Descriptions.Item label="Giới tính">{orderData.gender}</Descriptions.Item>
            <Descriptions.Item label="Thời gian nhận tư vấn">
              {dayjs(orderData.period).format('DD/MM/YYYY HH:mm')}
            </Descriptions.Item>
            <Descriptions.Item label="Vấn đề cần tư vấn" span={2}>
              <div className="max-h-32 overflow-y-auto">{orderData.note}</div>
            </Descriptions.Item>
          </Descriptions>

          <div className="bg-red-50 p-6 rounded-lg mb-6 pl-8">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Thông tin thanh toán</h3>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <QRCode value={orderData.payment_info.qr_info} size={250} className="mx-auto" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="flex items-center text-red-600 mb-4">
                  <ClockCircleOutlined className="mr-2" />
                  Thời gian hết hạn: {orderData.payment_info.expire_time}
                </p>
                <p className="text-gray-700">
                  Quét mã QR để thanh toán đơn hàng của bạn. Vui lòng hoàn tất thanh toán trước thời gian hết hạn.
                </p>
                <p className="mt-8">Sau khi thanh toán thành công, vui lòng xác nhận thanh toán.</p>
                <div className="mt-12">
                  <Button
                    type="primary"
                    danger
                    size="large"
                    onClick={() => handlePostOrder(orderData.orderReference)}
                    className="bg-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    Xác nhận thanh toán
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
    </HeaderAndFooter>
  );
};

export default Order;
