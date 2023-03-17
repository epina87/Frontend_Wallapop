export function buildAdvertView(advertisement){

    const newAdvertisementElement = document.createElement('article');
    newAdvertisementElement.innerHTML = 
    `


                <a href="/advertDetail.html?adsId=${advertisement.id}">
                    <div class="user-info">
                            <p>${advertisement.name}</p>
                            <img src="${advertisement.img}" />
                    </div>
                        
                    <p>
                        ${advertisement.description} 
                    </p>
                    <p>${advertisement.price} € </p>
                    <p> type: ${advertisement.type}  </p>
                </a>

            
  `;

    return newAdvertisementElement; 
}

export function buildEmptyAdvertList(){
    return `<p>No results available</p>`;    
}

