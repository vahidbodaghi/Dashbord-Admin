import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import UsersTableView from "../../features/UsersTable/UsersTableView";
import useFetch from "../../hook/useFetch";

export default function Users() {
  const { data, error, loading } = useFetch("http://localhost:3001/users");

  const [paginatedUsers, setPaginatedUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const reversedUsers = useMemo(() => {
    return [...users].reverse();
  }, [users]);

  useEffect(() => {
    if (data) setUsers(data);
  }, [data]);
  return (
    <>
      <SectionTitle title="کاربران وبسایت" Buttons={""} />

      <section>
        <UsersTableView
          users={reversedUsers}
          paginatedUsers={paginatedUsers}
          setPaginatedUsers={setPaginatedUsers}
          updateUser={""}
        />
      </section>
    </>
  );
}
