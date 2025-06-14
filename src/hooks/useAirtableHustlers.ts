
import { useState, useEffect } from "react";
import { fetchAirtableHustlers } from "@/utils/airtableApi";
import { Hustler } from "@/components/directory/HustlerCard";

export function useAirtableHustlers() {
  const [hustlers, setHustlers] = useState<Hustler[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchAirtableHustlers()
      .then(setHustlers)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { hustlers, loading, error };
}
