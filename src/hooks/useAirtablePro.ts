import { useState, useEffect } from "react";
import { fetchAirtableProById } from "@/utils/airtablePros";
import { mockPros } from "@/mocks/pros";
import { Pro } from "@/components/directory/ProCard";

export function useAirtablePro(proId: string) {
  const [pro, setPro] = useState<Pro | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!proId) {
      setError("No professional ID provided");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetchAirtableProById(proId)
      .then(setPro)
      .catch(e => {
        // Fallback to mock data if Airtable fails
        const mockPro = mockPros.find(p => p.id === proId);
        if (mockPro) {
          setPro(mockPro);
        } else {
          setError(e.message || "Professional not found");
        }
      })
      .finally(() => setLoading(false));
  }, [proId]);

  return { pro, loading, error };
}