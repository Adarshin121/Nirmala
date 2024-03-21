
import { Route, Routes  } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards';
import Displayapi from './components/Displayapi';
import Showdbdata from './components/Showdbdata';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div className="App">
      {/* <Displayapi/> */}
      {/* <Cards/> */}
      
      <Routes>
        <Route path='/' element={<Showdbdata/>}/>
        <Route path="/:id/edit" element={<EditStudent/>} />
        
      </Routes>
    </div>
  );
}

export default App;
