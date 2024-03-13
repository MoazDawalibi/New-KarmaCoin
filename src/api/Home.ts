import useGetQuery from "./helper/useGetQuery"


const API = {
    GET:"/api/home/getAll"
}

const KEY = "HOME"

export const useGetAllHome = (params?:any) => useGetQuery(KEY , API.GET, params)