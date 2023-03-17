import { advertCreateController } from "./advertCreateController.js";
import { notificationController } from '../notifications/notificationController.js'

const notificationsElement = document.querySelector('.notifications')

notificationController(notificationsElement)

const token = localStorage.getItem('token')

if (!token) {
  window.location = '/'
} else {
  const advertCreateFormElement = document.querySelector('#advertCreatForm');
  advertCreateController(advertCreateFormElement)

}