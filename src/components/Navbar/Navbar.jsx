import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.ulContainer}>
        <li>
          <a className={styles.link} href='#'>
            Ínicio
          </a>
        </li>

        <li>
          <a className={`${styles.link} ${styles.linkActive}`} href='#'>
            Produtos
          </a>
        </li>

        <li>
          <a className={styles.link} href='#'>
            Sobre
          </a>
        </li>

        <li>
          <a className={styles.link} href='#'>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};
