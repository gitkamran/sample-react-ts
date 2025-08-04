import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
