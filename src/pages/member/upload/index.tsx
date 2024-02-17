import type { FC } from "react";
import { Input, Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";

const Upload: FC = () => {
  return (
    <Table width="600px" border="1px solid #D9DEE9">
      <Tbody>
        <Tr>
          <Th>등록자 명단</Th>
          <Td>
            <Input type="file" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
export default Upload;
