import axios from "axios";

export const useAuth = () => {
  const handleLogin = async (username: string, password: string) => {
    const res = await axios.post("/api/login", { username, password });
    return res;
  };

  return { handleLogin };
};
