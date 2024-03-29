import UpsertModal from "@/components/UpsertModal";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import type { FC } from "react";

const Search: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box>
      <UpsertModal isOpen={isOpen} onClose={onClose} />
      <Grid
        border="1px solid #D9DEE9"
        padding="20px"
        marginY="20px"
        alignItems="center"
        justifyContent="space-around"
        justifyItems="center"
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        <GridItem>
          <CheckboxGroup>
            <Checkbox>전체</Checkbox>
            <Checkbox>참석</Checkbox>
            <Checkbox>불참석</Checkbox>
          </CheckboxGroup>
        </GridItem>
        <GridItem>
          <CheckboxGroup>
            등록구분
            <Checkbox>전체</Checkbox>
            <Checkbox>사전등록</Checkbox>
            <Checkbox>현장등록</Checkbox>
          </CheckboxGroup>
        </GridItem>
        <GridItem>
          <InputGroup>
            <InputLeftAddon>키워드</InputLeftAddon>
            <Select>
              <option>이름</option>
              <option>업체명</option>
            </Select>
            <Input />
          </InputGroup>
        </GridItem>
        <GridItem>
          <Button onClick={onOpen}>등록</Button>
        </GridItem>
      </Grid>
      <Box>
        <Table border="1px solid #D9DEE9">
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>
                <Select backgroundColor="#ffffff">
                  <option>참석</option>
                  <option>불참</option>
                </Select>
              </Th>
              <Th>
                <Select backgroundColor="#ffffff">
                  <option>등록</option>
                  <option>미등록</option>
                </Select>
              </Th>
              <Th>등록형태</Th>
              <Th>이름</Th>
              <Th>업체명</Th>
              <Th>연락처</Th>
              <Th>비고</Th>
            </Tr>
          </Thead>
          <Tbody>
            {new Array(20).fill("").map((_, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>테스트</Td>
                <Td>테스트</Td>
                <Td>테스트</Td>
                <Td>테스트</Td>
                <Td>테스트</Td>
                <Td>테스트</Td>
                <Td>테스트</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Td align="center" colSpan={999}>
                dasd
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </Box>
  );
};

export default Search;
