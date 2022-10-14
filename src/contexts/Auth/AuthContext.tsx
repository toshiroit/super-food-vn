import {
  selectAuthData,
} from "@/redux/features/auth/auth-selects";
import { authGetMe } from "@/redux/features/auth/auth-thunks";
import { selectDisplayIsShowLogin } from "@/redux/features/display/display-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import axios from "axios";
import { useRouter } from "next/router";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  isLogged: boolean;
  data: any;
  toggleLogged: Dispatch<SetStateAction<boolean>>;
};
type AuthProviderProps = {
  children: React.ReactNode;
  jwt?: string;
};
export const AuthContext = createContext({} as AuthContextType);
export function AuthProvider({ children, jwt }: AuthProviderProps) {
  const data = useAppSelector(selectAuthData);
  const dataDisplay = useAppSelector(selectDisplayIsShowLogin);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLogged, setIsLogged] = useState<boolean>(false);
  useEffect(() => {
    async function token() {
      const data = await axios.get("/api/auth/login");
      if (data.data.jwt) {
        dispatch(authGetMe());
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    }
    token();
  }, [router.pathname, isLogged, dataDisplay, dispatch]);
  return (
    <AuthContext.Provider
      value={{ isLogged: isLogged, data: data, toggleLogged: setIsLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
