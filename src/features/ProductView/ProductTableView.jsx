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

export default function ProductTableView({
  products,
  paginatedProducts,
  setPaginatedProducts,
}) {
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
              <TableCell>{product.price.toLocaleString("fa-IR")}</TableCell>
              <TableCell>{product.inventory}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {/* <ChangeVisibiltyIcon /> */}
                  {/* <RemoveProductIcon /> */}
                  {/* <EditProductIcon /> */}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
