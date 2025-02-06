import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Radio, Space } from "antd";
import PricingRadio from "./pricingRadio";
import CommonButton from "../../common/commonButton";
import AnimatedSection from "../../common/animation";
import BasicModal from "../../modal";
import ModalContent from "./modalContent";
import { pricingList } from "./modalContent/optionsData";


const Pricing = () => {
  const [value, setValue] = useState('p1');
  const [open, setOpen] = useState(false);
  const [selectedPricing, setSelectedPricing] = useState('p1');

  const handlePricingChange = (value: string) => {
    setSelectedPricing(value);
    setOpen(true);
  };

  return (
    <div className={styles.pricing}>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)} style={{ width: '100%' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          {pricingList.map((item) => (
            <AnimatedSection key={item.value} animation="fade-right">
              <PricingRadio key={item.value} {...item} selectedValue={value} onChange={setValue} />
            </AnimatedSection>
          ))}
        </Space>
      </Radio.Group>
      <AnimatedSection animation="fade-right">
        <div className={styles.button}>
          <CommonButton content="Chọn và kết nối với chuyên gia" onClick={() => handlePricingChange(value)} />
        </div>
      </AnimatedSection>
      <BasicModal open={open} onCancel={() => setOpen(false)}>
        <ModalContent onCancel={() => setOpen(false)} initialPricing={selectedPricing} />
      </BasicModal>
    </div>
  );
};

export default Pricing;
