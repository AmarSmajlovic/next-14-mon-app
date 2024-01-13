"use client";
import { useAuth } from "@/hooks/auth";
import auth from "@/services/auth";
import { useRouter } from "next/navigation";
import React, { FormEvent, use, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<any>(null);
  const { handleLogin } = useAuth();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      await handleLogin(username, password);
      router.push("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      Login Page
      <form onSubmit={onSubmit}>
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
};

export default Login;
