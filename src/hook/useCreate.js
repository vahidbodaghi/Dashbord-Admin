import { useState } from "react";

export default function useCreate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = async (url, data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to create data");
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

  return { create, loading, error };
}
