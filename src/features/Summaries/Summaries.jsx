import SummaryCard from "./components/SummaryCard";
import { BiShoppingBag } from "react-icons/bi";
import { HiDocumentText, HiUsers } from "react-icons/hi2";
import { RiAdminFill } from "react-icons/ri";
import useDashboardSummary from "../../hook/useDashboardSummary";
import { useState } from "react";

export default function Summaries() {
  const [range, setRange] = useState("month");
  
     const { data, loading, error } = useDashboardSummary();
    
      if (loading) return <p className="mt-10">در حال دریافت اطلاعات...</p>;
      if (error) return <p className="mt-10 text-red-500">خطا در دریافت اطلاعات</p>;
  
     const summaryData = [
        { id: 1, title: "تعداد محصولات", growth: 12, Icon: BiShoppingBag, value: data.products },
        { id: 2, title: "تعداد کاربران", growth: 8 , Icon: HiUsers, value: data.users },
        { id: 3, title: "تعداد تیکت‌ها", growth: -4, Icon: HiDocumentText, value: data.tickets },
        { id: 4, title: "تعداد مدیران", growth: 2, Icon: RiAdminFill, value: data.admin },
      ];
  return (
    <div className="mt-15">
      <div className="flex gap-3">
        {["week", "month", "year"].map((item) => (
          <button key={item} onClick={() => setRange(item)} 
          className={`px-4 py-2 rounded-lg text-sm transition
            ${
              range === item
                ? "bg-green-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}>
            {item === "week" && "هفتگی"}
            {item === "month" && "ماهانه"}
            {item === "year" && "سالانه"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3">
      {summaryData.map((item) => (
        <SummaryCard key={item.id} {...item} />
      ))}

      </div>
    </div>
  );
}




