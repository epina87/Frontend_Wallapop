export const buildAdvertDetail = (advert) => {
    const advertDate = new Date(advert.updatedAt)
    return `
    <div class="user-info">
        <span>${advert.name}</span>
        <img src="${advert.img}" />
    </div>

    <p> Description: ${advert.description} </p>
    <p> Priece: ${advert.price} € </p>
    <p> Type: ${advert.type}  </p>
    <p> Date: ${advertDate.toLocaleDateString()} </p> 

    <button id="deleteAdvert" class="btn">Delete Ad</button>

        `
  }



  export function buildEmptyAdvertList(){
    return `<p>No results available</p>`;    
}