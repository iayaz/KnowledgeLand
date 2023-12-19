
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from './scenes/homePage/index.jsx';
import LoginPage from './scenes/loginPage/index.jsx';
import ProfilePage from './scenes/profilePage/index.jsx';


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/profile/:userId" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
