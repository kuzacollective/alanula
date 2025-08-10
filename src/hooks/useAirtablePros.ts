import { useState, useEffect } from "react";
import { fetchAirtablePros } from "@/utils/airtablePros";
import { Pro } from "@/components/directory/ProCard";

export function useAirtablePros() {
  const [pros, setPros] = useState<Pro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    fetchAirtablePros()
      .then(setPros)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { pros, loading, error, refetch: fetchData };
}