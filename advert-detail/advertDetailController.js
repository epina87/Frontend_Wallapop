import { pubSub } from "../utils/pubSub.js";
import { getAdvertsById,deleteAdvert } from "./advertDetail.js";
import { buildAdvertDetail,buildEmptyAdvertList } from "./advertDetailView.js";
import { buildSpinnerView } from '../spinner/spinnerView.js';
import { decodeToken } from '../utils/decodeToken.js'

export const advertDetailController = async(advertDetailElement, adsId)=>{
    advertDetailElement.innerHTML = buildSpinnerView(); 
    try {
        const advert = await getAdvertsById(adsId)
        hideSpinner(advertDetailElement)
       
        if (Object.entries(advert).length > 0) {
            
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'El anuncio se carga correctamente')
        
            advertDetailElement.innerHTML = buildAdvertDetail(advert)
            handelDeleteAdvertButton(advertDetailElement,advert)
          
         } else {
           paintEmptyMessage(advertListElement)
          }

        
    } catch (error) {
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No hemos podido cargar el anuncio')    
        hideSpinner(advertDetailElement)
        
    }


    function hideSpinner(advertDetailElement) {
        const spinnerElement = advertDetailElement.querySelector('.container');
        if (spinnerElement!==null) {
            spinnerElement.classList.add('hide');
        } 
      }

    function paintEmptyMessage(advertListElement){
        advertListElement.innerHTML = buildEmptyAdvertList()    
    }

    function handelDeleteAdvertButton(advertDetailElement, advert) {
        const token = localStorage.getItem('token');
        const deleteButtonElement = advertDetailElement.querySelector('#deleteAdvert');
        
        
        if (!token) {
          deleteButtonElement.remove()
        } else {
            
          const userInfo = decodeToken(token);


          if (advert.userId === userInfo.userId) {

            deleteButtonElement.addEventListener('click', async () => {
              const answer = confirm('¿Do you want to delete the tweet? sure')
              if (answer) {
                try {        
                    await deleteAdvert(advert.id)
                    window.location = '/'
                } catch (error) {
                    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No hemos podido borrar el anuncio')      
                }
              }
            })
          } else {
            deleteButtonElement.remove()
          }
        }
      }
}