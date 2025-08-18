import { useState } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { AuthContext } from "./AuthContextDef";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ id: string; name: string } | null>(null);
  const navigate = useNavigate();

  // Mock valid credentials
  const validCredentials = {
    user123: "password123",
    admin: "admin123",
    test: "test123",
  };

  const login = async (
    userId: string,
    password: string
  ): Promise<{ success: boolean; message?: string }> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check if userId exists and password matches
    if (
      validCredentials[userId as keyof typeof validCredentials] === password
    ) {
      // Set the authenticated user
      setUser({
        id: userId,
        name: userId.charAt(0).toUpperCase() + userId.slice(1), // Simple name formatting
      });

      // Navigate to main page after successful login
      navigate(routes.main);
      return { success: true };
    }

    return {
      success: false,
      message: "아이디 또는 비밀번호가 일치하지 않습니다.",
    };
  };

  const logout = () => {
    setUser(null);
    navigate(routes.login);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
