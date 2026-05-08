import { CiGrid41, CiViewTable } from "react-icons/ci";
import SectionTitle from "../../components/common/SectionTitle";
import { useEffect, useMemo, useState } from "react";

import ProductTableView from "../../features/ProductView/ProductTableView";
import ProductGridview from "../../features/ProductView/ProductGridview";
import useFetch from "../../hook/useFetch";

import AddProductFields from "../../features/ProductTable/components/AddProductFields";

export default function Products() {
  const { data, error, loading } = useFetch("http://localhost:3001/products");
  const [layoutType, setLayoutType] = useState("TABLE");
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const reversedProducts = useMemo(() => {
    return [...products].reverse();
  }, [products]);

  useEffect(() => {
    if (data) setProducts(data);
  }, [data]);

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)),
    );
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

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

        <AddProductFields onCreate={handleAddProduct} />
      </>
    );
  };
  return (
    <>
      <SectionTitle title="محصولات" Buttons={<Buttons />} />

      <section className="mt-20 w-full! min-w-full">
        {layoutType === "TABLE" ? (
          <ProductTableView
            products={reversedProducts}
            paginatedProducts={paginatedProducts}
            setPaginatedProducts={setPaginatedProducts}
            updateProduct={handleUpdateProduct}
          />
        ) : (
          <ProductGridview
            products={reversedProducts}
            paginatedProducts={paginatedProducts}
            setPaginatedProducts={setPaginatedProducts}
          />
        )}
      </section>
    </>
  );
}
