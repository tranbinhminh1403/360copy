import { Radio } from "antd";
import React from "react";
import styles from "./styles.module.scss";

interface PricingRadioProps {
  selectedValue: string;
  onChange: (value: string) => void;
  value: string;
  label: string;
  expiry: string;
  price: string;
  priceDesc: string;
}

const PricingRadio = ({
  value,
  label,
  expiry,
  price,
  priceDesc,
  selectedValue,

  onChange,
}: PricingRadioProps) => {
  const isSelected = value === selectedValue;
  
  return (
    <div
      className={`${styles.radioPricing} ${isSelected ? styles.selected : ''}`}
      onClick={() => onChange(value)}
    >
      <Radio value={value} checked={isSelected} />
      <div className={styles.content}>
        <div className={styles.detail}>
          <p className={styles.title}>{label}</p>
          <p className={styles.expiry}>{expiry}</p>
        </div>


        <div className={styles.price}>
          <p className={styles.priceValue}>{price}</p>
          <p className={styles.priceDesc}>{priceDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingRadio;
