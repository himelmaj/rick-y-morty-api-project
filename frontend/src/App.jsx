import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Characters } from "./pages/Characters";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/characters" />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
