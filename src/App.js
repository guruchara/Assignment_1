import { Route, Routes } from 'react-router-dom';
import './App.css';
import Assignment from './components/assignment/Assignment';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/assignment' element={<Assignment />} />
      </Routes>
    </div>
  );
}

export default App;
