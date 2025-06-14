
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Skeleton for hustler card layout
const HustlerCardSkeleton = () => (
  <div className="bg-white dark:bg-card border rounded-lg shadow-sm flex flex-col h-full relative overflow-hidden animate-fade-in">
    <div className="flex flex-col items-center px-4 pt-6 pb-4 w-full">
      <div className="mb-3">
        <Skeleton className="w-24 h-24 rounded-full mx-auto mb-2" />
      </div>
      <Skeleton className="h-5 w-32 mb-2" />
      <Skeleton className="h-4 w-20 mb-1" />
      <Skeleton className="h-4 w-24 mb-2" />
      <Skeleton className="h-6 w-24 mb-3" />
      <Skeleton className="h-4 w-full mb-3" />
      <Skeleton className="h-8 w-full mt-6" />
      <div className="mt-2 flex justify-center w-full">
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  </div>
);

export default HustlerCardSkeleton;
