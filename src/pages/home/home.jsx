
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import Footer from "../../components/footer/footer";
import NotFound from "../notpage/404page";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/Board' element={<Board />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
