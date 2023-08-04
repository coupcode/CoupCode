import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import Button01 from './components/Button01';

function App() {
  return (
    <div className="App">
      {/* <Button01 /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
