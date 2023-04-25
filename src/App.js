import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormComponent from './components/FormComponent'
import OneProductId from './views/OneProductId'
// import ManagerList from './components/ManagerList';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/manager' element={<FormComponent />} />
        <Route path="/manager/:id" element={<OneProductId />} />
      </Routes>

    </div>
  );
}

export default App;
