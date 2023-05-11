import { create } from "zustand";

interface IGithubState {
  editedAt: string;
  setEditedAt: (date: string) => void;
}

const useGithubStore = create<IGithubState>((set) => ({
  editedAt: "Waiting for github...",
  setEditedAt: (date) => set(() => ({ editedAt: date })),
}));

export { useGithubStore };
