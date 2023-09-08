import { create } from "zustand";

export const useSelectedRooms = create((set) => ({
  selectedRooms: [],
  setSelectedRooms: (rooms) => set({ selectedRooms: rooms })
}))