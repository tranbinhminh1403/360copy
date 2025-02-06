import React from "react";
import styles from "./styles.module.scss";
import DisplayImage from "../../common/displayImage";
import AnimatedSection from "../../common/animation";

const PricingInfo = ({ title, data }: { title?: string; data: Array<{ descIcon: string; desc: string }> }) => {
  return (
    <div className={styles.pricingInfo}>
      <AnimatedSection animation="fade-down">
        <div className={styles.title}>
          <p>{title}</p>
        </div>
      </AnimatedSection>

      <div className={styles.list}>
        {data.map((item, index) => (
          <AnimatedSection key={index} animation="fade-left">
            <div className={styles.item}>
              <DisplayImage image={item.descIcon} alt="call" width={50} />
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default PricingInfo;
