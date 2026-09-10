import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { Navigation, Footer } from "./components/index";

function Layout() {
  return (
    <div className="app-shell">
      <Navigation />
      <main>
        <Outlet />
        <Footer />
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
