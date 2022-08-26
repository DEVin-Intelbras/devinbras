import { useState } from "react";

import { ButtonPrimary, ImageMini, EspecificacoesTecnicas } from "@components";
import { formatMoney } from "@utils";

import styles from "./ProductDetails.module.css";

export const ProductDetails = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const produto = {
    id: 13,
    name: "Adaptador USB Wireless Intelbras IWA 3001",
    price: 85.9,
    image: "prod-13.png",
    category: "redes",
    details: "/adaptador-iwa-3001/p",
    description:
      "O IWA 3001 é um adaptador USB de alto ganho que permite conectar via Wi-Fi notebooks e desktops sem placas wireless ou com placas de velocidades inferiores a 300 Mbps. O modelo é ideal para quem busca uma solução fácil de instalar e com mais alcance de sinal.",
    technicalSpecifications: [
      {
        title: "Garantia",
        description: "1 ano",
      },
      {
        title: "Modelo do produto",
        description: "IWA 3001",
      },
      {
        title: "Cor",
        description: "Preto",
      },
      {
        title: "Quantidade pacote",
        description: "01",
      },
      {
        title: "Comprimento do produto",
        description: "5,8 cm",
      },
      {
        title: "Largura do produto",
        description: "1,9 cm",
      },
      {
        title: "Altura do produto",
        description: "10,9 cm",
      },
      {
        title: "Peso do produto",
        description: "0,006 kg",
      },
    ],
    imageDetails: ["prod-13.png", "prod-13-2.png", "prod-13-3.png"],
  };

  const handleSelectedImage = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className={styles.container}>
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
              src={`assets/products/${produto.imageDetails[selectedImageIndex]}`}
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
    </div>
  );
};
