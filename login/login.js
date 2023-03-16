import { loginFetchUser } from "../API/api.js"

export async function loginUser(email, password) {
    const user = {
      username: email,
      password: password
    }

    const loginUrl = 'http://localhost:8000/auth/login'
    
    try{
        const response = await loginFetchUser(loginUrl,user) 
        const data = await response.json()

        return data.accessToken;
    } catch (error) {
        throw new Error(error)    
    }
  }