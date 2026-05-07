import React from "react";
import ProductGridCard from "./ProductGridCard";
import Pagination from "../../components/common/Table/components/Pagination";

export default function ProductGridview({
  products,
  paginatedProducts,
  setPaginatedProducts,
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-x-3 gap-y-20">
        {paginatedProducts.map((product) => (
          <ProductGridCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        items={products}
        itemsPerPage={5}
        setItems={setPaginatedProducts}
      />
    </>
  );
}
