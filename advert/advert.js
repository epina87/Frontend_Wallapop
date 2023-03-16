import { getListAPI } from "../API/api.js";

export async function getAdverts(){
    
    const advertUrl = 'http://localhost:8000/api/advertisements';

    const adverts = await getListAPI(advertUrl)

    return adverts
    
} 
