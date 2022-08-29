import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className={styles.ulContainer}>
        <li>
          <Link
            className={`${styles.link} ${
              pathname === "/" && styles.linkActive
            }`}
            to="/"
          >
            Ínicio
          </Link>
        </li>

        <li>
          <Link
            className={`${styles.link} ${
              pathname === "/produtos" && styles.linkActive
            }`}
            to="produtos"
          >
            Produtos
          </Link>
        </li>

        <li>
          <Link
            className={`${styles.link} ${
              pathname === "/sobre" && styles.linkActive
            }`}
            to="sobre"
          >
            Sobre
          </Link>
        </li>

        <li>
          <Link
            className={`${styles.link} ${
              pathname === "/contato" && styles.linkActive
            }`}
            to="contato"
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};
