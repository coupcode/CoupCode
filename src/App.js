import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import { NavProvider } from './context/NavProvider';

function App() {
  return (
    <NavProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </NavProvider>
  );
}

export default App;