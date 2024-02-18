import {
  Box,
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
} from "@chakra-ui/react";
import type { FC } from "react";

const Search: FC = () => {
  return (
    <Box>
      <Grid
        border="1px solid #D9DEE9"
        padding="20px"
        marginY="20px"
        alignItems="center"
        justifyContent="space-around"
        templateColumns="repeat(3, 1fr)"
        gap={6}
      >
        <GridItem>
          <CheckboxGroup>
            참석구분
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
      </Grid>
      <Box>
        <Table border="1px solid #D9DEE9">
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>참석구분</Th>
              <Th>등록구분</Th>
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
                <Td>테스트</Td>
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
