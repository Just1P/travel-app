import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TravelListPage from "./pages/TravelListPage";
import TravelSinglePage from "./pages/TravelSinglePage";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex justify-between items-center p-4 bg-red-400 text-white">
        <Link to="/">Home</Link>
      </nav>

      <div className="container mx-auto mt-10">
        <Routes>
          <Route path="/" element={<TravelListPage />} />
          <Route path="/:id" element={<TravelSinglePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
