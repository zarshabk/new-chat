import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./pages/Home"));
const App = () => {
  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  console.log("user", user, token);
  return (
    <>
      <React.Suspense
        fallback={
          <div className="min-h-screen w-full justify-center items-center">
            <Loader />
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={!token ? <Login /> : <Navigate to={"/home"} />}
            />
            <Route
              path="/register"
              element={!token ? <Register /> : <Navigate to={"/home"} />}
            />
            <Route
              path="/home/:convId?"
              element={token ? <Home /> : <Navigate to={"/"} />}
            />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </>
  );
};

export default App;
