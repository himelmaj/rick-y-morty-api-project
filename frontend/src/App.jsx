import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";

import { Characters } from "./pages/Characters";
import { Locations } from "./pages/Locations";
import { Episodes } from "./pages/Episodes";
import { Index } from "./pages/Index";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/index" />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/episodes" element={<Episodes />}></Route>
          <Route path="/locations" element={<Locations />}></Route>
          <Route path="/index" element={<Index />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
