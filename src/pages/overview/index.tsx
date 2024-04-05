import type { FC } from "react";

import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

const Overview: FC = () => {
  return "OVERVIEW";
};

export default Overview;
