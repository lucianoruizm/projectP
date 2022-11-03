import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { FavoritesPage } from "./pages/FavoritesPage";
import { LandingPage } from './pages/LandingPage';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/favoritos" element={<FavoritesPage />} />
        </Routes>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;