import { userService } from '../services/user.service'
import { stayService } from '../services/stay.service.local'
import { orderService } from '../services/order.service.local'

export const orderStore = {
  state: {
    orders: null,
  },
  getters: {},
  mutations: {
    setOrdes(state, { orders }) {
      state.orders = orders
    },
    updateOrders(state,{savedOrder}){
      state.orders.findIndex(order => order._id === savedOrder._id)

    }
  },
  actions: {
  //   async createNewOrder({ commit }, { order }) {
  //     try {
  //       const savedOrder = await orderService.save(order)
  //       commit({ type: 'updateOrdes', savedOrder })
  //       return savedOrder
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   },
  //   async getOrders({ commit }) {
  //     try {
  //       const orders = await orderService.query()
  //       commit({ type: 'setOrdes', orders })
  //     }
  //     catch (err) {
  //       console.log('err', err)
  //     }
  //   },
  },
}
