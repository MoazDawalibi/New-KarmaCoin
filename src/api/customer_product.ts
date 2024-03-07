import useAddMutation from "./helper/useAddMutation";




export const useAddProduct = ()=> useAddMutation('customer' , "api/customer_product")