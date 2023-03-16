import { notificationController } from "../notifications/notificationController.js";
import { advertDetailController } from "./advertDetailController.js";

// leer de la url el id del tweet
const params = new URLSearchParams(window.location.search)
const adsId = params.get('adsId');
const notificationsElement = document.querySelector('.notifications')

notificationController(notificationsElement)

// si el queryparam no existe, haremos una redirección al listado de tweets
if (!adsId) {
  window.location = '/'
} else {
  // crearemos un controlador donde le pasaremos dicho id
    const advertDetailElement = document.querySelector('.advert_detail');
    advertDetailController(advertDetailElement, adsId)
}