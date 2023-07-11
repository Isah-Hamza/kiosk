import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 30, expenses: 50},
  { name: "Feb", sales: 35, expenses:55},
  { name: "Mar", sales: 20, expenses: 40},
  { name: "Apr", sales:25 , expenses:45},
  { name: "May", sales:  15, expenses:35},
  { name: "Jun", sales: 20, expenses: 40},
  { name: "Jul", sales: 25, expenses: 45},
  { name: "Aug", sales: 30, expenses: 50},
  { name: "Sep", sales: 35, expenses: 55},
  { name: "Oct", sales: 40, expenses: 60},
  { name: "Nov", sales: 45, expenses: 65},
  { name: "Dec", sales: 50, expenses: 70},
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
        <Area type="monotone" dataKey="sales" stroke="rgba(97, 51, 51,.2)" fill="url(#gradient)" />
        <Area type="monotone" dataKey="expenses" stroke="rgba(97, 51, 51,.2)" fill="url(#gradient)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
