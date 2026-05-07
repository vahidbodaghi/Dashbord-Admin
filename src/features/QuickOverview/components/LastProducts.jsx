import SectionTitle from "../../../components/common/SectionTitle";
import useFetch from "../../../hook/useFetch";
import OpenInPage from "./OpenInPage";
import ProductCard from "./ProductCard";

export default function LastProducts() {
  const { data, error, loading } = useFetch("http://localhost:3001/products");

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا در دریافت داده‌ها</p>;
  if (!data || data.length === 0) return <p>محصولی یافت نشد</p>;
  return (
    <div className="col-span-3 bg-white bg-gradient-to-t  from-gray-200">
      <SectionTitle title="آخرین محصولات" />
      <div className="space-y-5 mt-5">
        {data.slice(-3).map((product) => (
          <ProductCard key={product.id} {...product}/>
        ))}
      </div>

      <OpenInPage itemLength={data.length} navigateTo="/products"/>
    </div>
  );
}
