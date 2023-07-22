import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./utils/routes";

import "react-circular-progressbar/dist/styles.css";

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
