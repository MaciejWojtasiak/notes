import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import {BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import SingleNote from "./pages/SingleNote/SingleNote";

function App() {
  const user = false;

  return (
    <div className="App">
      <Router>
        <Navbar />
        {user ? <Routes>        
            <Route path="/" element={<Home />}/>
            <Route path="/note/:id" element={<SingleNote />}/>
          </Routes> : <Login />}
          
       </Router>
    </div>
  )
}

export default App
