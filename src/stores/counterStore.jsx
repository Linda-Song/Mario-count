import {create} from "zustand";


const counterStore = create((set)=>({
  count:0,
  reset: () => set(()=>({count: 0})),
  decrease: () => set((state) => ({
    count:state.count > 0 ? state.count - 1 : 0,
    })),
  decreaseBy: (value) => set((state) => ({
    count: Math.max(0, state.count - value),
  })),
  increase:() => set((state)=>({count: state.count + 1})),
  increaseBy: (value) => set((state)=>({
    count: state.count + value,
  })),

}));
export default counterStore;