import { userService } from '../services/user.service'
import { stayService } from '../services/stay.service.local'
import { orderService } from '../services/order.service.local'

export const orderStore = {
  state: {
    orders: null,
  },
  getters: {},
  mutations: {
    async setOrders({ state }) {
      state.orders = await orderService.query()
    },
  },
  actions: {
    async createNewOrder({ commit }, { order }) {
      const savedOrder = await orderService.save(order)
      commit('setOrders')
      return savedOrder
    },
  },
}
