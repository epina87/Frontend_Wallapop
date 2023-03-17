import { advertNewCreate } from "../API/api.js"

export async function advertCreate(formData){

    const newAdvert={
        img: formData.get('foto'),
        name: formData.get('nombre'),
        description:formData.get('descripcion'),
        price:formData.get('precio'),
        type:formData.get('tipo')
    }


    const token = localStorage.getItem('token')
    const newUrl = 'http://localhost:8000/api/advertisements'

    try {
        const response = await advertNewCreate(newUrl,newAdvert,token)
        return response
    } catch (error) {
        throw error 
    }


}