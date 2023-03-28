import { userService } from '../services/user.service'
import { stayService } from '../services/stay.service.local'
import { orderService } from '../services/order.service.loc'

export const orderStore = {
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        createNewOrder({commit},{order}){
            console.log('example')
        }
    }
}