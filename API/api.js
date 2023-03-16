
export async function getListAPI(URL){

    const response = await fetch(URL);
    
    if (!response.ok) {
        throw new Error('Registros solicitado no existen')
      }
    const responseJSON = await response.json();
    
    return responseJSON
}

export async function createNewUser(URL,user){
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (!response.ok){
      throw new Error("Error al crear el usuario")
  }
}

export async function loginFetchUser(URL,user){
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (!response.ok) {
    throw new Error('Error al identificar el usuario')
  }

  return response

  
}

 

