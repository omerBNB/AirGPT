import { userService } from '../services/user.service'
import { stayService } from '../services/stay.service.local'
import { tripService } from '../services/trip.service.local'

export const tripsStore = {
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        createNewTrip({ commit }, { trip }) {
            console.log('example')
        }
    }
}