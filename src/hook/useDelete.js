import { useState } from "react";

export default function useDelete() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const remove = async (url) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("خطایی در حذف داده رخ داد");
      }

      return true;
    } catch (err) {
      setError(err.message || "خطایی رخ داد");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { remove, error, loading };
}
