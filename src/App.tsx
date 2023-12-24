import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/layout/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<div>Home</div>} />
        </Route>
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<Navigate replace to="auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
