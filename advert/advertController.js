
import { pubSub } from "../utils/pubSub.js";
import { getAdverts } from "./advert.js";
import { buildAdvertView,buildEmptyAdvertList } from "./advertView.js";
import { buildSpinnerView } from '../spinner/spinnerView.js';


export async function advertController(advertListElement){
    advertListElement.innerHTML = buildSpinnerView(); 
    
   try {
        const adverts = await getAdverts()        
        if (adverts.length > 0) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Los anuncios se cargaron correctamente')
            paintadvertisementsView(adverts, advertListElement)
          } else {
           paintEmptyMessage(advertListElement)
          }
    } catch (error) {
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No hemos podido cargar los anuncios')
  
    }finally{
        hideSpinner(advertListElement)
    }
    


    function paintadvertisementsView(adverts, advertListElement){
        for (const advert of adverts) {
            const newAdvertElement = buildAdvertView(advert)
            advertListElement.appendChild(newAdvertElement)           
        }
    }

    function paintEmptyMessage(advertListElement){
        advertListElement.innerHTML = buildEmptyAdvertList()    
    }

    function hideSpinner(advertListElement) {
        const spinnerElement = advertListElement.querySelector('.container');
        spinnerElement.classList.add('hide');
      }

}