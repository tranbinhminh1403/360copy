 
import DisplayImage from "../../common/displayImage";
import styles from "./styles.module.scss";

const CellIntro = ({
  image,
  title,
  description,
  isLastInRow,
  isLastRow,
}: {
  image: string;
  title: string;
  description: string;
  isLastInRow: boolean;
  isLastRow: boolean;
}) => {
  return (
    <div
      className={`${styles.cellIntro} ${isLastInRow ? styles.lastInRow : ''} ${isLastRow ? styles.lastRow : ''}`}
    >
      <div className={styles.icon}>
        <DisplayImage image={image} alt={title} width={50} height={50} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default CellIntro;
