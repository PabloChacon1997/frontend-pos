import { create } from "zustand";
import { Product, ShoppingCart } from "./schemas";
import { devtools } from "zustand/middleware";

interface Store {
  total: number,
  contents: ShoppingCart,
  addToCard: (product: Product) => void,
}

export const useStore = create<Store>()(devtools((set, get) => ({
  total: 0,
  contents: [],
  addToCard: (product) => {
    const { id: productId, ...data } = product
    let contents: ShoppingCart = []
    const duplicated = get().contents.findIndex(item => item.productId === product.id)
    if (duplicated >= 0) {
      if (get().contents[duplicated].quantity >= get().contents[duplicated].inventory) return;
      contents = get().contents.map(item => item.productId === product.id ? {
        ...item,
        quantity: item.quantity + 1,
      }: item)
    } else {
      contents = [...get().contents, {
        ...data,
        quantity: 1,
        productId
      }]
  
    }
    set(() => ({
      contents
    }))
  }
})))