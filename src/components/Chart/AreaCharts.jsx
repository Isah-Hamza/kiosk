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
  { name: "Mar", sales: 20, expenses: 40 },
  { name: "Apr", sales: 25, expenses: 45 },
  { name: "May", sales: 15, expenses: 35 },
  { name: "Jun", sales: 20, expenses: 40 },
  { name: "Jul", sales: 25, expenses: 45 },
  { name: "Aug", sales: 30, expenses: 50 },
  { name: "Sep", sales: 35, expenses: 45 },
  { name: "Oct", sales: 30, expenses: 40 },
  { name: "Nov", sales: 25, expenses: 45 },
  { name: "Dec", sales: 30, expenses: 40 },
];

const AreaCharts = ({ height }) => {
  return (
    <ResponsiveContainer
      className={"-ml-7"}
      width="102%"
      height={height || 240}
    >
      <AreaChart data={data}>
        {/* <CartesianGrid  display={'none'} /> */}
        <XAxis dataKey="name" fontSize={"10px"} />
        <YAxis label={null} interval={1} fontSize={"10px"} />
        <Tooltip />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="hsl(351, 97%, 13%,.6)" />
            <stop offset="90%" stopColor="#f7f7f7" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="hsl(9, 100%, 64%, .1)" />
            <stop offset="90%" stopColor="#f7f7f7" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="sales"
          stroke="rgba(97, 51, 51,.2)"
          fill="url(#gradient)"
        />
        <Area
          type="monotone"
          dataKey="expenses"
          stroke="rgba(97, 51, 51,.2)"
          fill="url(#gradient2)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
