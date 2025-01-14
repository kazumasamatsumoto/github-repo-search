"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { searchRepositories } from "@/app/lib/github";
import { RepositoryCard } from "@/app/components/repository-card";
import { Pagination } from "@/app/components/pagination";
import { useSearchStore } from "@/app/store/searchStore";

export function RepositoryList() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const { results, totalCount, setSearchResults } = useSearchStore();

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        const { items, total_count } = await searchRepositories(query, page);
        setSearchResults(query, items, total_count);
      }
    };
    fetchResults();
  }, [query, page, setSearchResults]);

  if (!query) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className="text-center mt-8">検索結果が見つかりませんでした</div>
    );
  }

  return (
    <div className="mt-8">
      <p className="text-center text-muted-foreground mb-4">
        {totalCount.toLocaleString()}件の結果
      </p>
      <div className="space-y-4">
        {results.map((repo) => (
          <RepositoryCard key={repo.id} repository={repo} />
        ))}
      </div>
      <Pagination
        totalItems={totalCount}
        itemsPerPage={10}
        currentPage={page}
      />
    </div>
  );
}
