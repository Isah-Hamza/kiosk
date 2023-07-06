import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { routes } from "./utils/routes";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} Component={route.component} exact={true} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
