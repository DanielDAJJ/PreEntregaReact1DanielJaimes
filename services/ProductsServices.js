import axios from "axios";
export const getAllProducts = () => {
    return axios.get('https://dummyjson.com/products')
}
export async function getProductById(id) {
    return axios.get (`https://dummyjson.com/products/${id}`)
}