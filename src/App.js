import { Routes, Route } from "react-router-dom";
import Header from "./Hero/Header";
import HeaderT from "./Hero/HeaderT";
import Overview from "./Hero/Overview";
import Dashboard from "./Hero/Dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <HeaderT />
            <Overview />
            <Dashboard />
          </>
        }
      />
      <Route path="/aboutUs" />
    </Routes>
  );
}

export default App;
