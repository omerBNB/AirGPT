import { orderService } from '../services/order.service.local'
// import { orderService } from '../services/order.service'

export const orderStore = {
    state: {
        orders: []
    },
    getters: {
        orders({ orders }) { return orders },
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        addOrder(state, { order }) {
            state.orders.push(order)
        },
        updateOrder(state, { order }) {
            const idx = state.orders.findIndex(c => c._id === order._id)
            state.orders.splice(idx, 1, order)
        },
        removeOrder(state, { orderId }) {
            state.orders = state.orders.filter(order => order._id !== orderId)
        },
        addOrderMsg(state, { orderId, msg }) {
            const order = state.orders.find(order => order._id === orderId)
            if (!order.msgs) order.msgs = []
            order.msgs.push(msg)
        },
    },
    actions: {
        async addOrder({ commit }, { order }) {
            try {
                order = await orderService.save(order)
                commit(getActionAddOrder(order))
                return order
            } catch (err) {
                console.log('orderStore: Error in addOrder', err)
                throw err
            }
        },
        async updateOrder({ commit }, { order }) {
            try {
                order = await orderService.save(order)
                // commit(getActionUpdateorder(order))
                return order
            } catch (err) {
                console.log('orderStore: Error in updateOrder', err)
                throw err
            }
        },
        async loadOrders({ commit }) {
            try {
                const orders = await orderService.query()
                commit({ type: 'setOrders', orders })
            } catch (err) {
                console.log('orderStore: Error in loadOrders', err)
                throw err
            }
        },
        async removeOrder({ commit }, { orderId }) {
            try {
                await orderService.remove(orderId)
                // commit(getActionRemoveOrder(orderId))
            } catch (err) {
                console.log('orderStore: Error in removeOrder', err)
                throw err
            }
        },
        async addOrderMsg({ commit }, { orderId, txt }) {
            try {
                const msg = await orderService.addOrderMsg(orderId, txt)
                commit({ type: 'addOrderMsg', orderId, msg })
            } catch (err) {
                console.log('orderStore: Error in addOrderMsg', err)
                throw err
            }
        },

    }
}