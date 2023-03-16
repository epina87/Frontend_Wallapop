export const buildAdvertDetail = (advert) => {
    //const advertDate = new Date(advert.updatedAt)
    return `
    <div class="user-info">
        <span>${advert.name}</span>
        <img src="${advert.img}" />
    </div>

    <p>
        ${advert.description} 
    </p>
    <span>${advert.price} € </span>
    <span> type: ${advert.type}  </span>
        `
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

  export function buildEmptyAdvertList(){
    return `<p>No existen resultados disponibles</p>`;    
}