import React from "react";
import { MainWrapper } from "./components/common/main-wrapper";
import { Header } from "./components/common/header";
import { MainBody } from "./components/container/main-body";
import { Footer } from "./components/container/footer";

function App() {
  return (
    <MainWrapper>
      <Header />
      <MainBody />
      <Footer />
    </MainWrapper>
  );
}

export default App;
