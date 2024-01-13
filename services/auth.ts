import { decodeJWT } from "@/utils";
import axios, { AxiosResponse } from "axios";

interface User {
  id: string;
  username: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

interface LoginResponse {
  jwt: string;
}

interface RegisterRequestData {
  username: string;
  password: string;
  repeatPassword: string;
  subscribeToNewsLetter: boolean;
  gender: string;
  status: string;
  yearOfBirth: number;
}

interface RegisterResponse {
  message: string;
}

class Auth {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.API_URL!;
  }

  async login(
    username: string,
    password: string
  ): Promise<LoginResponse | any> {
    try {
      const { data }: AxiosResponse<LoginResponse> = await axios.post(
        `https://junior-test.mntzdevs.com/api/login/`,
        {
          username,
          password,
        }
      );
      return data.jwt;
    } catch (error: any) {
      throw error.response.data.message ?? "Something went wrong.";
    }
  }

  async register(data: RegisterRequestData): Promise<RegisterResponse | null> {
    try {
      const response: AxiosResponse<RegisterResponse> = await axios.post(
        `https://junior-test.mntzdevs.com/api/register/`,
        data
      );

      return response.data;
    } catch (error: any) {
      throw error.response.data.message ?? "Something went wrong.";
    }
  }

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
}

const auth = new Auth();

export default auth;
