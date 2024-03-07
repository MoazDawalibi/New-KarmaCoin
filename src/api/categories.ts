import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useGetQueryPagination from "./helper/useGetQueryPagination"
import useUpdateMutation from "./helper/useUpdateMutation"



const API = {
    
    GET:"/api/user/category/getAll",

}

const KEY = "Categories"

export const useGetAllCategories = (params?:any) => useGetQuery(KEY , API.GET, params)
