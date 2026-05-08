import TableBody from "../../components/common/Table/components/TableBody";
import TableCell from "../../components/common/Table/components/TableCell";
import TableHead from "../../components/common/Table/components/TableHead";
import TableHeadCell from "../../components/common/Table/components/TableHeadCell";
import TableHeader from "../../components/common/Table/components/TableHeader";
import TableRow from "../../components/common/Table/components/TableRow";
import { UsersAllTableHeadRow } from "../../data/products";

import Table from "./../../components/common/Table/Table";

export default function UsersTableView({
  users,
  paginatedUsers,
  setPaginatedUsers,
  updateUser,
}) {
  return (
    <>
      <Table
        header={{ title: "مدریت کاربران" }}
        pagination={{
          items: users,
          setItems: setPaginatedUsers,
          itemsPerPage: 5,
        }}
      >
        <TableHead>
          {UsersAllTableHeadRow.map((row) => (
            <TableHeadCell key={row}>{row}</TableHeadCell>
          ))}
        </TableHead>
        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow>
              <TableCell>{user.id.slice(0, 10)}...</TableCell>
              <TableCell>{user.nameAndSurname}</TableCell>
              <TableCell>
                <p className="mr-10">{user.userName}</p>
              </TableCell>
              <TableCell>
                <p className="mr-2">{user.email}</p>
              </TableCell>
              <TableCell>
                <p className="mr-10">{user.phone}</p>
              </TableCell>
              <TableCell>
                <p className="mr-18">{user.role}</p>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2"></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
