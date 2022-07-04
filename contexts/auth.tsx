import { setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { signInRequest } from "../services/auth";

type User = {
  id: string;
  name: string;
  email: string;
};

interface ISignInData {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: User | null;
  signOut: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as IAuthContextData);

interface IAuthProvider {
  children: ReactNode;
}

export const AuthProvider = (props: IAuthProvider) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  const signIn = async (data: ISignInData) => {
    const { token, user } = await signInRequest(data);

    setCookie(undefined, "@bloug:token", token, {
      maxAge: 60 * 60 * 3,
    });
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setUser(user);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("@dowhile:token");
  };

  return (
    <AuthContext.Provider value={{ user, signOut, isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
};
