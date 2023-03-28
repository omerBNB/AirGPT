import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const ORDER_KEY = 'order'

export const tripService = {
    query,
    getById,
    save,
    remove,
    addOrderMsg,
}

window.cs = tripService

const gOrders = [
    {
        _id: 'o1225',
        hostId: 'u102',
        buyer: {
            _id: 'u101',
            fullname: 'User 1',
        },
        totalPrice: 160,
        startDate: '2025/10/15',
        endDate: '2025/10/17',
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
_createOrders()

async function query() {
    let orders = await storageService.query(ORDER_KEY)
    return orders
}

function getById(orderId) {
    return storageService.get(ORDER_KEY, orderId)
}

async function remove(orderId) {
    await storageService.remove(ORDER_KEY, orderId)
}

async function save(order) {
    let savedOrder
    if (order._id) {
        savedOrder = await storageService.put(ORDER_KEY, order)
    } else {
        savedOrder = await storageService.post(ORDER_KEY, order)
    }
    return order
}

async function addOrderMsg(orderId, txt) {
    // Later, this is all done by the backend
    const order = await getById(orderId)
    if (!order.msgs) order.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt,
    }
    order.msgs.push(msg)
    await storageService.put(ORDER_KEY, order)

    return msg
}

function _createOrders() {
    let orders = utilService.loadFromStorage(ORDER_KEY)
    if (!orders) utilService.saveToStorage(ORDER_KEY, gOrders)
}


// ;(async () => {
//   await storageService.post(ORDER_KEY, { vendor: 'Subali Karov 1', price: 180 })
//   await storageService.post(ORDER_KEY, { vendor: 'Subali Rahok 2', price: 240 })
// })()

// Homepage: TOP categories: Best Rate / Houses / Kitchen  - show all - link to Explore
// Renders a <orderList> with <orderPreview> with Link to <orderDetails>   url: /order/123
// See More => /explore?topRate=true
// See More => /explore?type=House
// See More => /explore?amenities=Kitchen
// Explore page:
// orderService.query({type: 'House'})

// UserDetails
//  basic info
//  visitedorders => .query({userId: 'u101'})
//  myorderOrders => .query({hostId: 'u101'})
//  ownedorders => orderService.query({hostId: 'u103'})

// orderEdit - make it super easy to add order for development
// orderList, orderPreview
// Order, confirm Order
// Lastly: orderExplore, Filtering

// Example - figuring up if the user is an owner:
// userService.login()
//  const userorders = orderService.query({ownerId: loggeinUser._id})
//  loggeinUser.isOwner = userorders.length > 0
