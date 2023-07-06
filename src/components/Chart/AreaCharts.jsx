import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 35 },
  { name: "Mar", value: 40 },
  { name: "Apr", value: 40 },
  { name: "May", value: 40 },
  { name: "Jun", value: 45 },
  { name: "Jul", value: 40 },
  { name: "Aug", value: 55 },
  { name: "Sep", value: 40 },
  { name: "Oct", value: 50 },
  { name: "Nov", value: 45 },
  { name: "Dec", value: 40 },
];

const AreaCharts = ({ height }) => {
  return (
    <ResponsiveContainer
      className={"-ml-7"}
      width="102%"
      height={height || 160}
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
