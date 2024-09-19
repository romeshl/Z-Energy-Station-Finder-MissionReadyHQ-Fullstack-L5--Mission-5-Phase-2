// src/App.jsx
import { Routes, Route} from 'react-router-dom';

// Imports Nav, Footer, Hom and FindAStation components
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import FindAStation from './Pages/FindAStation';


function App() {
  return (
    <div>
      <Nav /> {/* Navigation bar common to all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-a-station" element={<FindAStation />} />
      </Routes>
      <Footer /> {/* Footer common to all pages */}
    </div>
  );
}

export default App;
