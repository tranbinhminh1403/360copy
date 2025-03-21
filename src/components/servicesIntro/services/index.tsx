import ServiceCard from "../serviceCard";
import styles from "./styles.module.scss";

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

const Services = ({
  services,
}: {
  services: Array<{
    title?: string;
    desc?: string;
    modalContent?: ModalContent;
    icon?: string;
    themeColor?: string;
    textColor?: string;
  }>;
}) => {
  return (
    <div className={styles.cardsGroup}>
      <div className={styles.leftGroup}>
        {services.slice(0, 2).map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title || ""}
            description={service.desc || ""}
            icon={service.icon || ""}
            themeColor={service.themeColor || ""}
            textColor={service.textColor || ""}
            modalContent={service.modalContent}
          />
        ))}
      </div>
      <div className={styles.rightGroup}>
        {services.slice(2).map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title || ""}
            description={service.desc || ""}
            icon={service.icon || ""}
            themeColor={service.themeColor || ""}
            textColor={service.textColor || ""}
            modalContent={service.modalContent}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
