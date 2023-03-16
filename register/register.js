import { createNewUser } from "../API/api.js";

export async function createUser(email, password) {
    
    const user = {
      username: email,
      password: password
    }

    const registerUrl = 'http://localhost:8000/auth/register';
    try {
        const response = await createNewUser(registerUrl,user)
    } catch (error) {
        return error
    }
}
