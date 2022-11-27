import { selectAuthData } from "@/redux/features/auth/auth-selects";
import { authGetMe } from "@/redux/features/auth/auth-thunks";
import { selectDisplayIsShowLogin } from "@/redux/features/display/display-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
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
    let isStop = true;
    function getMe() {
      if (isStop) {
        console.log("GET DATA USER");
        dispatch(authGetMe());
      }
    }
    getMe();
    return () => {
      isStop = false;
    };
    //es-line-disable-next-line
  }, [isLogged]);
  return (
    <AuthContext.Provider
      value={{
        isLogged: data ? true : false,
        data: data,
        toggleLogged: setIsLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
