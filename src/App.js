
import './App.css';
import Sidebar from './Components/Sidebar';
import { Routes,Route } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';

function App() {

  return (
 <>
  <Routes>
    <Route path='/' element={<Sidebar/>}/> 
    <Route path="*" element={<PageNotFound />} />
  </Routes>
 </>
  );
}

export default App;
