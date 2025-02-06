 
import AvatarGroup from "../avatarGroup";
import CommonButton from "../../common/commonButton";
import styles from "./styles.module.scss";
import { scrollToElement } from "../../../utils";

const OverallDesc = () => {
  return (
    <div className={styles.floatContent}>
      {/* content right float */}
      <div className={styles.contentContainer}>
        <div className={styles.content1}>
          <p className={styles.title}>Dịch vụ hỗ trợ giải đáp chuyên sâu các vấn đề về lao động</p>
          <p className={styles.subTitle}>Các chuyên gia đang online</p>
          <div className={styles.avatarContainer}>
            <AvatarGroup />
            <p style={{ minWidth: 200 }}>+121 chuyên gia online</p>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#00FB0C",
              }}
            ></div>
          </div>
          <div className={styles.buttonContainer}>
            <CommonButton
              content="Nói chuyện với chuyên gia"
              onClick={() => scrollToElement("planning")}
            />
          </div>
        </div>

        <div className={styles.content2}>
          {/* <p>hello</p> */}
        </div>
      </div>
    </div>
  );
};

export default OverallDesc;
