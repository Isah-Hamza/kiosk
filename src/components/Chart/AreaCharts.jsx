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
      height={height || 300}
    >
      <AreaChart data={data}>
        <XAxis
          dataKey="name"
          fontSize={"10px"}
          axisLine={{ display: "none" }}
        />
        <YAxis
          label={null}
          interval={1}
          fontSize={"10px"}
          axisLine={{ display: "none" }}
          // display={"none"}
        />
        <Tooltip />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="20%" stopColor="rgba(67, 1, 12,.09)" />
            <stop offset="20%" stopColor="#f7f7f7" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            {/* <stop offset="10%" stopColor="rgba(245, 118, 0,.01)" /> */}
            <stop offset="10%" stopColor="rgb(237, 218, 199)" />
            <stop offset="30%" stopColor="#fff" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="sales"
          stroke="rgb(67, 1, 12)"
          fill="url(#gradient)"
          strokeWidth={"1px"}
          fillOpacity={".3"}
        />
        <Area
          type="monotone"
          dataKey="expenses"
          stroke="rgb(245, 118, 0)"
          strokeWidth={"1px"}
          fill="url(#gradient2)"
          stopColor="white"
          fillOpacity={".4"}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
