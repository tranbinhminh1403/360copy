import React from "react";
import { docContent } from "./data";
import styles from "./styles.module.scss";
const DocContent = () => {
  return (
    <div className={styles.docContent}>
      <div className={styles.docContentTitle}>
        <p>Tài liệu</p>
      </div>

      <div className={styles.docContentList}>
        {docContent.map((item, index) => (
          <div className={styles.docContentItem} key={index}>
            <p className={styles.docContentItemTitle}>{item.title}</p>
            <p className={styles.docContentItemDesc}>{item.desc}</p>
            <a className={styles.docContentItemLink} href={item.link} target="_blank" rel="noopener noreferrer">
              Xem tài liệu &gt;&gt;
            </a>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocContent;
