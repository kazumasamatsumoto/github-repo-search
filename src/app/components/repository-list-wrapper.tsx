// src/app/components/repository-list-wrapper.tsx
"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const DynamicRepositoryList = dynamic(
  () =>
    import("@/app/components/repository-list").then(
      (mod) => mod.RepositoryList
    ),
  { ssr: false }
);

export function RepositoryListWrapper() {
  return (
    <Suspense fallback={<div className="text-center mt-8">読み込み中...</div>}>
      <DynamicRepositoryList />
    </Suspense>
  );
}
