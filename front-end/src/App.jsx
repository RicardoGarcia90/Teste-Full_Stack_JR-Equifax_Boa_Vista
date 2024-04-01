import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="*"
          element={<h1 style={{ color: 'white' }}>Not found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
