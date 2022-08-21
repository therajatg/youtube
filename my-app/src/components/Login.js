import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../authContext";

export function Login() {
  const { setIsLoggedIn } = useAuth();
  const [detail, setDetail] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = (e) => {
    e.preventDefault();
    if (detail.username === "rajat" && detail.password === "123") {
      setIsLoggedIn(true);
      const goto = `${location.state.path}` ?? "/";
      navigate(goto, { replace: true });
    }
  };
  return (
    <form onSubmit={loginHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setDetail({ ...detail, username: e.target.value })}
          value={detail.username}
        />
      </div>

      <br />
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          onChange={(e) => setDetail({ ...detail, password: e.target.value })}
          value={detail.password}
        />
      </div>

      <br />
      <button>Login</button>
    </form>
  );
}
