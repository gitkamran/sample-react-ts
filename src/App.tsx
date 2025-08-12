import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import HomeLayout from "./pages/HomeLayout";
import AboutLayout from "./pages/AboutLayout";

function App() {
  return (
    <Routes>
      <Route index element={<HomeLayout />} />
      <Route path="about-us" element={<AboutLayout />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
