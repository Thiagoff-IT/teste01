import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Assistncia from "./pages/Assistencia";
import Contato from "./pages/Contato";
import Catlogos from "./pages/Catlogos";
import ProdutoLogistas from "./pages/ProdutoLogistas";
import ProdutoLogistas1 from "./pages/ProdutoLogistas1";
import ProdutoCompra from "./pages/ProdutoCompra";
import ProdutoCompra1 from "./pages/ProdutoCompra1";
import ProdutoDetalhes from "./pages/ProdutoDetalhes";
import ProdutoDetalhes1 from "./pages/ProdutoDetalhes1";
import SobreANauber from "./pages/SobreANauber";
import Produtos from "./pages/produtos";
import CategoriasDeProdutos from "./pages/CategoriasDeProdutos";
import Categorias2 from "./pages/Categorias2";
import Categoria from "./pages/Categoria";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/assistncia":
        title = "";
        metaDescription = "";
        break;
      case "/contato":
        title = "";
        metaDescription = "";
        break;
      case "/catlogos":
        title = "";
        metaDescription = "";
        break;
      case "/produto-logistas":
        title = "";
        metaDescription = "";
        break;
      case "/produto-logistas1":
        title = "";
        metaDescription = "";
        break;
      case "/produto-compra":
        title = "";
        metaDescription = "";
        break;
      case "/produto-compra1":
        title = "";
        metaDescription = "";
        break;
      case "/produto-detalhes":
        title = "";
        metaDescription = "";
        break;
      case "/produto-detalhes1":
        title = "";
        metaDescription = "";
        break;
      case "/sobre-a-nauber":
        title = "";
        metaDescription = "";
        break;
      case "/produtos":
        title = "";
        metaDescription = "";
        break;
      case "/categorias-de-produtos":
        title = "";
        metaDescription = "";
        break;
      case "/categorias-2":
        title = "";
        metaDescription = "";
        break;
      case "/categoria":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/assistncia" element={<Assistncia />} />

      <Route path="/contato" element={<Contato />} />

      <Route path="/catlogos" element={<Catlogos />} />

      <Route path="/produto-logistas" element={<ProdutoLogistas />} />

      <Route path="/produto-logistas1" element={<ProdutoLogistas1 />} />

      <Route path="/produto-compra" element={<ProdutoCompra />} />

      <Route path="/produto-compra1" element={<ProdutoCompra1 />} />

      <Route path="/produto-detalhes" element={<ProdutoDetalhes />} />

      <Route path="/produto-detalhes1" element={<ProdutoDetalhes1 />} />

      <Route path="/sobre-a-nauber" element={<SobreANauber />} />

      <Route path="/produtos" element={<Produtos />} />

      <Route
        path="/categorias-de-produtos"
        element={<CategoriasDeProdutos />}
      />

      <Route path="/categorias-2" element={<Categorias2 />} />

      <Route path="/categoria" element={<Categoria />} />
    </Routes>
  );
}
export default App;
