import { create } from 'zustand'

export default create((set) =>
{
    return {
        product: '5literTin',
        setProduct: (value) => {
            set((state) => {
                return { product: value };
            })
        },
    }
})