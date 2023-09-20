import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddCourse from './components/AddCourse';
import './App.css';
import EditCourse from './components/EditCourse';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/add-course' element={<AddCourse />} />
        <Route path='/edit-course/:id' element={<EditCourse />} />
      </Routes>
    </div>
  );
}

export default App;
