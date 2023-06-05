
import { BrowserRouter,Routes, Router } from "react-router-dom";
import Header from "../../components/header/header";
import Board from "../../components/board/board";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Board />
    </BrowserRouter>
  );
}

export default App;
