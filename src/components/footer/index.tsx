import React from "react";
import styles from "./styles.module.scss";

import youtube from "../../assets/social/youtube.png";
import facebook from "../../assets/social/facebook.png";
import twitter from "../../assets/social/twitter.png";
import instagram from "../../assets/social/instagram.png";
import linkedin from "../../assets/social/linkedin.png";

import appLogo from "../../assets/appLogo.png";

// import DropdownIcon from "../../assets/dropdown.png";

import DisplayImage from "../common/displayImage";
// import { Dropdown, MenuProps, Space } from "antd";
import { scrollToTop, scrollToElement } from "../../utils";
import { useWindowSize } from "../../hooks/useWindowSize";

// const items: MenuProps["items"] = [
//   {
//     key: "1",
//     label: "Dịch vụ 1",
//   },
//   {
//     key: "2",
//     label: "Dịch vụ 2",
//   },
//   {
//     key: "3",
//     label: "Dịch vụ 3",
//   },
//   {
//     key: "4",
//     label: "Dịch vụ 4",
//   },
// ];

const Footer = ({openModal}: {openModal: () => void}) => {
  const [width] = useWindowSize();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerUpper}>
          {width < 576 ? (
            <div className={styles.footerLogo}>
              <DisplayImage pointer image={appLogo} alt="appLogo" height={120} onClick={() => scrollToTop()}/>
            </div>
          ) : (
            <p className={styles.footerTitle} onClick={() => scrollToTop()}>Laodong360</p>
          )}

          <div className={styles.footerSocial}>
            <DisplayImage image={youtube} alt="youtube" height={24} />
            <DisplayImage image={facebook} alt="facebook" height={24} />
            <DisplayImage image={twitter} alt="twitter" height={24} />
            <DisplayImage image={instagram} alt="instagram" height={24} />
            <DisplayImage image={linkedin} alt="linkedin" height={24} />
          </div>
        </div>

        <hr className={styles.footerHr} />

        <div className={styles.footerLower}>
          {/* <p className={styles.footerCopyright}>
            laodong360 @ 2025. All rights reserved.
          </p> */}
          <div className={styles.footerContact}>
            <p>Địa chỉ: Tầng 25, tòa MD Complex, 68 Nguyễn Cơ Thạch, Nam Từ Liêm, TP. Hà Nội</p>
            <p>Hotline: 0353352388</p>
          </div>
          <div className={styles.footerLink}>
            {width > 922 ? (
              <p className={styles.footerLinkItem} onClick={() => scrollToTop()}>Trang chủ</p>
            ) : (<></>)}
              {/* <Dropdown menu={{items}}>

                <Space >
                  <p className={styles.footerLinkItem}>Dịch vụ</p>
                  <DisplayImage
                    image={DropdownIcon}
                    alt="dropdown"
                    height={16}
                  />
                </Space>

            </Dropdown> */}
            <p className={styles.footerLinkItem} onClick={() => scrollToElement("service")}>Dịch vụ</p>
            <p className={styles.footerLinkItem} onClick={() => openModal()}>Tài liệu</p>
            <p className={styles.footerLinkItem}>Liên hệ</p>
            <p className={styles.footerLinkItem}>Về chúng tôi</p>

          </div>
        </div>

          
        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            laodong360 @ 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
