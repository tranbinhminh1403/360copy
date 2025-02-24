import { useState } from "react";
import logo from "../../assets/pageLogo.png";
import logo9hr from "../../assets/9HR.png";
import its from "../../assets/ITS.png";
import DisplayImage from "../common/displayImage";
import barMenu from "../../assets/barMenu.png";
import { scrollToElement, scrollToTop } from "../../utils";
import styles from "./styles.module.scss";
import { useWindowSize } from "../../hooks/useWindowSize";
import BasicDrawer from "../common/drawer";
const Header = ({openModal, openAboutModal}: {openModal: () => void, openAboutModal: () => void}) => {
  const [width] = useWindowSize();
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      title: 'Trang chủ',
      link: () => {
        scrollToTop()
        setOpen(false)
      }
    },
    {
      title: 'Về chúng tôi',
      link: () => {
        openAboutModal()
        setOpen(false)
      }
    },
    {
      title: 'Dịch vụ',
      link: () => {
        scrollToElement('service')
        setOpen(false)
      }
    },
    {
      title: 'Tài liệu',
      link: () => {
        openModal()
        setOpen(false)
      }
    },
    {
      title: 'Liên hệ',
      link: () => {
        scrollToElement('footer')
        setOpen(false)
      }
    }
  ]
  return (
    <div className={styles.headerContainer}>
      <BasicDrawer open={open} onClose={() => setOpen(false)}>
        {navItems.map((item, index) => (
          <p className={styles.drawerItems} key={index} onClick={item.link}>{item.title}</p>
        ))}
      </BasicDrawer>
      <div>
        <DisplayImage image={logo} alt="logo" width={45} pointer={true}  onClick={() => (window.location.href = "/")} />
      </div>
      { width > 768 && navItems.map((item, index) => (
        <p className={styles.navItems} key={index} onClick={item.link}>{item.title}</p>
      ))}

      <div className="flex items-center gap-5">
        <DisplayImage  image={logo9hr} alt="logo" width={50} pointer={true} onClick={() => window.open('https://www.9hr.vn/ve-chung-toi', '_blank')} />
        <DisplayImage image={its} alt="logo" width={39} pointer={true} onClick={() => window.open('https://interits.com/', '_blank')} />
      </div>

      {width < 768 &&  <DisplayImage image={barMenu} alt="barMenu" width={30} pointer={true} onClick={() => setOpen(true)}/>}
     
    </div>
  );
};

export default Header;
