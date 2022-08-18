import { useState } from "react";

import { ButtonSecondary, Navbar, MenuHamburguer } from "@/components";

import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClickMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={styles.containerHeader}>
      <h1 className={styles.headerTitle}>DevInBras</h1>

      <div
        className={`${
          isMobile
            ? `${styles.menu} 
          ${isOpen ? styles.menuOpen : styles.menuClosed}`
            : ""
        }`}
      >
        <Navbar />
      </div>

      <ButtonSecondary>Sair</ButtonSecondary>

      {isMobile && <MenuHamburguer onClick={handleClickMenu} />}
    </header>
  );
};
