"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/app/components/ui/button";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

export function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`/?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-8">
      {currentPage > 1 && (
        <Button onClick={() => handlePageChange(currentPage - 1)}>
          前のページ
        </Button>
      )}
      {currentPage < totalPages && (
        <Button onClick={() => handlePageChange(currentPage + 1)}>
          次のページ
        </Button>
      )}
    </div>
  );
}
