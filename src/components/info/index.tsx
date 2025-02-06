import { Col } from "antd";
import { Row } from "antd";
 
import styles from "./styles.module.scss";

import infoBG from "../../assets/infoBG.png";
import infoIMG from "../../assets/infoIMG.png";

import TextWall from "./textWall";
import DisplayImage from "../common/displayImage";
import { useWindowSize } from "../../hooks/useWindowSize";


const year = 10;

const Info = () => {
  const [width] = useWindowSize();
  const leftContent = [
    {
      title: "Kinh nghiệm dày dặn",
      description: `Với hơn ${year} năm hoạt động, chúng tôi tự hào là một trong những đơn vị hàng đầu trong lĩnh vực luật lao động.`,
    },
    {
      title: "Đội ngũ chuyên gia hàng đầu",
      description:
        "Tập hợp những chuyên gia giàu kinh nghiệm, luôn cập nhật kiến thức và giải pháp mới nhất.",
    },
    {
      title: "Cam kết hiệu quả",
      description:
        "Chúng tôi đảm bảo mang lại kết quả tốt nhất, giúp khách hàng tối ưu hóa quyền lợi và chi phí.",
    },
  ];
  const rightContent = [
    {
      title: "Phương pháp làm việc minh bạch",
      description:
        "Quy trình tư vấn rõ ràng, dễ hiểu và được điều chỉnh phù hợp với từng tình huống cụ thể.",
    },
    {
      title: "Dịch vụ toàn diện",
      description:
        "Từ tư vấn, soạn thảo đến giải quyết tranh chấp và đại diện pháp lý.",
    },
    {
      title: "Hỗ trợ liên tục",
      description:
        "Chúng tôi luôn sẵn sàng đồng hành cùng khách hàng trong suốt quá trình hợp tác, đảm bảo sự an tâm tuyệt đối.",
    },
  ];
  return (
    <div
      className={styles.infoContainer}
      style={{
        backgroundImage: infoBG,

      }}
    >
      <p className={styles.infoTitle}>Tại sao chọn chúng tôi</p>
      <Row style={{marginTop: 80}}>
        <Col xs={24} sm={24} md={12} lg={8} className={styles.infoItemLeft}>
          <TextWall infoContent={leftContent} textAlign="right" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} className={styles.infoItemImg}>
          <DisplayImage image={infoIMG} alt="infoIMG" height={width > 576 ? 370 : 350} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} className={styles.infoItemRight}>
          <TextWall infoContent={rightContent} textAlign="left" />
        </Col>
      </Row>
    </div>
  );
};

export default Info;
