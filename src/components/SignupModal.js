import { signup, useAuth, logout, login } from "../firebase.config";
import { useRef, useState } from "react";
import Layout from "./Layout";

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
    <Layout>
      <div id="fields" className="w-1/2 m-auto ">
        <input
          ref={emailRef}
          className="shadow appearance-none border rounded w-full py-6 px-3 text-grey-darker my-4 text-2xl"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="shadow appearance-none border rounded w-full py-6 px-3 text-grey-darker my-4 "
          type="password"
          placeholder="Password"
        />
        <button
          disabled={loading || currentUser}
          onClick={handlerSignup}
          className="text-center text-xl border-purple-500 border-2 pl-4 pr-4 pt-2 pb-2 text-white rounded-md hover:bg-purple-500"
        >
          Sign Up
        </button>
        <br></br>
      </div>
    </Layout>
  );
}
