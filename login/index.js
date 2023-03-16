import { notificationController } from '../notifications/notificationController.js'
import { loginController } from "./loginController.js"

const loginElement = document.querySelector('#logUser')
const notificationsElement = document.querySelector('.notifications')

notificationController(notificationsElement)
loginController(loginElement)