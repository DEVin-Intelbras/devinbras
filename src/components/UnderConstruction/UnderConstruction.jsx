import { UnderConstructionSvg } from "./svg/UnderConstructionSvg";
import styles from "./UnderConstruction.module.css";

export const UnderConstruction = () => {
  return (
    <div className={styles.container}>
      <UnderConstructionSvg />
      <span className={styles.text}>Em construção</span>
    </div>
  );
};
