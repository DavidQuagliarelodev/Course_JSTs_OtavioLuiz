import Header from "./components/header";
import Footer from "./components/footer";
import Perfil from "./components/Perfil";
import Counter from "./components/Count";
import Form from "./components/Form";
import "./app.css";

function App() {
  return (
    <>
      <Header imageUrl="src\assets\img\logo.png" />

      <div className="app">
        <Perfil
          img="src\assets\img\FotoPerfil.jpeg"
          alt="FotoPerfil"
          name="David Quagliarelo"
          bio="Salve Rapaziada !"
        />
      </div>
      <Counter />
      <Form/>

      <Footer name="DavidQuagliarelo" />
    </>
  );
}

export default App;
