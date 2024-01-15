import auth from "@/services/auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleLogin = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    try {
      await axios.post("/api/login", { username, password });
      router.push("/");
    } catch (error: any) {
      if (error.response.status == 500) {
        setError("Something went wrong, try again.");
      } else {
        setError(error.message);
      }
    }
  };

  return { handleLogin, error };
};

export const useRegister = () => {
  const router = useRouter();
  const [error, setError] = useState<any>(null);

  const handleRegister = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const repeatPassword = formData.get("repeatPassword") as string;
    const subscribeToNewsLetter = formData.get("subscribeToNewsLetter") as any;
    const gender = formData.get("gender") as string;
    const status = formData.get("status") as string;
    const yearOfBirth = formData.get("yearOfBirth") as any;

    const data = {
      username,
      password,
      repeatPassword,
      subscribeToNewsLetter: !!subscribeToNewsLetter,
      gender,
      status,
      yearOfBirth: Number(yearOfBirth),
    };
    try {
      await auth.register(data);
      await auth.login(username, password);
      router.push("/");
    } catch (error) {
      setError(error);
    }
  };

  return { handleRegister, error };
};
