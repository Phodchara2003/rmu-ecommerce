import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCardStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const items = get().items;
        const exitstingItem = items.find((item) => item.id === product.id);
        if (exitstingItem) {
          const updateItem = items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({items:updateItem})
        }else{
          set({items:[...items,{...product,quantity:1}]})
        }
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCardStore;
