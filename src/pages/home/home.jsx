
import { BrowserRouter,Routes, Router } from "react-router-dom";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import Footer from "../../components/footer/footer";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Board />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
