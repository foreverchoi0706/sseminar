import type { FC } from "react";

import { Chart, registerables } from "chart.js";
import { Button, Space, Table } from "antd";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

const Overview: FC = () => {
  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Button type="primary">등록정보 복사</Button>
      <Table />
      <Space style={{ width: "100%" }}>
        {[...new Array(3)].map(() => (
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
        ))}
      </Space>
    </Space>
  );
};

export default Overview;
