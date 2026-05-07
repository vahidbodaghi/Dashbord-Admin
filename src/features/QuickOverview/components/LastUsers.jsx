import SectionTitle from "../../../components/common/SectionTitle";
import useFetch from "../../../hook/useFetch";
import OpenInPage from "./OpenInPage";
import UserCard from "./UserCard";

export default function LastUsers() {
  const { data, error, loading } = useFetch("http://localhost:3001/users");
  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا در دریافت داده‌ها</p>;
  if (!data || data.length === 0) return <p>محصولی یافت نشد</p>;
  return (
    <div className="col-span-2 bg-white bg-gradient-to-t  from-gray-200 max-h-max">
      <SectionTitle title="آخرین کاربران ثبت نامی " />
      <div className="space-y-5 mt-5">
        {data.slice(-5).map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      <OpenInPage itemLength={data.length} navigateTo="/users" />
    </div>
  );
}
