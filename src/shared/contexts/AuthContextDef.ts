import { createContext } from "react";

interface User {
  id: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  login: (
    userId: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
