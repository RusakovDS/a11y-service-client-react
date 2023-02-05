import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/books" element={<BookList />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
