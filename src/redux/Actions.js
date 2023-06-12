import { GET_SINGLE_PRODUCT } from "../redux/Types/Types"
export const getSingleProduct = (data) => {
    return {type: GET_SINGLE_PRODUCT, payload: data}
}