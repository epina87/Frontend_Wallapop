import { isEmailValid } from '../utils/isEmailValid.js';
import { loginUser } from './login.js';
import { pubSub } from '../utils/pubSub.js';
import { buildSpinnerView } from './loginView.js';

export function loginController(loginElement){

  loginElement.addEventListener('submit', async(event) => {
    event.preventDefault();

    const emailElement = loginElement.querySelector('#username');
    const copyEmailElement = emailElement
    loginElement.innerHTML = buildSpinnerView(); 
        
    if (!isEmailValid(emailElement.value)) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Email inválido')
    } else {
      await logUser(copyEmailElement)
    }

    hideSpinner(loginElement)
    
  })

  async function logUser(loginElement) {
    console.log(loginElement)
    const formData = new FormData(loginElement);
    const username = formData.get('username')
    const password = formData.get('password')

    
    try {
      const jwt = await loginUser(username, password)

      localStorage.setItem('token', jwt)
      window.location = '/';
    } catch (error) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
    }
  }

  function hideSpinner(loginElement) {
    const spinnerElement = loginElement.querySelector('.container');

    spinnerElement.classList.add('hide');
  }
}