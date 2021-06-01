import Elemento from "./Elemento";
import Separador from "./Separador";
import Userefs from "./Referencia";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Elemento />
      <Separador />
      <Userefs />
      <Separador />
    </div>
  );
}
