
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.local.js'

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

_createOrders()
function _createOrders() {
    gOrders = utilService.loadFromStorage(ORDER_KEY)
    console.log('gOrders', gOrders)
    if (!gOrders || !gOrders.length) {
        gOrders = [
            {
                _id: 'o1225',
                hostId: 'omer',
                buyer: {
                    _id: 'inon',
                    fullname: 'User 1',
                },
                totalPrice: 160,
                checkin: '2025/10/15',
                checkout: '2025/10/17',
                guests: {
                    adults: 2,
                    kids: 1,
                },
                stay: {
                    _id: 'h102',
                    name: 'House Of Uncle My',
                    price: 80.0,
                },
                msgs: [],
                status: 'pending', // pending, approved
            },
        ]
        utilService.saveToStorage(ORDER_KEY, gOrders)
    }
    return gOrders
}


async function query() {
    var orders = await storageService.query(ORDER_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     orders = orders.filter(order => regex.test(order.vendor) || regex.test(order.description))
    // }
    // if (filterBy.price) {
    //     orders = orders.filter(order => order.price <= filterBy.price)
    // }
    return orders
}

function getById(orderId) {
    return storageService.get(ORDER_KEY, orderId)
}

async function remove(orderId) {
    await storageService.remove(ORDER_KEY, orderId)
}

async function save(order) {
    var savedOrder
    if (order._id) {
        savedOrder = await storageService.put(ORDER_KEY, order)
    } else {
        // Later, owner is set by the backend
        // order.owner = userService.getLoggedinUser()
        savedOrder = await storageService.post(ORDER_KEY, order)
    }
    return savedOrder
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