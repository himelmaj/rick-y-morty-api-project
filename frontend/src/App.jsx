import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Page404 from "./pages/Page404";
import { Characters } from "./pages/Characters";
import { Locations } from "./pages/Locations";
import { Episodes } from "./pages/Episodes";
import { Index } from "./pages/Index";
import { CharacterPage } from "./pages/CharacterPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/index" />}></Route>

          <Route path="*" element={<Navigate to="/404" />}></Route>
          <Route path="/404" element={<Page404 />}></Route>

          <Route path="/characters/page/:page" element={<Characters />}></Route>
          <Route path="/character/id/:id" element={<CharacterPage />}></Route>

          <Route path="/episodes" element={<Episodes />}></Route>
          <Route path="/locations" element={<Locations />}></Route>
          <Route path="/index" element={<Index />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
