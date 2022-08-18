import { useEffect, useState } from 'react';

import { ButtonSecondary, Navbar, MenuHamburguer } from '@/components';

import styles from './Header.module.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      const matchMedia = window.matchMedia('(max-width: 600px)');
      setIsMobile(matchMedia.matches);
      setIsOpen(false);
    };

    //Chamar a função quando o componente é renderizado para verificar se é mobile
    resizeListener();

    // set resize listener para ficar escutando o evento de resize da tela
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener quando o componente é desmontado
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const handleClickMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={styles.containerHeader}>
      <h1 className={styles.headerTitle}>DevInBras</h1>

      <div
        className={`${
          isMobile
            ? `${styles.menu} 
          ${isOpen ? styles.menuOpen : styles.menuClosed}`
            : ''
        }`}
      >
        <Navbar />
      </div>

      <ButtonSecondary>Sair</ButtonSecondary>

      {isMobile && <MenuHamburguer onClick={handleClickMenu} />}
    </header>
  );
};
