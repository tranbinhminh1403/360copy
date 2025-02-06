import React, { useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./styles.module.scss"; // Assuming you have a styles file

const BasicModal = ({
  open,
  onCancel,
  children,
}: {
  open: boolean;
  onCancel: () => void;
  children?: React.ReactNode;
}) => {
  const [width] = useWindowSize();

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [open]);

  if (!open) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div
        className={styles.modalBody}
        style={{ width: width * 0.9 }}
      >
        <button className={styles.closeButton} onClick={onCancel}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default BasicModal;
