import { useRoutes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Deneme from "./pages/Deneme";
import UnderConstruction from "./pages/UnderConstruction";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/deneme", element: <Deneme /> },
    { path: "/about", element: <About /> },
    { path: "/under-construction", element: <UnderConstruction /> },
  ]);
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
