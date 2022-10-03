//Global imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//File imports
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import { useEffect, useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {}, []);

  return (
    <Router>
      {loggedIn ? (
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
