
import { Link } from "react-router";

export default function OpenInPage({ itemLength, navigateTo }) {
  return (
    <div className="flex justify-between border-t border-white mt-10 py-5">
      <p className="text-sm text-neutral-700">{itemLength} رکورد یافت شد.</p>

      <Link className="bg-green-500/80 font-regular px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-white" to={navigateTo || "/"}>
      نمایش کامل لیست
      </Link>
    </div>
  );
}
