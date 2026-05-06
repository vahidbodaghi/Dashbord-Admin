import useFetch from "./useFetch";

export default function useDashboardSummary() {
  const products = useFetch("http://localhost:3001/products");
  const users = useFetch("http://localhost:3001/users");
  const tickets = useFetch("http://localhost:3001/tickets");
  const admin = useFetch("http://localhost:3001/admin");

  const loading = products.loading || users.loading || tickets.loading || admin.loading;
  const error = products.error || users.error || tickets.error || admin.error;

  return {
    loading,
    error,
    data: {
      products: products.data?.length ?? 0,
      users: users.data?.length ?? 0,
      tickets: tickets.data?.length ?? 0,
      admin: admin.data?.length ?? 0,
    },
  };
}

