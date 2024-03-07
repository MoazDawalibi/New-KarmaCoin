import useAddMutation from "./helper/useAddMutation"




const API = {
    login:"/api/user/login",
    register:"/api/user/register",
    verify:"/api/user/verify",
    sendCode:"/api/user/resendCode",
    
}


export const useLogin = ()=>useAddMutation("AUTH" , API.login)
export const useRegister= ()=>useAddMutation("AUTH" , API.register)

export const useVerify= ()=>useAddMutation("AUTH" , API.verify)
export const useSendCode= ()=>useAddMutation("AUTH" , API.sendCode)

