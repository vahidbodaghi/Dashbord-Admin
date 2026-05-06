import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/components/TableHead";
import TableHeadCell from "../../components/common/Table/components/TableHeadCell";
import TableBody from "../../components/common/Table/components/TableBody";
import TableRow from "../../components/common/Table/components/TableRow";
import TableCell from "../../components/common/Table/components/TableCell";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
import { productsTableHeadRow } from "../../data/products";
import useFetch from "../../hook/useFetch";
import clsx from "clsx";
import RemoveProductIcon from "./components/RemoveProductIcon";
import ChangeVisibiltyIcon from "./components/ChangeVisibiltyIcon";
import EditProductIcon from "./components/EditProductIcon";
import { useEffect, useState } from "react";
import useDelete from "../../hook/useDelete";

export default function LastProductsTable() {
  const { data, error, loading } = useFetch("http://localhost:3001/products");
  const { remove, error: errorDelete, loading: loadingDelete } = useDelete();

  const [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    setLastProduct(data);
  }, [data]);
  const removeProduct = async (id) => {
    const success = await remove(`http://localhost:3001/products/${id}`);

    if (success) {
      setLastProduct((prev) => prev.filter((product) => product.id !== id));
    }
  };

  if (loading || loadingDelete) {
    return <p>در حال دریافت محصولات...</p>;
  }

  if (error || errorDelete) {
    return <p>خطا در دریافت اطلاعات</p>;
  }

  const Buttons = () => {
    return (
      <Link
        to="/products"
        className="font-light underline hover:text-green-500 flex items-center"
      >
        <span>صفحه محصولات</span>
        <MdOpenInNew />
      </Link>
    );
  };
  return (
    <div className="">
      <Table header={{ title: "لیست محصولات", Buttons: Buttons }}>
        <TableHead>
          {productsTableHeadRow.map((row) => (
            <TableHeadCell key={row}>{row}</TableHeadCell>
          ))}
        </TableHead>
        <TableBody>
          {lastProduct.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id.slice(0, 10)}...</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>
                {
                  <p
                    className={clsx(
                      "rounded-xl px-2 py-1 border font-light ",
                      product.isPunlished
                        ? "bg-green-300 border-green-600 text-green-600"
                        : "bg-red-300 border-red-600 text-red-600",
                    )}
                  >
                    {product.isPunlished ? "عمومی" : "خصوصی"}
                  </p>
                }
              </TableCell>
              <TableCell>
                {<span>{product.price.toLocaleString("fa-IR")} تومان</span>}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <ChangeVisibiltyIcon product={product} />
                  <RemoveProductIcon
                    product={product}
                    onRemove={() => removeProduct(product.id)}
                  />
                  <EditProductIcon product={product} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
