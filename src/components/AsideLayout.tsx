import { type FC, type PropsWithChildren, useState } from "react";
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Select,
  Text,
} from "@chakra-ui/react";
import useUserStore from "@/hooks/store/useUserStore.ts";
import { NavLink } from "react-router-dom";
import { ACCESS_TOKEN, SIGN_ROUTES } from "@/utils/constant.ts";
import { deleteCookie } from "@/utils/cookie.ts";

const AsideLayout: FC<PropsWithChildren> = ({ children }) => {
  const setIsSignIn = useUserStore(({ setIsSignIn }) => setIsSignIn);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleClickSignOut = () => {
    setIsSignIn(false);
    deleteCookie(ACCESS_TOKEN);
  };

  return (
    <Flex height="100%">
      <Box
        flexShrink="0"
        width="150px"
        padding="20px"
        height="100%"
        backgroundColor="#385898"
        as="aside"
      >
        <List color="#ffffff">
          {SIGN_ROUTES.map(({ path, name }, index) => (
            <ListItem key={index} paddingY="10px">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: "underline",
                        fontWeight: "700",
                      }
                    : undefined
                }
                to={path}
              >
                {name}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Box>

      <Flex flexGrow="1" direction="column">
        <Flex
          padding="10px"
          backgroundColor="#385898"
          width="100%"
          justifyContent="space-between"
        >
          <Flex flexBasis="30%" alignItems="center" gap="20px">
            <Text color="#ffffff" fontWeight="700">
              SSEMINA
            </Text>
            <Select
              backgroundColor="#ffffff"
              value={selectedOption}
              onChange={({ target }) => setSelectedOption(target.value)}
              placeholder="세미나 선택"
            >
              <option value="AAA">AAA세미나</option>
              <option value="BBB">BBB세미나</option>
              <option value="CCC">CCC세미나</option>
              <option value="DDD">DDD세미나</option>
            </Select>
          </Flex>
          <Flex>
            <Button onClick={handleClickSignOut}>로그아웃</Button>
          </Flex>
        </Flex>

        <Box flexGrow="1" padding="20px 40px" overflowY="scroll">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AsideLayout;
