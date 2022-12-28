import logo from './logo.svg';
import './App.css';
import RenderingFirst from "./components/RenderingPages/RenderingFirst";
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GeneralComponent from "./components/TeamsInternalComponents/GeneralComponent"
import AllAssignment from './components/TeamsInternalComponents/AllAssignment';
import ParticularAssignment from './components/TeamsInternalComponents/ParticularAssignment';
import JoinOrCreate from './components/RenderingPages/JoinOrCreate';
import Second from './components/RenderingPages/Second';
import GrpState from './Context/GrpContext/GrpState';

function App() {
  return (
    <GrpState>
      <Routes forceRefresh={true}>
        <Route exact path="/home" element={<RenderingFirst />} />
        <Route exact path="/grp" element={<GeneralComponent />} />
        <Route exact path="/assignment" element={<AllAssignment />} />
        <Route exact path="/assignment/:id" element={<ParticularAssignment />} />
        <Route exact path="/discover" element={<JoinOrCreate />} />
        <Route exact path="/test" element={<Second />} />
      </Routes>
    </GrpState>
  );
}

export default App;
