import {
  Comunicacao,
  ControleAcesso,
  Energia,
  EnergiaSolar,
  Redes,
  Seguranca,
} from '@/assets/icons';

import styles from './Filters.module.css';

export const Filters = () => {
  return (
    <section className={styles.filter}>
      <div className={styles.filterGroup}>
        <Seguranca />
        <p className={styles.filterDetail}>Segurança Eletrônica</p>
      </div>
      <div className={styles.filterGroup}>
        <Redes />
        <p className={styles.filterDetail}>Redes</p>
      </div>
      <div className={styles.filterGroup}>
        <Comunicacao />
        <p className={styles.filterDetail}>Comunicação</p>
      </div>
      <div className={styles.filterGroup}>
        <EnergiaSolar />
        <p className={styles.filterDetail}>Energia Solar</p>
      </div>
      <div className={styles.filterGroup}>
        <Energia />
        <p className={styles.filterDetail}>Energia</p>
      </div>
      <div className={styles.filterGroup}>
        <ControleAcesso />
        <p className={styles.filterDetail}> Controle de Acesso</p>
      </div>
    </section>
  );
};
