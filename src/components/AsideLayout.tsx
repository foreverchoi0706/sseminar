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
import { Link } from "react-router-dom";
import { SIGN_ROUTES } from "@/utils/constant.ts";

const AsideLayout: FC<PropsWithChildren> = ({ children }) => {
  const setIsSignIn = useUserStore(({ setIsSignIn }) => setIsSignIn);
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <Flex height="100%">
      <Box
        width="150px"
        padding="20px"
        height="100%"
        backgroundColor="#385898"
        as="aside"
      >
        <List color="#ffffff">
          {SIGN_ROUTES.map(({ path, name }) => (
            <ListItem paddingY="10px">
              <Link to={path}>{name}</Link>
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
            <Button onClick={() => setIsSignIn(false)}>로그아웃</Button>
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
