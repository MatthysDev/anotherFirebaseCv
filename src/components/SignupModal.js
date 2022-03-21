import { signup, useAuth, logout, login } from "../firebase.config";
import { useRef, useState } from "react";

export default function SignupModal() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handlerSignup() {
    setLoading(true);
    try {
      signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Un compte est déjà créé avec cet email!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <>
      <div id="fields">
        <input
          ref={emailRef}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          placeholder="Email"
        ></input>
        <input
          ref={passwordRef}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          type="password"
          placeholder="Password"
        ></input>
        <button disabled={loading || currentUser} onClick={handlerSignup}>
          Sign Up
        </button>
        <br></br>
      </div>
    </>
  );
}
