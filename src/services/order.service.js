
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const ORDER_KEY = 'order'
let gOrders

export const orderService = {
    query,
    getById,
    save,
    remove,
    getEmptyOrder,
    // addorderMsg
}
window.cs = orderService


async function query() {
    // filterBy = { _id: '' }
    return httpService.get(ORDER_KEY)
}

function getById(orderId) {
    return httpService.get(`${ORDER_KEY}/${orderId}`)
}

async function remove(orderId) {
    return httpService.delete(`${ORDER_KEY}/${orderId}`)
}

async function save(order) {
    var savedorder
    if (order._id) {
        savedorder = await httpService.put(`${ORDER_KEY}/${order._id}`, order)
    } else {
        // order.owner = userService.getLoggedinUser()
        savedorder = await httpService.post(`${ORDER_KEY}`, order)
    }
    return savedorder
}

// async function addorderMsg(orderId, txt) {
//     // Later, this is all done by the backend
//     const order = await getById(orderId)
//     if (!order.msgs) order.msgs = []

//     const msg = {
//         id: utilService.makeId(),
//         by: userService.getLoggedinUser(),
//         txt
//     }
//     order.msgs.push(msg)
//     await storageService.put(ORDER_KEY, order)

//     return msg
// }

function getEmptyOrder() {
    let order = {
        _id: null, // order id
        hostId: null, // host id
        buyer: {
            // the logged in user
            _id: null,
            fullname: '',
        },
        totalPrice: 0,
        checkin: '',
        checkout: '',
        guests: {
            adults: 0,
            children: 0,
            infants: 0,
            pets: 0,
        },
        stay: {
            // the stay
            _id: null,
            name: '',
            price: 0,
        },
        msgs: [],
        status: 'pending', // pending, approved
    }
    return order
}