import logo from './logo.svg';
import './App.css';
import RenderingFirst from "./components/RenderingPages/RenderingFirst";
import { Link,BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GeneralComponent from "./components/TeamsInternalComponents/GeneralComponent"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<RenderingFirst/>}/>
      <Route exact path="/grp" element={<GeneralComponent/>}/>
    </Routes>
  );
}

export default App;
