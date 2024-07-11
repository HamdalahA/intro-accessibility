import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home/Home';
import Inaccessible from './Inaccessible/Inaccessible';
import Navbar from './Navbar/Navbar';
import Accessible from './Accessible/Accessible';

function App() {

  return (
    <div>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inaccessible" element={<Inaccessible />} />
                <Route path="/accessible" element={<Accessible />} />
            </Routes>
    </div>
);
}

export default App
