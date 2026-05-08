import clsx from "clsx";
import Table from "../../components/common/Table/Table";
import TableBody from "../../components/common/Table/components/TableBody";
import TableCell from "../../components/common/Table/components/TableCell";
import TableHead from "../../components/common/Table/components/TableHead";
import TableHeadCell from "../../components/common/Table/components/TableHeadCell";
import TableRow from "../../components/common/Table/components/TableRow";
import { productsAllTableHeadRow } from "../../data/products";
import ChangeVisibiltyIcon from "../ProductTable/components/ChangeVisibiltyIcon";
import RemoveProductIcon from "../ProductTable/components/RemoveProductIcon";
import EditProductIcon from "../ProductTable/components/EditProductIcon";
import useDelete from "../../hook/useDelete";
import useUpdate from "../../hook/useUpdate";

export default function ProductTableView({
  products,
  paginatedProducts,
  setPaginatedProducts,
  updateProduct,
}) {
  const { update, loading: loadingUpdate } = useUpdate();
  const { remove, loading: loadingRemove} = useDelete();

  const changeProductVisibility = async (id) => {
    const productToUpdate = products.find((p) => p.id === id);

    const updated = {
      ...productToUpdate,
      isPublished: !productToUpdate.isPublished,
    };

    const result = await update(
      `http://localhost:3001/products/${id}`,
      updated,
    );

    if (result) {
      updateProduct(result); 
    }
  };
    const removeProduct = async (id) => {
    const success = await remove(`http://localhost:3001/products/${id}`);

    if (success) {
      setLastProduct((prev) => prev.filter((product) => product.id !== id));
    }
  };

  return (
    <>
      <Table
        header={{ title: "لیست محصولات" }}
        pagination={{
          items: products,
          setItems: setPaginatedProducts,
          itemsPerPage: 10,
        }}
      >
        <TableHead>
          {productsAllTableHeadRow.map((row) => (
            <TableHeadCell key={row}>{row}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {paginatedProducts.map((product) => (
            <TableRow>
              <TableCell>{product.id.slice(0, 10)}...</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>
                <p
                  className={clsx(
                    "rounded-xl px-2 py-1 border font-light mr-5",
                    product.isPublished
                      ? "bg-green-300 border-green-600 text-green-600"
                      : "bg-red-300 border-red-600 text-red-600",
                  )}
                >
                  {product.isPublished ? "عمومی" : "خصوصی"}
                </p>
              </TableCell>
              <TableCell>
                <p className="mr-12">{product.price.toLocaleString("fa-IR")}</p>
              </TableCell>
              <TableCell>
                <p className="mr-16">{product.inventory.toLocaleString("fa-IR")}</p>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <ChangeVisibiltyIcon
                    product={product}
                    onToggle={() => changeProductVisibility(product.id)}
                  />
                  <RemoveProductIcon product={product} onRemove={() => removeProduct(product.id)}/>
                  <EditProductIcon product={product}/>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
