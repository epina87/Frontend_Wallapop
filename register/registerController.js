import { createUser } from "./register.js";
import { pubSub } from "../utils/pubSub.js";

export function registerController(registerElement){

    registerElement.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const emailElement = registerElement.querySelector('#username');
        const passwordElement = registerElement.querySelector('#password');
        const passwordConfirmElement = registerElement.querySelector('#passwordConfirm');

        if (isEmailValid(emailElement.value) &&
        isPasswordValid(passwordElement.value, passwordConfirmElement.value)) {
            try {                
                await createUser(emailElement.value, passwordElement.value)
                registerElement.reset();

                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Usuario creado correctamente')  
                window.location = '/'

            } catch (error) {
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
            }
        }

       
    })

    function isEmailValid(email) {
        const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    
        if (!mailRegExp.test(email)) {
          pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'El email no está bien escrito')
          return false
        }    
        return true
      }
    
    function isPasswordValid(password, passwordConfirmation) {
        if (password===""|| passwordConfirmation===""){
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Las contraseñas no puede estar en blanco')
            return false
        }else{
            if (password !== passwordConfirmation) {
              pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Las contraseñas no son iguales')
              return false
            }       
            return true
        }
      }
      
}