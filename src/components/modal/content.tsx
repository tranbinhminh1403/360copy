import React from "react";
import styles from "./styles.module.scss";
import { Card } from "antd";
// import { Row } from "antd";

interface ContentSection {
  heading: string;
  content: Array<{ label: string; text: string }>;
}

interface ModalContent {
  title: string;
  sections: ContentSection[];
}

const ExampleContent = ({ content }: { content?: string | ModalContent }) => {
  if (typeof content === "string") {
    return <div>{content}</div>;
  }

  return (
    <div className={styles.modalContent}>
      <h1 className={styles.mainTitle}>{content?.title}</h1>
      <div className={styles.content}>
        {content?.sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <Card title={section.heading} headStyle={{ backgroundColor: "#DC1F27", color: "#fff", fontSize: 20 }}>
              {section.content.map((item, idx) => (
                <div key={idx} className={styles.contentItem}>
                  <strong>
                    {item.label} {item.label ? ":" : ""}
                  </strong>{" "}
                  {item.text}
                </div>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleContent;
