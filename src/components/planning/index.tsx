import { Col, Row } from "antd";
 
import PricingInfo from "./info";
import Pricing from "./pricing";
import styles from "./styles.module.scss";
import { infoData, resData } from "./data";

const Planning = () => {
  return (
    <div className={styles.planning} style={{overflow: "hidden"}}>
      <div className={styles.resContent}>
        <PricingInfo data={resData} />
      </div>
      <div className={styles.title}>
        Chọn gói cước để gặp{" "}
        <span style={{ color: "#DC1F27", fontWeight: 700 }}>Chuyên gia</span>
      </div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} className={styles.info}>
            <PricingInfo title="Gặp gỡ chuyên gia hôm nay sẽ tiết kiệm được chi phí cho ngày mai" data={infoData} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={16} className={styles.pricing}>
            <Pricing />
        </Col>
      </Row>
    </div>
  );
};

export default Planning;
