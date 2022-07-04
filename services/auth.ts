import { api } from "./api";

interface ISignInReq {
  email: string;
  password: string;
}

interface IAuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const signInRequest = async ({ email, password }: ISignInReq) => {
  const response = await api.post<IAuthResponse>("authenticate", {
    email,
    password,
  });

  return response.data;
};
