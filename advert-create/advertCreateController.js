import { advertCreate } from "./advertCreate.js";
import { pubSub } from '../utils/pubSub.js';
import { buildSpinnerView } from "./advertCreateView.js";

export const advertCreateController =async (advertCreateFormElement)=>{
    advertCreateFormElement.addEventListener('submit', async (event)=>{
        event.preventDefault();
        const formData = new FormData(advertCreateFormElement);

        advertCreateFormElement.innerHTML = buildSpinnerView(); 

        
   
        try {
            await advertCreate (formData)
            window.location = '/'
          } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error)
          }finally{
            hideSpinner(advertCreateFormElement)
            }

    })

    function hideSpinner(advertCreateFormElement) {
        const spinnerElement = advertCreateFormElement.querySelector('.container');
        spinnerElement.classList.add('hide');
      }

}