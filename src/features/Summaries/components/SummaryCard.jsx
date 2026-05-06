import { memo } from "react";

const SummaryCard = memo(function SummaryCard({ value, title, Icon ,growth}) {
  return (
    <article className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition mt-8">
      
            <p className="text-gray-500">{title}</p>

             <div className="flex items-end justify-between mt-2">
               <h3 className="text-3xl font-bold text-green-600">
                 {value}
               </h3>

               <span
                 className={`text-sm font-medium ${
                   growth >= 0 ? "text-green-600" : "text-red-500"
                 }`}
               >
                 {growth}%
               </span>
             </div>
           
    </article>
  );
});

export default SummaryCard;
