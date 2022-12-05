import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import AdminLogin from './pages/AdminLogin';
import AdminHome from './pages/AdminHome';
import AdminAddItems from './pages/AdminAddItems';
import AdminViewAllItems from './pages/AdminViewAllItems';
import CalculatorChange from './pages/CalculatorChange';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="adminLogin" element={<AdminLogin />} />
          <Route path="adminHome" element={<AdminHome />} />
          <Route path="adminAddItems" element={<AdminAddItems />} />
          <Route path="adminViewAllItems" element={<AdminViewAllItems />} />
          <Route path="calculatorChange" element={<CalculatorChange />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
