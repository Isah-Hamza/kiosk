import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 35},
  { name: "Mar", value: 20 },
  { name: "Apr", value:25 },
  { name: "May", value:  15},
  { name: "Jun", value: 20 },
  { name: "Jul", value: 25 },
  { name: "Aug", value: 30 },
  { name: "Sep", value: 35 },
  { name: "Oct", value: 40 },
  { name: "Nov", value: 45 },
  { name: "Dec", value: 50 },
];

const AreaCharts = ({ height }) => {
  return (
    <ResponsiveContainer
      className={"-ml-7"}
      width="102%"
      height={height || 220}
    >
      <AreaChart data={data}>
        {/* <CartesianGrid  display={'none'} /> */}
        <XAxis dataKey="name" fontSize={"10px"} />
        <YAxis label={null} interval={1} fontSize={"10px"} />
        <Tooltip />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(351, 97%, 13%,.6)" />
            {/* <stop offset="0%" stopColor="rgba(97, 51, 51,.02)" /> */}
            <stop offset="90%" stopColor="#fcf7fd" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke="rgba(97, 51, 51,.2)"
          fill="url(#gradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
