import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { Navigation } from "./components/index";

function Layout() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
