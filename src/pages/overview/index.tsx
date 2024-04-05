import type { FC } from "react";

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Overview: FC = () => {
  return "OVERVIEW";
};

export default Overview;
