import React, { useState } from "react";
import { Pro } from "@/components/directory/ProCard";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Check, X, Edit2, Loader2 } from "lucide-react";
import { categories, locations } from "@/constants/filters";

type EditingCell = {
  id: string;
  field: keyof Pro;
} | null;

interface ProAdminTableProps {
  pros: Pro[];
  loading: boolean;
  onUpdatePro?: (proId: string, field: keyof Pro, value: any) => Promise<void>;
}

export default function ProAdminTable({
  pros,
  loading,
  onUpdatePro,
}: ProAdminTableProps) {
  const [editingCell, setEditingCell] = useState<EditingCell>(null);
  const [editValue, setEditValue] = useState<string>("");
  const [updating, setUpdating] = useState<string | null>(null);

  const handleStartEdit = (proId: string, field: keyof Pro, currentValue: any) => {
    setEditingCell({ id: proId, field });
    setEditValue(String(currentValue || ""));
  };

  const handleCancelEdit = () => {
    setEditingCell(null);
    setEditValue("");
  };

  const handleSaveEdit = async () => {
    if (!editingCell || !onUpdatePro) return;

    const { id, field } = editingCell;
    setUpdating(id);

    try {
      let processedValue: any = editValue;
      
      // Convert price to number
      if (field === 'price') {
        processedValue = parseFloat(editValue) || 0;
      }
      
      // Convert boolean fields
      if (field === 'verified' || field === 'featured') {
        processedValue = editValue === 'true';
      }

      await onUpdatePro(id, field, processedValue);
      setEditingCell(null);
      setEditValue("");
    } catch (error) {
      console.error("Failed to update pro:", error);
      // You could add a toast notification here
    } finally {
      setUpdating(null);
    }
  };

  const renderEditableCell = (pro: Pro, field: keyof Pro, value: any) => {
    const isEditing = editingCell?.id === pro.id && editingCell?.field === field;
    const isUpdating = updating === pro.id;

    if (isEditing) {
      if (field === 'category') {
        return (
          <div className="flex items-center gap-2">
            <Select value={editValue} onValueChange={setEditValue}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button size="sm" onClick={handleSaveEdit} disabled={isUpdating}>
              {isUpdating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancelEdit}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        );
      }

      if (field === 'location') {
        return (
          <div className="flex items-center gap-2">
            <Select value={editValue} onValueChange={setEditValue}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {locations.map(loc => (
                  <SelectItem key={loc.value} value={loc.value}>
                    {loc.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button size="sm" onClick={handleSaveEdit} disabled={isUpdating}>
              {isUpdating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancelEdit}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        );
      }

      if (field === 'verified' || field === 'featured') {
        return (
          <div className="flex items-center gap-2">
            <Select value={editValue} onValueChange={setEditValue}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Yes</SelectItem>
                <SelectItem value="false">No</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm" onClick={handleSaveEdit} disabled={isUpdating}>
              {isUpdating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancelEdit}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        );
      }

      return (
        <div className="flex items-center gap-2">
          <Input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSaveEdit();
              if (e.key === 'Escape') handleCancelEdit();
            }}
            className="w-full"
            type={field === 'price' ? 'number' : 'text'}
            autoFocus
          />
          <Button size="sm" onClick={handleSaveEdit} disabled={isUpdating}>
            {isUpdating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancelEdit}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      );
    }

    return (
      <div 
        className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-1 rounded group"
        onClick={() => handleStartEdit(pro.id, field, value)}
      >
        <span className="flex-1">
          {field === 'verified' || field === 'featured' ? (value ? "Yes" : "No") : String(value || "")}
        </span>
        <Edit2 className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />
      </div>
    );
  };

  if (loading) {
    return <div className="text-center py-10">Loading pros…</div>;
  }
  
  if (!pros.length) {
    return <div className="text-center py-10 text-muted-foreground">No pros available.</div>;
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Click on any cell to edit it inline. Press Enter to save or Escape to cancel.
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Price (Rs)</TableHead>
            <TableHead>Verified</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead>WhatsApp</TableHead>
            <TableHead>Profile Complete?</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pros.map(pro => (
            <TableRow key={pro.id}>
              <TableCell>
                {renderEditableCell(pro, 'name', pro.name)}
              </TableCell>
              <TableCell>
                {renderEditableCell(pro, 'category', pro.category)}
              </TableCell>
              <TableCell>
                {renderEditableCell(pro, 'location', pro.location)}
              </TableCell>
              <TableCell>
                {renderEditableCell(pro, 'price', pro.price)}
              </TableCell>
              <TableCell>
                {renderEditableCell(pro, 'verified', pro.verified)}
              </TableCell>
              <TableCell>
                {renderEditableCell(pro, 'featured', pro.featured)}
              </TableCell>
              <TableCell>
                {renderEditableCell(pro, 'whatsapp', pro.whatsapp)}
              </TableCell>
              <TableCell>
                {pro.summary && pro.whatsapp && pro.photo ? (
                  <span className="text-green-600 font-semibold">✅</span>
                ) : (
                  <span className="text-red-600 font-semibold">❌</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}