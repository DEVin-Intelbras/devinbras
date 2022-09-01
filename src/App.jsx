import { BrowserRouter } from "react-router-dom";

import { Header, Footer } from "@components";
import { Router } from "@router";
import { AutenticacaoProvider } from "@contexts";
import { ToastContainer } from "react-toastify";

import "./assets/css/app.css";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <BrowserRouter>
      <AutenticacaoProvider>
        <div className="app">
          <Header />

          <main className="main">
            <Router />
          </main>

          <Footer />
        </div>
      </AutenticacaoProvider>
      <ToastContainer position="bottom-center" closeButton />
    </BrowserRouter>
  );
}
