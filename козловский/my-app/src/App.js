import './App.css';
import { Route, Routes, } from 'react-router-dom';
import Main from './components/pages/main/main';
import Registration from './components/pages/register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
