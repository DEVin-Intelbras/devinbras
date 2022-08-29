import { Facebook, Instagram, Youtube } from "@assets/icons";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <section className={styles.sectionInfo}>
        <h2 className={styles.sectionInfoTitle}>DevInBras</h2>
        <p className={styles.sectionInfoDescription}>
          ©{new Date().getFullYear()} - DevInBras.
        </p>
        <p className={styles.sectionInfoDescription}>
          Todos os direitos reservados.
        </p>
      </section>

      <section className={styles.sectionSocialMidia}>
        <Instagram />
        <Facebook />
        <Youtube />
      </section>
    </footer>
  );
};
