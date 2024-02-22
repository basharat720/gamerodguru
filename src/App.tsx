import { BrowserRouter } from "react-router-dom";
import { MainWrapper } from "./components/common/main-wrapper";
import { Header } from "./components/common/header";
import { MainBody } from "./components/container/main-body";
import { Footer } from "./components/container/footer";

function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <Header />
        <MainBody />
        <Footer />
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
