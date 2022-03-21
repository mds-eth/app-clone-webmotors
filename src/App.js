import React from "react";

import ZeroKm from "./pages/ZeroKm";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Noticies from "./pages/Noticies";
import WebMotors from "./pages/WebMotors";
import Banner from "./components/Banner";
import Header from "./components/Header";
import BoxSearch from "./pages/BoxSearch";
import Categories from "./pages/Categories";
import MostSearched from "./pages/MostSearched";
import Recommended from "./pages/Recommended";

import { ContainerMain, ContainerHelp } from './styles/styles';

function App() {
   return (
      <>
         <Header />
         <Banner />
         <ContainerMain>
            <BoxSearch />
            <Categories />
            <Services />
            <MostSearched />
            <ZeroKm />
            <Recommended />
            <Noticies />
            <WebMotors />
         </ContainerMain>
         <ContainerHelp onClick={() => window.open('https://ajuda.webmotors.com.br/hc/pt-br?lkid=1439', '_blank')}>
            <p>Nossos canais de atendimento são 100% digitais. Precisa de ajuda? <b>CLIQUE AQUI</b></p>
         </ContainerHelp>
         <Footer />
      </>
   );
}

export default App;
