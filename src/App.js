import { Accueil } from "./components/Accueil";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


const App = () => {
  return (
    <div className="App">
      <Header />        
      <Accueil />
      <Footer />
    </div>
  );
}

export default App;
