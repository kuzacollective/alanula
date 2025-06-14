
import React from "react";
import { Hustler } from "@/components/directory/HustlerCard";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function HustlerAdminTable({
  hustlers,
  loading,
}: {
  hustlers: Hustler[];
  loading: boolean;
}) {
  if (loading) {
    return <div className="text-center py-10">Loading hustlers…</div>;
  }
  if (!hustlers.length) {
    return <div className="text-center py-10 text-muted-foreground">No hustlers available.</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Verified</TableHead>
          <TableHead>Featured</TableHead>
          <TableHead>Whatsapp</TableHead>
          <TableHead>Profile Complete?</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {hustlers.map(h => (
          <TableRow key={h.id}>
            <TableCell>{h.name}</TableCell>
            <TableCell>{h.category}</TableCell>
            <TableCell>{h.location}</TableCell>
            <TableCell>{h.verified ? "Yes" : "No"}</TableCell>
            <TableCell>{h.featured ? "Yes" : "No"}</TableCell>
            <TableCell>{h.whatsapp}</TableCell>
            <TableCell>
              {h.summary && h.whatsapp && h.photo ? (
                <span className="text-green-600 font-semibold">✅</span>
              ) : (
                <span className="text-red-600 font-semibold">❌</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
