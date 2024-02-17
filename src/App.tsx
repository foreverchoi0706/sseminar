import {
  Box,
  ChakraProvider,
  extendTheme,
  withDefaultProps,
} from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { type FC, useEffect } from "react";
import SignIn from "@/pages/signIn";
import AsideLayout from "@/components/AsideLayout.tsx";
import useUserStore from "@/hooks/store/useUserStore.ts";
import { SIGN_ROUTES } from "@/utils/constant.ts";
import "@/global.css";

const theme = extendTheme(
  withDefaultProps({
    defaultProps: {
      colorScheme: "facebook",
    },
  }),
);

const App: FC = () => {
  const { isSignIn, setIsSignIn } = useUserStore(
    ({ isSignIn, setIsSignIn }) => ({ isSignIn, setIsSignIn }),
  );

  useEffect(() => {
    setIsSignIn(true);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box as="main" minWidth="1200px" height="100vh">
        <BrowserRouter>
          {isSignIn ? (
            <AsideLayout>
              <Routes>
                {SIGN_ROUTES.map(({ Element, path }) => (
                  <Route element={<Element />} path={path} />
                ))}
                <Route path="*" element={<Navigate replace to="/overview" />} />
              </Routes>
            </AsideLayout>
          ) : (
            <Routes>
              <Route path="/signIn" element={<SignIn />} />
              <Route path="*" element={<Navigate replace to="/signIn" />} />
            </Routes>
          )}
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
};

export default App;
