export function buildAdvertView(advertisement){

    const newAdvertisementElement = document.createElement('article');
    newAdvertisementElement.innerHTML = `
    <a href="/advertDetail.html?adsId=${advertisement.id}">
        <div class="user-info">
            <span>${advertisement.name}</span>
            <img src="${advertisement.img}" />
        </div>
        
        <p>
            ${advertisement.description} 
        </p>
        <span>${advertisement.price} € </span>
        <span> type: ${advertisement.type}  </span>
    </a>
  `;

    return newAdvertisementElement; 
}

export function buildEmptyAdvertList(){
    return `<p>No existen resultados disponibles</p>`;    
}

export function buildSpinnerView() {

    return ` 
    <div class="container">
        <div class="cargando">
            <div class="pelotas"></div>
            <div class="pelotas"></div>
            <div class="pelotas"></div>
            <span class="texto-cargando">Cargando...</span>
        </div>
    </div> 
    `
  }