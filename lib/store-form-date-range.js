import { create } from "zustand";

export const useDateRangeState = create((set) => ({
  stay_date: {},
  setStayDates: (dates) => set({ stay_date: dates })
}))