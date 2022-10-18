import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

function Routers() {
  const isAuthorized = localStorage.getItem("player") != null;

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthorized ? (
                <Navigate to="/game-list" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route exact path={"/"} element={<HomePage />} />
          <Route exact path={"/game-list"} element={<HomePage />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routers;
