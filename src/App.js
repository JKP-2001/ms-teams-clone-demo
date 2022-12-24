import logo from './logo.svg';
import './App.css';
import RenderingFirst from "./components/RenderingPages/RenderingFirst";
import { Link,BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GeneralComponent from "./components/TeamsInternalComponents/GeneralComponent"
import AllAssignment from './components/TeamsInternalComponents/AllAssignment';
import ParticularAssignment from './components/TeamsInternalComponents/ParticularAssignment';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<RenderingFirst/>}/>
      <Route exact path="/grp" element={<GeneralComponent/>}/>
      <Route exact path="/assignment" element={<AllAssignment/>}/>
      <Route exact path="/assignment/:id" element={<ParticularAssignment/>}/>
    </Routes>
  );
}

export default App;
