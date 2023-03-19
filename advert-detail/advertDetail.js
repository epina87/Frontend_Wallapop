import { deleteAdvertApi, getListAPI } from "../API/api.js";

export const getAdvertsById  = async(adsId)=>{
    
    try {        
        const advertUrl = `http://localhost:8000/api/advertisements/${adsId}`;

        const adverts = await getListAPI(advertUrl)
        
        return adverts
    } catch (error) {
        throw new Error(error)
    }

}

export const deleteAdvert  = async(adsId)=>{
   
    const token = localStorage.getItem('token')
    const deleteUrl = `http://localhost:8000/api/advertisements/${adsId}`
    try {

        const response = await deleteAdvertApi(deleteUrl,token)
    } catch (error) {
        throw new Error(error)
    }
}