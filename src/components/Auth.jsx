import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function Auth({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(err.message);
    }
  }

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(err.message);
    }
  }

  async function logout() {
    await signOut(auth);
  }

  if (user) {
    return (
      <div>
        <p>Welcome, {user.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signup}>Sign Up</button>
      <button onClick={login}>Login</button>
    </div>
  );
}
