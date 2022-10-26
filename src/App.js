import './App.css';


// router dom
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

//Components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

//Pages
import Anuncie from './pages/Anuncie/Anuncie'
import Apartamentos from './pages/Apartamentos/Apartamentos'
import Cadastrar from './pages/Cadastrar/Cadastrar'
import Login from './pages/Login/Login'
import Sobre from './pages/Sobre/Sobre'
import Home from './pages/Home/Home'

function App() {
  return (
    <div >
      <BrowserRouter >
        <Header />
        <div className="main-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Cadastrar />} />
            <Route path='/login' element={<Login />} />
            <Route path='/anuncie' element={<Anuncie />} />
            <Route path='/apartamentos' element={<Apartamentos />} />
            <Route path='/sobre' element={<Sobre />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
