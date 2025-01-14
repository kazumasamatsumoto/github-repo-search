import { create } from "zustand";
import type { Repository } from "@/app/types/github";

interface SearchState {
  query: string;
  results: Repository[];
  totalCount: number;
  setSearchResults: (
    query: string,
    results: Repository[],
    totalCount: number
  ) => void;
  clearSearchResults: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  results: [],
  totalCount: 0,
  setSearchResults: (query, results, totalCount) =>
    set({ query, results, totalCount }),
  clearSearchResults: () => set({ query: "", results: [], totalCount: 0 }),
}));
