import { create } from "zustand";

export const useSelectedRooms = create((set) => ({
  selected_room: [],
  setSelectedRooms: (rooms) => set({ selected_room: rooms })
}))