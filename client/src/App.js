import { BrowserRouter, Navigate,Routes, Route } from "react-router-dom";
import HomePage from './scenes/homePage/index.js'
import LoginPage from 'scenes/loginPage'
import ProfilePage from 'scenes/ProfilePage'

function App() {
  const mode = use
  return <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile/:userId" element={<ProfilePage/>}/>


      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
