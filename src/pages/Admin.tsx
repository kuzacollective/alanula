import React from "react";
import Header from "@/components/ui/Header";
import { useAirtablePros } from "@/hooks/useAirtablePros";
import { updateAirtablePro } from "@/utils/airtablePros";
import ProAdminTable from "@/components/admin/ProAdminTable";
import { Pro } from "@/components/directory/ProCard";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const { pros, loading, error, refetch } = useAirtablePros();
  const { toast } = useToast();

  const handleUpdatePro = async (proId: string, field: keyof Pro, value: any) => {
    try {
      await updateAirtablePro(proId, { [field]: value });
      
      // Show success toast
      toast({
        title: "Pro updated successfully",
        description: `${field} has been updated.`,
      });
      
      // Refetch the data to get the latest updates
      // Note: You might need to add a refetch function to useAirtablePros hook
      // For now, we'll just show the success message
      
    } catch (error) {
      console.error("Failed to update pro:", error);
      toast({
        title: "Update failed",
        description: error instanceof Error ? error.message : "Failed to update pro",
        variant: "destructive",
      });
      throw error; // Re-throw to let the component handle it
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-3 py-10 font-inter">
        <h1 className="text-3xl font-bold font-poppins text-primary mb-5">Admin Dashboard</h1>
        {error && <div className="bg-red-100 text-red-700 p-2 mb-6">{error}</div>}
        <ProAdminTable pros={pros} loading={loading} onUpdatePro={handleUpdatePro} />
      </main>
    </div>
  );
}