import { Suspense } from "react";
import { SearchForm } from "@/app/components/search-form";
import { RepositoryListWrapper } from "@/app/components/repository-list-wrapper";
import { Orbs } from "@/app/components/orbs";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Orbs />
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        GitHubリポジトリ検索
      </h1>
      <Suspense>
        <SearchForm />
      </Suspense>
      <Suspense
        fallback={<div className="text-center mt-8">読み込み中...</div>}
      >
        <RepositoryListWrapper />
      </Suspense>
    </main>
  );
}
