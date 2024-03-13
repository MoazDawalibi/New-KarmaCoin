import { useSelector } from "react-redux";
import useAddMutation from "./helper/useAddMutation";
import useGetQuery from "./helper/useGetQuery";


const API = {
    GET:"api/wishlist/details",
    AddToFav:"api/wishlist/add_product",
    RemoveFromFav:"api/wishlist/remove_product",
}

const  KEY = "WISHLIST"

export const useAddToFavourite =  ()=>useAddMutation(KEY , API.AddToFav )
export const useGetFav =  ()=>{
    const {isAuthenticated} = useSelector((state:any)=>state.auth)
    return useGetQuery(KEY  , API.GET  ,{} , {
        enabled:isAuthenticated
    })
}
export const useRemoveFromFav = ()=>useAddMutation(KEY , API.RemoveFromFav) 

