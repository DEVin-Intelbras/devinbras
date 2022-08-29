import {
  Comunicacao,
  ControleAcesso,
  Energia,
  EnergiaSolar,
  Redes,
  Seguranca,
} from "@assets/icons";

import PropType from "prop-types";

import styles from "./Filters.module.css";

const FILTER_OPTIONS = [
  {
    label: "Segurança Eletrônica",
    value: "segurança eletrônica",
    icon: <Seguranca />,
  },
  {
    label: "Redes",
    value: "redes",
    icon: <Redes />,
  },
  {
    label: "Comunicação",
    value: "comunicação",
    icon: <Comunicacao />,
  },
  {
    label: "Energia Solar",
    value: "energia solar",
    icon: <EnergiaSolar />,
  },
  {
    label: "Energia",
    value: "energia",
    icon: <Energia />,
  },
  {
    label: "Controle de Acesso",
    value: "controle de acesso",
    icon: <ControleAcesso />,
  },
];

export const Filters = ({ aoFiltrar, filtroSelecionado }) => (
  <section className={styles.filter}>
    {FILTER_OPTIONS.map((filter) => {
      const selected = filtroSelecionado === filter.value;

      return (
        <div
          key={filter.value}
          className={`${styles.filterGroup} ${
            selected ? styles.filterGroupSelected : ""
          }`}
          onClick={() => aoFiltrar(filter.value)}
        >
          {filter.icon}

          <p
            className={`${styles.filterDetail} ${
              selected ? styles.filterDetailSelected : ""
            }`}
          >
            {filter.label}
          </p>
        </div>
      );
    })}
  </section>
);

Filters.propTypes = {
  aoFiltrar: PropType.func.isRequired,
  filtroSelecionado: PropType.string,
};
