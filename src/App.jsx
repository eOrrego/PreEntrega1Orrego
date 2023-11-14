import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavbarPage from "./components/Navbar/NavbarPage";

const App = () => {
  return (
    <>
      <NavbarPage />
      <ItemListContainer greeting={"Bienvenido a Club de beneficios"} />
    </>
  );
};

export default App;