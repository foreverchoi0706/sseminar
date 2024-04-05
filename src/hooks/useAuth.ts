import useStore from "@/hooks/useStore";
import { deleteCookie, setCookie } from "@/utils/cookie.ts";
import { ACCESS_TOKEN } from "@/utils/constants.ts";

const useAuth = () => {
  const [isSignIn, setIsSignIn] = useStore(({ isSignIn, setIsSignIn }) => [
    isSignIn,
    setIsSignIn,
  ]);

  const signIn = (accessToken: string) => {
    setIsSignIn(true);
    const today = new Date() ;
    setCookie(ACCESS_TOKEN, accessToken, {
      expires: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
      ),
    });
  };

  const signOut = () => {
    setIsSignIn(false);
    deleteCookie(ACCESS_TOKEN);
  };

  return {
    isSignIn,
    signIn,
    signOut,
  };
};

export default useAuth;
