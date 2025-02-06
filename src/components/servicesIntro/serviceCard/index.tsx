import { useState } from "react";
import DisplayImage from "../../common/displayImage";
import styles from "./styles.module.scss";
import BasicModal from "../../modal";
import ExampleContent from "../../modal/content";

type ModalContent = {
  title: string;
  sections: Array<{
    heading: string;
    content: Array<{
      label?: string;
      text: string;
    }>;
  }>;
};

const ServiceCard = ({
  icon,
  title,
  description,
  themeColor,
  textColor,
  modalContent,
}: {
  icon: string;
  title: string;
  description: string;
  themeColor?: string;
  textColor?: string;
  modalContent?: ModalContent;
}) => {
  const [open, setOpen] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <BasicModal open={open} onCancel={handleCancel}>
        <ExampleContent content={modalContent} />
      </BasicModal>
      <div
        className={styles.serviceCard}
        style={{ backgroundColor: themeColor, color: textColor }}
        onClick={handleOpen}
      >
        <div className={styles.serviceCardIcon}>
          <DisplayImage image={icon} alt={title} width={27} height={27} />
        </div>
        <p className={styles.serviceCardTitle}>{title}</p>
        <p className={styles.serviceCardDescription}>{description}</p>
      </div>
    </>
  );
};

export default ServiceCard;
