import { Routes, Route, BrowserRouter } from "react-router-dom";

import { AuthGuard } from "./AuthGuard";
import { AuthLayout } from "../view/Layouts/AuthLayout";
import { Login } from "../view/Login";
import { Register } from "../view/Register";
import { Dashboard } from "../view/Dashboard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
