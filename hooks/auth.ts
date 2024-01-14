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
