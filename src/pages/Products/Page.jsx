import { CiGrid41, CiViewTable } from "react-icons/ci";
import SectionTitle from "../../components/common/SectionTitle";
import { useEffect, useState } from "react";

import ProductTableView from "../../features/ProductView/ProductTableView";
import ProductGridview from "../../features/ProductView/ProductGridview";
import useFetch from "../../hook/useFetch";

export default function Products() {
  const { data, error, loading } = useFetch("http://localhost:3001/products");
  const [layoutType, setLayoutType] = useState("TABLE");
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  const toggleLayoutType = () => {
    const layout = layoutType === "TABLE" ? "GRID" : "TABLE";
    setLayoutType(layout);
  };
  const Buttons = () => {
    return (
      <>
        <button
          onClick={toggleLayoutType}
          className="bg-green-200 shadow size-10 flex justify-center items-center rounded-xl text-2xl text-gray-500"
        >
          {layoutType === "TABLE" ? <CiGrid41 /> : <CiViewTable />}
        </button>
        <button className="bg-green-500/80 font-regular px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-white shadow">
          ایجاد محصول
        </button>
      </>
    );
  };
  return (
    <>
      <SectionTitle title="محصولات" Buttons={<Buttons />} />

      <section className="mt-20 w-full! min-w-full">
        {layoutType === "TABLE" ? (
          <ProductTableView
            products={data}
            paginatedProducts={paginatedProducts}
            setPaginatedProducts={setPaginatedProducts}
          />
        ) : (
          <ProductGridview
            products={data}
            paginatedProducts={paginatedProducts}
            setPaginatedProducts={setPaginatedProducts}
          />
        )}
      </section>
    </>
  );
}
