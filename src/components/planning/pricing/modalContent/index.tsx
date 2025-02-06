import { Col, Form, Input, Row, Select, DatePicker, message } from "antd";
 
import CommonButton from "../../../common/commonButton";
import styles from "./styles.module.scss";
// import checkIcon from "../../../../assets/check.png";
// import DisplayImage from "../../../common/displayImage";
import { selectOptions, genderOptions } from "./optionsData";

const ModalContent = ({
  onCancel,
  initialPricing,
}: {
  onCancel?: () => void;
  initialPricing?: string;
}) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: any) => {
    try {
      // Here you would typically send the data to your backend
      console.log("Form values:", values);

      messageApi.success("Đăng ký tư vấn thành công!");
      form.resetFields();

      // Close modal after successful submission
      setTimeout(() => {
        onCancel?.();
      }, 1000);
    } catch (error) {
      messageApi.error("Có lỗi xảy ra. Vui lòng thử lại!");
    }
  };

  const validatePhoneNumber = (_: any, value: string) => {
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!phoneRegex.test(value)) {
      return Promise.reject("Số điện thoại không hợp lệ!");
    }
    return Promise.resolve();
  };

  const validateAge = (_: any, value: string) => {
    const age = parseInt(value);
    if (isNaN(age) || age < 1 || age > 90) {
      return Promise.reject("Tuổi không hợp lệ!");
    }
    return Promise.resolve();
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <Row className={styles.modalContent}>
      {/* <Col lg={12} md={24} sm={24} xs={24} className={styles.modalDesc}>
        <div className={styles.modalTitle}>
          Nhận ngay giải pháp pháp lý tối ưu cho bạn
        </div>
        <div className={styles.modalDescContent}>
          <div className={styles.modalDescItem}>
            <DisplayImage
              image={checkIcon}
              alt="check"
              width={20}
              height={20}
            />
            <span>Nhận tư vấn miễn phí</span>
          </div>

          <div className={styles.modalDescItem}>
            <DisplayImage
              image={checkIcon}
              alt="check"
              width={20}
              height={20}
            />
            <span>Tiếp cận giải pháp pháp lý cá nhân hóa</span>
          </div>

          <div className={styles.modalDescItem}>
            <DisplayImage
              image={checkIcon}
              alt="check"
              width={20}
              height={20}
            />
            <span>Tiết kiệm thời gian</span>
          </div>

          <div className={styles.modalDescItem}>
            <DisplayImage
              image={checkIcon}
              alt="check"
              width={20}
              height={20}
            />
            <span>Đặc quyền ưu tiên</span>
          </div>
        </div>
      </Col> */}
      <Col lg={24} md={24} sm={24} xs={24} className={styles.modalForm}>
        {contextHolder}
        <p className={styles.modalTitle}>Đăng ký tư vấn</p>
        <Form
          form={form}
          layout="vertical"
          className={styles.form}
          onFinish={onFinish}
          initialValues={{ pricing: initialPricing }}
        >
          <Row>
            <Col lg={12} md={24} sm={24} xs={24} className={styles.modalForm}>
              {/* <Form.Item
                name="pricing"
                label="Gói tư vấn"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn gói tư vấn!",
                  },
                ]}
              >
                <Select
                  size="large"
                  options={pricingList}
                  placeholder="Chọn gói tư vấn"
                />
              </Form.Item> */}

              <Form.Item
                name="problems"
                label="Vấn đề cần tư vấn"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn vấn đề cần tư vấn!",
                  },
                ]}
              >
                <Select
                  size="large"
                  options={selectOptions}
                  placeholder="Chọn vấn đề cần tư vấn"
                />
              </Form.Item>

              <Form.Item
                name="name"
                label="Họ và tên"
                rules={[
                  { required: true, message: "Vui lòng nhập họ tên!" },
                  { min: 2, message: "Họ tên phải có ít nhất 2 ký tự!" },
                ]}
              >
                <Input size="large" placeholder="Nhập họ và tên" />
              </Form.Item>

              <Form.Item
                name="gender"
                label="Giới tính"
                rules={[
                  { required: true, message: "Vui lòng chọn giới tính!" },
                ]}
              >
                <Select
                  size="large"
                  options={genderOptions}
                  placeholder="Chọn giới tính"
                />
              </Form.Item>

              <Form.Item
                name="time"
                label="Thời gian khách hàng nhận tư vấn"
                rules={[
                  { required: true, message: "Vui lòng chọn thời gian!" },
                ]}
              >
                <DatePicker
                  showTime
                  format="YYYY-MM-DD HH:mm"
                  size="large"
                  style={{ width: "100%" }}
                  placeholder="Chọn thời gian"
                />
              </Form.Item>
            </Col>
            <Col lg={12} md={24} sm={24} xs={24} className={styles.modalForm}>
              <Form.Item
                name="email"
                label="Email nhận kết quả tư vấn"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Vui lòng nhập email hợp lệ!",
                  },
                ]}
              >
                <Input size="large" placeholder="Nhập email" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Số điện thoại liên hệ"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                  { validator: validatePhoneNumber },
                ]}
              >
                <Input size="large" placeholder="Nhập số điện thoại" />
              </Form.Item>

              <Form.Item
                name="age"
                label="Tuổi"
                rules={[
                  { required: true, message: "Vui lòng nhập tuổi!" },
                  { validator: validateAge },
                ]}
              >
                <Input size="large" placeholder="Nhập tuổi" />
              </Form.Item>


            </Col>
          </Row>
          <Form.Item>
            <div className={styles.submitButton}>
              <CommonButton content="Đăng ký ngay" onClick={handleSubmit} />
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ModalContent;
