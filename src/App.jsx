import { BrowserRouter } from "react-router-dom";

import { Header, Footer } from "@components";
import { Router } from "@router";
import { AutenticacaoProvider } from "@contexts";

import "./assets/css/app.css";

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
    </BrowserRouter>
  );
}
