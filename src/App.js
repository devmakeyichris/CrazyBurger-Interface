import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/pages/login';
import { Route, Routes } from 'react-router-dom';
import OrderPage from './components/pages/order/OrderPage';
import ErrorPage from './components/pages/error/ErrorPage';

function App() {
  const [name, setName] = useState("")
 

  
  return (
    <Routes>
      <Route  path="/" element={<Login/>}/>
      <Route  path="/order" element={<OrderPage/>}/>
      <Route  path="*" element={<ErrorPage/>}/>
    </Routes>
  )
    
}

export default App;
