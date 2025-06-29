import { useState, useEffect } from "react";
import { fetchAirtableHustlers } from "@/utils/airtableApi";
import { Hustler } from "@/components/directory/HustlerCard";

export function useAirtablePros() {
  const [pros, setPros] = useState<Hustler[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchAirtableHustlers()
      .then(setPros)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { pros, loading, error };
}