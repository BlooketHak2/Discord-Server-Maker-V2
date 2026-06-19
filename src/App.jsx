import { useState, useEffect } from "react";
import { login, signUp, logout, listenAuth } from "./auth";

export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsub = listenAuth(setUser);
    return () => unsub();
  }, []);

  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Login</h1>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button onClick={() => login(email, password)}>
          Login
        </button>

        <button onClick={() => signUp(email, password)}>
          Sign Up
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>Logged in as: {user.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}