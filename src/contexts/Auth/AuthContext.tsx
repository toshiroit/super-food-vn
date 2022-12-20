import { selectAuthData } from "@/redux/features/auth/auth-selects";
import { authGetMe } from "@/redux/features/auth/auth-thunks";
import { selectDisplayIsShowLogin } from "@/redux/features/display/display-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import {
  ConfirmationResult,
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { authFirebase } from "@/config/firebase";
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
  loading: boolean;
  toggleLogged: Dispatch<SetStateAction<boolean>>;
  setLoading: (status: boolean) => void;
  setUpRecaptcha: (number: string) => Promise<ConfirmationResult>;
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
  const [loading, setLoading] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  useEffect(() => {
    let isStop = true;
    function getMe() {
      if (isStop) {
        dispatch(authGetMe());
      }
    }
    getMe();
    return () => {
      isStop = false;
    };
    //eslint-disable-next-line
  }, [isLogged, router.pathname]);
  const setUpReCapCha = (phone: string): Promise<ConfirmationResult> => {
    setLoading(true);
    const recaptcharVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      authFirebase
    );
    recaptcharVerifier.render();
    return signInWithPhoneNumber(authFirebase, phone, recaptcharVerifier);
  };
  return (
    <AuthContext.Provider
      value={{
        isLogged: data ? true : false,
        data: data,
        loading: loading,
        setLoading: setLoading,
        toggleLogged: setIsLogged,
        setUpRecaptcha: setUpReCapCha,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
