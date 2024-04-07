import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/Home';
import AddEdit from './pages/addEdit/AddEdit';

function App() {
    
return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddEdit/>}/>
        <Route path="/update/:id" element={<AddEdit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
