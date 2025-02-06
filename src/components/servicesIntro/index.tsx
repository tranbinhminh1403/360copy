import React from "react";
import CardsCarousel from "./cardsCarousel";
import styles from "./styles.module.scss";
import { Col, Row } from "antd";

const ServicesIntro = () => {
  return (
    <Row className={styles.servicesIntro}>
      <Col xs={24} md={24} lg={24} xl={10} className={styles.leftGroup}>
        <p className={styles.title}>Dịch vụ của chúng tôi</p>
        <p className={styles.description}>
          Chúng tôi cung cấp những dịch vụ đảm bảo khách hàng được hỗ trợ tối đa
          trong các vấn đề liên quan đến luật lao động:
        </p>
      </Col>

      <Col xs={24} md={24} lg={24} xl={14} className={styles.rightGroup}>
        <CardsCarousel />
      </Col>
    </Row>
  );
};

export default ServicesIntro;
