import { useRef, useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LOGIN_URL = "http://localhost:3001/login";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(LOGIN_URL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pwd,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.status === "success") {
          localStorage.setItem("player", JSON.stringify(result?.player));
          localStorage.setItem("username", JSON.stringify(user));
          navigate("/game-list");
        } else if (result?.status === "fail") {
          setErrMsg(result.error);
          errRef.current.focus();
        }
      });
  };

  return (
    <>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-content">
            <h3 className="login-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter username"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                className="form-control mt-1"
                placeholder="Enter password"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
