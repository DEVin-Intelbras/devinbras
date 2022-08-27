import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  ButtonPrimary,
  ImageMini,
  EspecificacoesTecnicas,
  Loader,
  CardMensagem,
} from "@components";
import { formatMoney, statusType } from "@utils";
import { useProduto } from "@hooks";

import styles from "./ProductDetails.module.css";

export const ProductDetails = () => {
  const { id } = useParams();

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { produto, status } = useProduto({ id });

  const handleSelectedImage = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className={styles.container}>
      {status === statusType.isLoading && <Loader />}

      {status === statusType.isComplete && (
        <>
          <section className={`${styles.containerInfo}`}>
            <div className={styles.content}>
              <div className={styles.containerMiniImages}>
                {produto.imageDetails.map((image, index) => (
                  <ImageMini
                    key={index}
                    image={image}
                    onClick={() => handleSelectedImage(index)}
                    selected={selectedImageIndex === index}
                  />
                ))}
              </div>

              <div>
                <img
                  className={styles.imageMain}
                  src={`${baseUrl}/assets/products/${produto.imageDetails[selectedImageIndex]}`}
                  alt="Produto"
                />
              </div>

              <div className={styles.contentInfo}>
                <h2 className={styles.title}>{produto.name}</h2>

                <p className={styles.description}>{produto.description}</p>

                <strong className={styles.price}>
                  {formatMoney(produto.price)}
                </strong>

                <ButtonPrimary>Adicionar ao carrinho</ButtonPrimary>
              </div>
            </div>
          </section>

          <section className={styles.content}>
            <div className={styles.containerEspecificacoes}>
              <h2 className={styles.titleEspecificacoes}>
                Especificações técnicas
              </h2>

              <EspecificacoesTecnicas
                especificacoes={produto.technicalSpecifications}
              />
            </div>
          </section>
        </>
      )}

      {status === statusType.isError && (
        <div className={styles.content}>
          <CardMensagem
            titulo="Erro!"
            mensagem="Erro ao carregar o produto"
            tipo="erro"
          />
        </div>
      )}
    </div>
  );
};
