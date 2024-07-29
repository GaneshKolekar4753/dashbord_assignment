
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Student from './pages/Student';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/student' element={<Student/>}/>
      </Routes>
    </div>
  );
}

export default App;
