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
      .then(airtablePro => {
        if (airtablePro) {
          setPro(airtablePro);
        } else {
          // Airtable returned null, fallback to mock data
          const mockPro = mockPros.find(p => p.id === proId);
          setPro(mockPro || null);
        }
      })
      .catch(e => {
        // Airtable request failed, fallback to mock data
        const mockPro = mockPros.find(p => p.id === proId);
        if (!mockPro) {
          setError(e.message || "Professional not found");
        }
        setPro(mockPro || null);
      })
      .finally(() => setLoading(false));
  }, [proId]);

  return { pro, loading, error };
}