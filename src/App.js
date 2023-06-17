
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './Data';
import DataItem from './DataItem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Data/>}/>
        <Route path='/:id' element={<DataItem/>}/>
      </Routes>      
    </div>
  );
}

export default App;
