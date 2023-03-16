import { advertController } from "./advert/advertController.js"
import { notificationController } from "./notifications/notificationController.js"
import { userActionsController } from "./user-actions/userActionsController.js"


const advertListElement  = document.querySelector('.advert ')
const notificationsElement = document.querySelector('.notifications')

const userActionsElement = document.querySelector('.user-actions')

advertController(advertListElement)
notificationController(notificationsElement)
userActionsController(userActionsElement)
