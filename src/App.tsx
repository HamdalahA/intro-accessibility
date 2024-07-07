import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home/Home';
import Inaccessible from './Inaccessible/Inaccessible';

function App() {

  return (
    <div>
        {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inaccessible" element={<Inaccessible />} />
            </Routes>
    </div>
);
}

export default App
