import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Orders from "./pages/Order";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;

