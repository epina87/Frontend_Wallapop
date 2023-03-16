import { getListAPI } from "../API/api.js";

export const getAdvertsById  = async(adsId)=>{
    
    try {        
        const advertUrl = `http://localhost:8000/api/advertisements/${adsId}`;

        const adverts = await getListAPI(advertUrl)
        
        return adverts
    } catch (error) {
        throw new Error(error)
    }

}