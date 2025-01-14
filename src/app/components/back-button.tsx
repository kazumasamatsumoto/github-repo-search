"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleBack = () => {
    const query = searchParams.get("q");
    const page = searchParams.get("page");
    const url = query
      ? `/?q=${encodeURIComponent(query)}${page ? `&page=${page}` : ""}`
      : "/";
    router.push(url);
  };

  return (
    <Button variant="ghost" onClick={handleBack}>
      <ArrowLeft className="mr-2 h-4 w-4" />
      検索に戻る
    </Button>
  );
}
