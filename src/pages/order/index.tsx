import { Card, Descriptions, QRCode, Button } from "antd";
import {
  ClockCircleOutlined,
  // CreditCardOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const stateParam = searchParams.get("state");
  const orderData = stateParam
    ? JSON.parse(decodeURIComponent(stateParam))
    : null;

  if (!orderData) {
    return <div>No order data available</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 ml-4">
        <Button
          icon={<HomeOutlined />}
          onClick={() => (window.location.href = "/")}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Trở về trang chủ
        </Button>
      </div>
      <div className="max-w-6xl mx-auto">
        <Card className="shadow-lg rounded-lg overflow-hidden">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Chi tiết đơn hàng
          </h1>
          <Descriptions column={{ xs: 1, sm: 2 }} bordered className="mb-8">
            <Descriptions.Item label="Mã đơn hàng" className="font-semibold">
              {orderData.orderReference}
            </Descriptions.Item>
            <Descriptions.Item label="Họ và tên">
              {orderData.fullName}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {orderData.email}
            </Descriptions.Item>
            <Descriptions.Item label="Số điện thoại">
              {orderData.phoneNumber}
            </Descriptions.Item>
            <Descriptions.Item label="Tuổi">{orderData.age}</Descriptions.Item>
            <Descriptions.Item label="Giới tính">
              {orderData.gender}
            </Descriptions.Item>
            <Descriptions.Item label="Thời gian nhận tư vấn">
              {dayjs(orderData.period).format("DD/MM/YYYY HH:mm")}
            </Descriptions.Item>
            <Descriptions.Item label="Vấn đề cần tư vấn" span={2}>
              <div className="max-h-32 overflow-y-auto">{orderData.note}</div>
            </Descriptions.Item>
          </Descriptions>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Thông tin thanh toán
            </h3>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <QRCode
                  value={orderData.payment_info.qr_info}
                  size={250}
                  className="mx-auto"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="flex items-center text-blue-600 mb-4">
                  <ClockCircleOutlined className="mr-2" />
                  Thời gian hết hạn: {orderData.payment_info.expire_time}
                </p>
                <p className="text-gray-700">
                  Quét mã QR để thanh toán đơn hàng của bạn. Vui lòng hoàn tất
                  thanh toán trước thời gian hết hạn.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Order;
