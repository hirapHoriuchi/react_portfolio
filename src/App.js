
import './App.css';
import Header from "./components/Header";
import HomePage from './components/HomePage';
import SkillPage from './components/SkillPage';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

// mapでダミーデータを作成 => 32.Pageの作成を参照
function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/skill" element={<SkillPage/>}/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;