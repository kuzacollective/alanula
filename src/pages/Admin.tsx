import React from "react";
import Header from "@/components/ui/Header";
import { useAirtablePros } from "@/hooks/useAirtablePros";
import ProAdminTable from "@/components/admin/ProAdminTable";

export default function Admin() {
  const { pros, loading, error } = useAirtablePros();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-3 py-10 font-inter">
        <h1 className="text-3xl font-bold font-poppins text-primary mb-5">Admin Dashboard</h1>
        {error && <div className="bg-red-100 text-red-700 p-2 mb-6">{error}</div>}
        <ProAdminTable pros={pros} loading={loading} />
      </main>
    </div>
  );
}