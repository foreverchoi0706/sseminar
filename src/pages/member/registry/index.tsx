import type { FC } from "react";
import {
  Button,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Tr,
} from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

const Registry: FC = () => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <form>
        <Table width="600px" border="1px solid #D9DEE9">
          <Tbody>
            <Tr>
              <Th>등록구분</Th>
              <Td>
                <RadioGroup display="flex" justifyContent="space-around">
                  <Radio>사전등록</Radio>
                  <Radio>현장등록</Radio>
                </RadioGroup>
              </Td>
            </Tr>
            <Tr>
              <Th>등록 형태</Th>
              <Td>
                <RadioGroup display="flex" justifyContent="space-around">
                  <Radio>일반</Radio>
                  <Radio>연자</Radio>
                  <Radio>좌장</Radio>
                </RadioGroup>
              </Td>
            </Tr>
            <Tr>
              <Th>이름</Th>
              <Td>
                <Input placeholder="이름을 입력해 주세요" />
              </Td>
            </Tr>
            <Tr>
              <Th>병원명</Th>
              <Td>
                <Input placeholder="업체명을 입력해 주세요" />
              </Td>
            </Tr>
            <Tr>
              <Th>연락처</Th>
              <Td>
                <Input placeholder="연락처를 입력해 주세요" />
              </Td>
            </Tr>
            <Tr>
              <Th>비고사항</Th>
              <Td>좌장 0명 / 연자 0명 / 일반 00명</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Td colSpan={999}>
                <Flex justifyContent="center" gap="20px">
                  <Button colorScheme="red" type="reset">
                    취소
                  </Button>
                  <Button type="submit">등록</Button>
                </Flex>
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </form>
    </FormProvider>
  );
};
export default Registry;
