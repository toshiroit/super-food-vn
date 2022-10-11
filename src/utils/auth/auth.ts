import { Cookies } from "react-cookie";

const cookies = new Cookies();
export const login = async (token: string) => {
  // Cookie will expire after 24h
  cookies.set("JWT", token, { maxAge: 60 * 60 * 24 });
};
