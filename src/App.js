import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import ContactUS from "./Components/Pages/ContactUS";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Products from "./Components/Pages/Products";
import SignIn from "./Components/Pages/SignIn"
import Sign_Up from "./Components/Pages/Sign_Up";
import Forgot from "./Components/Pages/Forgot";
import Footer from "./Components/Footer";
//import Admin from "./Components/Admin/Admin";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={< Products />} />
        <Route path="contact" element={<ContactUS />} />
        <Route path="signup" element={<Sign_Up />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="forgot" element={<Forgot/>}/>
        {/* <Route path="admin" element={<Admin/>}/> */}

      </Routes>
      
      <Footer/>
    </div>

  );
}

export default App;
