import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 30, expenses: 50 },
  { name: "Feb", sales: 35, expenses: 55 },
  { name: "Mar", sales: 30, expenses: 45 },
  { name: "Apr", sales: 35, expenses: 40 },
  { name: "May", sales: 30, expenses: 50 },
  { name: "Jun", sales: 35, expenses: 55 },
  { name: "Jul", sales: 30, expenses: 45 },
  { name: "Aug", sales: 35, expenses: 40 },
  { name: "Sep", sales: 30, expenses: 50 },
  { name: "Oct", sales: 35, expenses: 55 },
  { name: "Nov", sales: 30, expenses: 45 },
  { name: "Dec", sales: 35, expenses: 40 },
];

const AreaCharts = ({ height }) => {
  return (
    <ResponsiveContainer
      className={"-ml-7"}
      width="102%"
      height={height || 240}
    >
      <AreaChart data={data}>
        <XAxis dataKey="name" fontSize={"10px"} />
        <YAxis label={null} interval={1} fontSize={"10px"} />
        <Tooltip />
        <defs>
          <linearGradient  id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(220, 10, 13)" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="-100%" stopColor="rgb(225,225,100)" />
            <stop offset="40%" stopColor="#fff" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="sales"
          stroke="rgba(97, 51, 51,.2)"
          fill="url(#gradient)"
          fillOpacity={".3"}
        />
        <Area
          type="monotone"
          dataKey="expenses"
          stroke="rgba(97, 51, 51,.2)"
          fill="url(#gradient2)"
          stopColor="white"
          fillOpacity={".4"}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
