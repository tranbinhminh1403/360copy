import { Col, Form, Input, Row, Select, DatePicker, message, Spin } from "antd";
 
import CommonButton from "../../../common/commonButton";
import styles from "./styles.module.scss";
// import checkIcon from "../../../../assets/check.png";
// import DisplayImage from "../../../common/displayImage";
import { selectOptions, genderOptions, pricingList } from "./optionsData";
import dayjs from "dayjs";
import { usePostForm } from "../../../../hooks/usePostForm";
import { useState } from "react";

const ModalContent = ({
  onCancel,
  initialPricing,
}: {
  onCancel?: () => void;
  initialPricing?: string;
}) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { mutate } = usePostForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const formattedValues = {
        ...values,
        age: parseInt(values.age, 10),
        period: values.time ? dayjs(values.time).format('YYYY-MM-DD HH:mm:ss') : null,
        price: parseInt(pricingList.find((item) => item.value === values.title)?.price?.replace(/\D/g, "") || "0", 10),
      };

      console.log(formattedValues.period);

      mutate(formattedValues, {
        onSuccess: (response) => {
          console.log("Response from backend:", response);
          messageApi.success("Đăng ký tư vấn thành công!");
          form.resetFields();
          // Navigate to order page with response data
          if (onCancel) onCancel();
          window.location.href = `/order/${response.data.id}?state=${encodeURIComponent(JSON.stringify(response.data))}`;
        },
        onError: () => {
          messageApi.error("Có lỗi xảy ra. Vui lòng thử lại!");
        },
        onSettled: () => {
          setLoading(false);
        },
      });
    } catch (error) {
      messageApi.error("Có lỗi xảy ra. Vui lòng thử lại!");
      setLoading(false);
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

      <Col lg={24} md={24} sm={24} xs={24} className={styles.modalForm}>
        {contextHolder}
        <p className={styles.modalTitle}>Đăng ký tư vấn</p>
        {loading ? (
          <div className='flex justify-center items-center h-full'>
            <Spin tip="Đang xử lý..." />
          </div>
        ) : (
          <Form
            form={form}
            layout="vertical"
            className={styles.form}
            onFinish={onFinish}
            initialValues={{ pricing: initialPricing }}
          >
            <Row>
              <Col lg={12} md={24} sm={24} xs={24} className={styles.modalForm}>
                <Form.Item
                  name="title"
                  label="Gói tư vấn"
                  initialValue={initialPricing}
                  rules={[
                    { required: true, message: "Vui lòng chọn gói tư vấn!" },
                  ]}
                  style={{ display: 'none' }}
                >
                  <Select
                    size="large"
                    options={pricingList}
                    placeholder="Chọn gói tư vấn"
                  />
                </Form.Item>

                <Form.Item
                  name="note"
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
                  name="fullName"
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
                  name="phoneNumber"
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
        )}
      </Col>
    </Row>
  );
};

export default ModalContent;
