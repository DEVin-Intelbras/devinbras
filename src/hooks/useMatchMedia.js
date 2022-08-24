import { useState, useEffect } from "react";

export const useMatchMedia = (mediaTrigger = "600px") => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      const matchMedia = window.matchMedia(`(max-width: ${mediaTrigger})`);
      setIsMobile(matchMedia.matches);
    };

    // Chamar a função quando o componente é renderizado para verificar se é mobile
    resizeListener();

    // set resize listener para ficar escutando o evento de resize da tela
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener quando o componente é desmontado
      window.removeEventListener("resize", resizeListener);
    };
  }, [mediaTrigger]);

  return {
    isMobile,
  };
};
