import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {
  let [isLogin , setIsLogin] = useState(false);
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login setIsLogin={setIsLogin}/>} />
        
        {isLogin?<Route path='/dashboard' element={<Dashboard setIsLogin={setIsLogin}/>} />:<Route path='/dashboard' element={<Login setIsLogin={setIsLogin}/>} />}
      </Routes>
    </div>
  );
}

export default App;
