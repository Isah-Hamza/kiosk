import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const routes = [
    {
      title: "Login",
      path: "/login",
      component: Login,
    },
    {
      title: "Login",
      path: "/",
      component: Login,
    },
    {
      title: "Home",
      path: "/home",
      component: Home,
    },
  ];

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
