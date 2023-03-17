import { pubSub } from "../utils/pubSub.js";
import { getAdvertsById } from "./advertDetail.js";
import { buildAdvertDetail,buildEmptyAdvertList,buildSpinnerView } from "./advertDetailView.js";

export const advertDetailController = async(advertDetailElement, adsId)=>{
    advertDetailElement.innerHTML = buildSpinnerView(); 
    try {
        const advert = await getAdvertsById(adsId)
       
        if (Object.entries(advert).length > 0) {
            
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'El anuncio se carga correctamente')
        
            advertDetailElement.innerHTML = buildAdvertDetail(advert)
          
         } else {
           paintEmptyMessage(advertListElement)
          }
        
    } catch (error) {
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No hemos podido cargar el anuncio')    
        hideSpinner(advertDetailElement)
    }


    function hideSpinner(advertDetailElement) {
        const spinnerElement = advertDetailElement.querySelector('.container');

        spinnerElement.classList.add('hide');
      }

    function paintEmptyMessage(advertListElement){
        advertListElement.innerHTML = buildEmptyAdvertList()    
    }
}