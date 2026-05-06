import useDashboardSummary from "../../hook/useDashboardSummary";
import { BiShoppingBag } from "react-icons/bi";
import { HiDocumentText, HiUsers } from "react-icons/hi2";
import { RiAdminFill } from "react-icons/ri";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  AreaChart,
  Area,
  Line,
} from "recharts";
import CustomTooltip from "./components/CustomTooltip";

export default function DetailsCharts() {
  const { data, loading, error } = useDashboardSummary();

  if (loading) return <p className="mt-10">در حال دریافت اطلاعات...</p>;
  if (error) return <p className="mt-10 text-red-500">خطا در دریافت اطلاعات</p>;

  const summaryData = [
    {
      id: 1,
      title: "تعداد محصولات",
      growth: 12,
      Icon: BiShoppingBag,
      value: data.products,
    },
    {
      id: 2,
      title: "تعداد کاربران",
      growth: 8,
      Icon: HiUsers,
      value: data.users,
    },
    {
      id: 3,
      title: "تعداد تیکت‌ها",
      growth: -4,
      Icon: HiDocumentText,
      value: data.tickets,
    },
    {
      id: 4,
      title: "تعداد مدیران",
      growth: 2,
      Icon: RiAdminFill,
      value: data.admin,
    },
  ];
  const monthlyData = [
    { name: "فروردین", value: 20 },
    { name: "اردیبهشت", value: 40 },
    { name: "خرداد", value: 35 },
    { name: "تیر", value: 60 },
    { name: "مرداد", value: 75 },
    { name: "شهریور", value: 95 },
  ];
  const pieData = [
    { name: "فعال", value: 75 },
    { name: "غیرفعال", value: 25 },
  ];

  // const CustomTooltip = ({ active, payload, label }) => {
  //   if (active && payload && payload.length) {
  //     const item = payload[0];

  //     return (
  //       <div
  //         style={{
  //           background: "white",
  //           padding: "10px 14px",
  //           borderRadius: "10px",
  //           boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
  //           direction: "rtl",
  //           textAlign: "right",
  //         }}
  //       >
  //         {label && (
  //           <p style={{ margin: 0, fontWeight: "bold", color: "#16a34a" }}>
  //             {label}
  //           </p>
  //         )}

  //         <p style={{ margin: 0, marginTop: "4px", color: "#374151" }}>
  //           {item.name}: <strong>{item.value}</strong>
  //         </p>
  //       </div>
  //     );
  //   }

  //   return null;
  // };

  const COLORS = ["#22c55e", "#bbf7d0"];
  return (
    <div className="font-bold">
      <div className="mt-20 grid grid-cols-3 gap-6 *:shadow-xl  *:hover:shadow-xl *:transition *:border *:border-green-400">
        <div className="col-span-2 bg-white p-6 rounded-2xl ">
          <h2 className="font-bold mb-6 text-gray-700">آمار سیستم</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={summaryData}>
              <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>

              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="title" />
              <YAxis className="m-10"/>?
              <Tooltip content={CustomTooltip} />

              <Bar
                dataKey="value"
                fill="url(#bar)"
                name="تعداد"
                radius={[10, 10, 0, 0]}
                animationDuration={1200}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white col-span-1 p-6 rounded-2xl shadow-lg">
          <h2 className="font-bold mb-6 text-gray-700">وضعیت کاربران</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={4}
                nameKey="name"
                dataKey="value"
              >
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>

              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl  mt-10 shadow-xl hover:shadow-xl transition border border-green-400">
        <h2 className="font-bold mb-6 text-gray-700">رشد کاربران</h2>

        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={monthlyData}>
            <linearGradient id="areaGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>

            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="name" />
            <YAxis/>
            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#16a34a"
              name="کاربران"
              fill="url(#areaGreen)"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#15803d"
              strokeWidth={2}
              dot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
