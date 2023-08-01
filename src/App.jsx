import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { routes } from "./utils/routes";

import "react-circular-progressbar/dist/styles.css";
import { createContext, useState } from "react";
import { GET_STORAGE_ITEM } from "./config/storage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyAccount from "./pages/Register/VerifyAccount";
import CreateBusiness from "./pages/Register/CreateBusiness";

export const ToggleSidebarContext = createContext();
export const PartnerContext = createContext();

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [partner, setPartner] = useState(GET_STORAGE_ITEM("account"));

  return (
    <ToggleSidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <PartnerContext.Provider value={{ partner, setPartner }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" Component={Login} exact />
            <Route path="/register" Component={Register} exact />
            <Route path="/verify-account" Component={VerifyAccount} exact />
            <Route path="/create-business" Component={CreateBusiness} exact />
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
      </PartnerContext.Provider>
    </ToggleSidebarContext.Provider>
  );
}

export default App;
