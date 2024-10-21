import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TravelListPage from "./pages/TravelListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TravelListPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
