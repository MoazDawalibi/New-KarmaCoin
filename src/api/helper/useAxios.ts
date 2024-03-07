import axios from 'axios'
import { BaseURL } from '../config'
import { TOKEN_KEY } from '../../config/AppKey'
import useLangCode from '../../Hooks/useLangCode'
import { useTranslation } from 'react-i18next'
function useAxios() {
  const code  = useLangCode()
  const {i18n} = useTranslation()

  return (
    axios.create({
        baseURL:BaseURL,
        headers:{
          Authorization:"Bearer " + localStorage.getItem(TOKEN_KEY),
          'language' : localStorage.getItem('language') 
        }
    })
  )
}

export default useAxios

