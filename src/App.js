import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter,Routes,Route } from 'react-router';
import Signup from './pages/Signpage';
import Login from './pages/Loginpage';

function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={  <Homepage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />

        
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
