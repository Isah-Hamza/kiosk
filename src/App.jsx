import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { routes } from "./utils/routes";

import "react-circular-progressbar/dist/styles.css";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import CreateProduct from "./pages/Products/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => (
          // <Route key={idx} path={route.path} Component={route.component} exact={true} />
          <Route
            key={idx}
            path={route.path}
            Component={CreateProduct}
            exact={true}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
