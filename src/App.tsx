import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css'
import { NavBar } from './NavBar.tsx';
import Acheteur from './Acheteur/Acheteur.tsx'
import Artisan from './Artisan/Artisan.tsx';

const App = () => {
  return(
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/artisan" element={<Artisan />} />
          <Route path="/" element={<Acheteur />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;