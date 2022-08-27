import { Routes, Route, Navigate } from "react-router-dom";

import {
  About,
  Contacts,
  Home,
  NewProduct,
  ProductDetails,
  Products,
} from "@pages";
import { RotaPrivada } from "./RotaPrivada";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
      <Route
        path="/produtos/novo"
        element={
          <RotaPrivada>
            <NewProduct />
          </RotaPrivada>
        }
      />
      <Route path="/produtos/:id" element={<ProductDetails />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contacts />} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/cadastro" element={<h1>Cadastro</h1>} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
