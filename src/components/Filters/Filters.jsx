import {
  Comunicacao,
  ControleAcesso,
  Energia,
  EnergiaSolar,
  Redes,
  Seguranca,
} from "@/assets/icons";

import PropType from "prop-types";

import styles from "./Filters.module.css";

export const Filters = ({ aoFiltrar }) => {
  return (
    <section className={styles.filter}>
      <div
        className={styles.filterGroup}
        onClick={() => aoFiltrar("segurança eletrônica")}
      >
        <Seguranca />
        <p className={styles.filterDetail}>Segurança Eletrônica</p>
      </div>
      <div className={styles.filterGroup} onClick={() => aoFiltrar("redes")}>
        <Redes />
        <p className={styles.filterDetail}>Redes</p>
      </div>
      <div
        className={styles.filterGroup}
        onClick={() => aoFiltrar("comunicação")}
      >
        <Comunicacao />
        <p className={styles.filterDetail}>Comunicação</p>
      </div>
      <div
        className={styles.filterGroup}
        onClick={() => aoFiltrar("energia solar")}
      >
        <EnergiaSolar />
        <p className={styles.filterDetail}>Energia Solar</p>
      </div>
      <div className={styles.filterGroup} onClick={() => aoFiltrar("energia")}>
        <Energia />
        <p className={styles.filterDetail}>Energia</p>
      </div>
      <div
        className={styles.filterGroup}
        onClick={() => aoFiltrar("controle de acesso")}
      >
        <ControleAcesso />
        <p className={styles.filterDetail}> Controle de Acesso</p>
      </div>
    </section>
  );
};

Filters.propTypes = {
  aoFiltrar: PropType.func.isRequired,
};
