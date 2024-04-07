import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/Home';
import AddEdit from './pages/addEdit/AddEdit';
import View from './pages/view/View';

function App() {
    
return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddEdit/>}/>
        <Route path="/update/:id" element={<AddEdit/>}/>
        <Route path="/view/:id" element={<View/>}/>
      </Routes>
    </Router>
  );
}

export default App;
