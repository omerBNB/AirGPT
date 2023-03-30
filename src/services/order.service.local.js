import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const ORDER_KEY = 'order'

export const orderService = {
  query,
  getById,
  save,
  remove,
  getEmptyOrder,
  addOrderMsg,
}

window.cs = orderService

const gOrders = [
  {
    _id: 'o1225',
    hostId: 'u102',
    buyer: {
      _id: 'u101',
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

function getEmptyOrder() {
  let order = {
    _id: null, // order id
    hostId: null, // host id
    buyer: { // the logged in user
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
      pets: 0
    },
    stay: { // the stay
      _id: null,
      name: '',
      price: 0,
    },
    msgs: [],
    status: 'pending', // pending, approved
  }
  return order
}

function _createOrders() {
  let orders = utilService.loadFromStorage(ORDER_KEY)
  if (!orders) utilService.saveToStorage(ORDER_KEY, gOrders)
}


