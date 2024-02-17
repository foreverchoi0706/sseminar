import type { ChangeEventHandler, FC } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import useUserStore from "@/hooks/store/useUserStore.ts";
import { deleteCookie, getCookie, setCookie } from "@/utils/cookie.ts";
import { SAVE_ID } from "@/utils/constant.ts";
import type { SignInForm } from "@/utils/types.ts";

const SignIn: FC = () => {
  const form = useForm<SignInForm>({
    defaultValues: {
      id: getCookie(SAVE_ID) ?? "",
      pw: "",
    },
  });
  const setIsSignIn = useUserStore(({ setIsSignIn }) => setIsSignIn);

  const handleChangeSaveId: ChangeEventHandler<HTMLInputElement> = ({
    target: { checked },
  }) => {
    if (checked) return setCookie(SAVE_ID, form.getValues("id"));
    deleteCookie(SAVE_ID);
  };

  const handleSubmitSignInForm = () => {
    setIsSignIn(true);
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor="#385898"
    >
      <Box>
        <FormProvider {...form}>
          <Flex
            width="400px"
            padding="20px"
            direction="column"
            gap="20px"
            backgroundColor="#ffffff"
            borderRadius="12px"
            as="form"
            onSubmit={form.handleSubmit(handleSubmitSignInForm)}
          >
            <Text
              as="h1"
              fontWeight="700"
              fontSize="xx-large"
              textAlign="center"
            >
              SSEMINA
            </Text>
            <InputGroup>
              <Input
                autoFocus
                placeholder="아이디를 입력해주세요"
                {...form.register("id", {
                  required: true,
                })}
              />
            </InputGroup>
            <InputGroup>
              <Input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...form.register("pw", {
                  required: true,
                })}
              />
            </InputGroup>
            <Checkbox
              defaultChecked={form.watch("id") !== ""}
              onChange={handleChangeSaveId}
            >
              아이디 저장
            </Checkbox>
            <Flex justifyContent="center">
              <Button type="submit">로그인</Button>
            </Flex>
          </Flex>
        </FormProvider>
      </Box>
    </Flex>
  );
};

export default SignIn;
