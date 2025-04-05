import { create } from "zustand";

interface FilterState {
  nameFilter: string;
  setNameFilter: (value: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  nameFilter: "",
  setNameFilter: (value) => set({ nameFilter: value }),
}));
