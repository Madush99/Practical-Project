import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/LoginScreen/loginScreen';
import ReportScreen from './screens/ReportScreen/reportScreen';
import TaskHome from './screens/TaskScreen/taskHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/report' element={<ReportScreen />} />
        <Route path='/task' element={<TaskHome/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
