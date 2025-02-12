import { Result, Button } from "antd"


const PaymentResult = () => {
  return (
    <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f2f5",
    }}
  >
    <Result
      status="success"
      title="Thanh toán thành công!"
      subTitle="Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi. Đơn hàng của bạn đã được xác nhận."
      extra={[
        <Button type="primary" key="home" onClick={() => (window.location.href = "/")}>
          Trở về trang chủ
        </Button>,
      ]}
    />
  </div>  )
}

export default PaymentResult