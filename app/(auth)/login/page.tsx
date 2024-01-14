"use client";
import { useLogin } from "@/hooks/auth";
import React from "react";

const Login = () => {
  const { handleLogin, error } = useLogin();

  return (
    <div>
      Login Page
      <form action={handleLogin}>
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
};

export default Login;
