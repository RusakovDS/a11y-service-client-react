import { Routes, Route } from "react-router-dom";
import AuthWrapper from "./components/AuthWrapper";
import IsNotAutorized from "./components/IsNotAutorized";
import Layout from "./components/layout/Layout";
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
        <Route element={<AuthWrapper />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Route>
      <Route element={<IsNotAutorized />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
