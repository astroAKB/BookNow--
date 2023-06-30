import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import ForgetPassword from "./Pages/ForgetPassword"
import Offers from "./Pages/Offers"
import Profile from "./Pages/Profile"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </Router>
    </>  
  );
}

export default App;
