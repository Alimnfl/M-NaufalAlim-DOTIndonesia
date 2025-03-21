import { create } from "zustand";
import { persist } from "zustand/middleware";

type NavProps = {
  selected: {
    nav: string;
  };
  setSelected: (data: object) => void;
};

const useNav = create<NavProps>()(
  persist(
    (set) => ({
      selected: { nav: "domestic" },
      setSelected: (data) =>
        set((state) => ({
          selected: { ...state.selected, ...data },
        })),
    }),
    {
      name: "nav-storage",
    }
  )
);

export default useNav;
