import './App.css';
import { NavBar } from './components/NavBar';
import { CenteredText } from './components/CenteredText';
import { Cards } from './components/Cards';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="root">
      <NavBar />
      <CenteredText />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
