import { Routes, Route } from "react-router-dom";
import AuthWrapper from "./components/AuthWrapper";
import IsLoggedIn from "./components/IsLoggedIn";
import PersistLogin from "./components/PersistLogin";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route element={<IsLoggedIn />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<AuthWrapper />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
