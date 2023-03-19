
export async function getListAPI(URL){

    const response = await fetch(URL);
    
    if (!response.ok) {
        throw new Error('Records requested do not exist')
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
      throw new Error("Error creating user")
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
    throw new Error('Error identifying the user')
  }

  return response

  
}

export async function advertNewCreate(newUrl,newAdvert,token){

  const response = await fetch(newUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(newAdvert)
  })

  if (!response.ok) {
    throw new Error('Error creating ad')
  }

}


export async function deleteAdvertApi(deleteUrl,token){

  const response = await fetch(deleteUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`,
    }
  })

  console.log(response)

  if (!response.ok) {
    throw new Error('Error delete ad')
  }

}


 

