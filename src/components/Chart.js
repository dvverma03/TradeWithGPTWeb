import React, { useEffect, useState } from "react";
import moment from "moment";
import { LineChart, Line, YAxis, Tooltip } from "recharts";

const Graph = ({ chartPrices }) => {
  const [chartWidth, setChartWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setChartWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startUnixTimestamp = moment().subtract(7, "days").unix();
  const data = chartPrices?.map((item, index) => ({
    name: moment.unix(startUnixTimestamp + (index + 1) * 3600).format("MM-DD HH:mm"),
    price: item,
    amt: item,
  }));
  const tooltipFormatter = (value) => {
    return value.toFixed(2);
  };

  const minY = Math.min(...chartPrices);
  const maxY = Math.max(...chartPrices);

  return (
    <LineChart width={chartWidth - 50} height={370} data={data}>
      <Line type="natural" dataKey="price" stroke="green" strokeWidth={3} dot={false} />
      <YAxis domain={[minY, maxY]} />
      <Tooltip formatter={tooltipFormatter} />
    </LineChart>
  );
};

export default Graph;
