import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/404/Notfound";

// Products
import Haircare from "./pages/products/Haircare";
import Cosmetics from "./pages/products/Cosmetics";
import Haircolor from "./pages/products/Haircolor";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/products">
          <Route path="haircare" element={<Haircare />} />
          <Route path="cosmetics" element={<Cosmetics />} />
          <Route path="haircolor" element={<Haircolor />} />
        </Route>
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="404" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
