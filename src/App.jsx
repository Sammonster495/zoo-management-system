import Birds from "./components/Birds";
import HomePage from "./components/homePage";
import Mammal from "./components/Mammal";
import Reptiles from "./components/Reptiles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/mammals" element={<Mammal />}/>
        <Route path="/birds" element={<Birds />}/>
        <Route path="/reptiles" element={<Reptiles />}/>
      </Routes>
    </Router>
  );
}