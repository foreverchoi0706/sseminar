import type { FC } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);
const Overview: FC = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>{"세미나 이름"} 요약</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Flex direction="column">
            <Box width="600px">
              <Table border="1px solid #D9DEE9">
                <Tbody>
                  <Tr>
                    <Th>등록인원</Th>
                    <Td>000명</Td>
                  </Tr>
                  <Tr>
                    <Th>참석</Th>
                    <Td>(사전등록 00명/현장등록 00명)</Td>
                  </Tr>
                  <Tr>
                    <Th>불참석</Th>
                    <Td>0명</Td>
                  </Tr>
                  <Tr>
                    <Th>등록형태</Th>
                    <Td>좌장 0명 / 연자 0명 / 일반 00명</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Grid
              marginY="20px"
              alignItems="center"
              justifyContent="space-around"
              templateColumns="repeat(3, 1fr)"
              gap={6}
            >
              {new Array(5).fill("").map(() => (
                <GridItem>
                  <Line
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                        title: {
                          display: true,
                          text: "Chart.js Line Chart",
                        },
                      },
                    }}
                    data={{
                      labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                      ],
                      datasets: [
                        {
                          label: "분류 1", //그래프 분류되는 항목
                          data: [1, 2, 3, 4, 5, 6, 7], //실제 그려지는 데이터(Y축 숫자)
                          borderColor: "rgb(255, 99, 132)", //그래프 선 color
                          backgroundColor: "rgba(255, 99, 132, 0.5)", //마우스 호버시 나타나는 분류네모 표시 bg
                        },
                        {
                          label: "분류 2",
                          data: [2, 3, 4, 5, 4, 7, 8],
                          borderColor: "rgb(53, 162, 235)", //실제 그려지는 데이터(Y축 숫자)
                          backgroundColor: "rgba(53, 162, 235, 0.5)",
                        },
                      ],
                    }}
                  />
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Overview;
