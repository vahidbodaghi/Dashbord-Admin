import { useState } from "react";

export default function useUpdate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const update = async (url, data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to update data");
      }

      const result = await res.json();
      return result;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { update, loading, error };
}
