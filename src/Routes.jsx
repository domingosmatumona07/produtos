import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Notebook } from "./routes/Notebook";
import { Smartphone } from "./routes/Smartphone";
import { Tablet } from "./routes/Tablet";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/smartphone" element={<Smartphone />} />
        <Route path="/tablet" element={<Tablet />} />
      </Routes>
    </Router>
  );
}
