import useAddMutation from "./helper/useAddMutation";




export const useSendMessage = ()=> useAddMutation('MESSAGE' , "api/contact-us/send_message")