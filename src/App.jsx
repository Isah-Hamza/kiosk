import { BrowserRouter, Route, Routes } from "react-router-dom";
// import 'rsuite/dist/rsuite.min.css';
import "./App.css";
import { routes } from "./utils/routes";

import "react-circular-progressbar/dist/styles.css";
import { createContext, useState } from "react";

export const ToggleSidebarContext = createContext();

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ToggleSidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              Component={route.component}
              exact={true}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ToggleSidebarContext.Provider>
  );
}

export default App;
