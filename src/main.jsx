import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import EmployeeDetails from "./pages/EmployeeDetails";
import Hiring from "./pages/Hiring";
import CalendarPage from "./pages/Calendar";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="employees" element={<Employees />} />
        <Route path="employee/:id" element={<EmployeeDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="hiring" element={<Hiring />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
