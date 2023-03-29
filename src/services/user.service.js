import { storageService } from './async-storage.service'
import { utilService } from './util.service'
// import { httpService } from './http.service'
import { store } from '../store/store'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
import { showSuccessMsg } from './event-bus.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const USER = 'user'
let gUsers

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    changeScore,
    save,
    updateWishList,
}

window.userService = userService

_createUsers()
function _createUsers() {
    gUsers = utilService.loadFromStorage(USER)
    console.log('gUsers', gUsers)
    if (!gUsers || !gUsers.length) {
        gUsers = [{
            _id: '1234',
            fullname: 'user1',
            username: 'user1',
            password: 123,
            imgUrl: '../../src/imgs/imgs_test/omer.jpg',
            wishList: [],
            stayList: [], //user stay list as a host,
            trips: [
                {
                    checkIn: '2025/10/15',
                    checkOut: 1640884400000,
                    _id: '14123456',
                    name: 'Oceanfront Beach House',
                    type: 'House',
                    imgUrls: [
                        '../../src/imgs/imgs_test/ListImgsTest/c/1.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/c/2.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/c/3.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/c/4.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/c/5.webp',
                    ],
                    price: 200,
                    summary:
                        'Beautiful 3 bedroom beach house located on the oceanfront with stunning views of the water.',
                    capacity: 6,
                    equipment: { bedroomNum: 3, bedsNum: 6, bathNum: 3 },
                    amenities: ['TV', 'Wifi', 'Kitchen', 'Washer', 'Outdoor Grill'],
                    labels: ['Beachfront', 'Relaxation', 'Family-Friendly', 'Surfing'],
                    host: {
                        _id: 'u201',
                        fullname: 'Yuval',
                        description: `Hi there! I'm Yuval, a freelance photographer who enjoys capturing candid moments. My house is filled with my favorite photographs and I hope it will inspire you to explore the beauty of Malibu.`,
                        imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
                        isSuperHost: true,
                    },
                    loc: {
                        country: 'United States',
                        countryCode: 'US',
                        city: 'Malibu',
                        address: '123 Oceanfront Drive',
                        lat: 34.0407,
                        lng: -118.6536,
                    },
                    reviews: [
                        {
                            id: 'madeId1',
                            txt: `Good place`,
                            rate: 4,
                            by: {
                                _id: 'u102',
                                fullname: 'Omer',
                                imgUrl: '../../src/imgs/imgs_test/omer.jpg',
                            },
                        },
                        {
                            id: 'madeId2',
                            txt: `Good place`,
                            rate: 3.5,
                            by: {
                                _id: 'u10inon',
                                fullname: 'Inon',
                                imgUrl: '../../src/imgs/imgs_test/inon.jpg',
                            },
                        },
                        {
                            id: 'madeId3',
                            txt: `Great place`,
                            rate: 5,
                            by: {
                                _id: 'u10yuval',
                                fullname: 'Yuval',
                                imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
                            },
                        },

                        {
                            id: 'madeId4',
                            txt: `Ido is the best`,
                            rate: 4,
                            by: {
                                _id: 'u10ido',
                                fullname: 'Ido',
                                imgUrl: '../../src/imgs/imgs_test/ido.jpg',
                            },
                        },
                    ],
                    likedByUsers: ['mini-user'], // for user-wishlist : use $in
                },
                {
                    checkIn: '2025/10/15',
                    checkOut: 1540884400000,
                    _id: '18429',
                    name: 'Garden Paradise',
                    type: 'House',
                    imgUrls: [
                        '../../src/imgs/imgs_test/ListImgsTest/d/1.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/d/2.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/d/3.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/d/4.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/d/5.webp',
                    ],
                    price: 412,
                    summary:
                        "This beautiful house has a gorgeous garden with lots of flowers and fruit trees. You'll feel like you're in paradise.",
                    capacity: 4,
                    equipment: { bedroomNum: 2, bedsNum: 2, bathNum: 1 },
                    amenities: ['TV', 'Wifi', 'Kitchen', 'Pets allowed', 'Washer'],
                    labels: ['Nature', 'Skiing', 'Private', 'Tropical'],
                    host: {
                        _id: 76543,
                        fullname: 'omer',
                        description: `Hola! I'm Omer, a literature professor who loves reading. My house has a cozy reading nook and I'd be happy to recommend some great books to read during your visit.`,
                        imgUrl: '../../src/imgs/imgs_test/omer.jpg',
                        isSuperHost: true,
                    },
                    loc: {
                        country: 'Spain',
                        countryCode: 'ES',
                        city: 'Barcelona',
                        address: 'Carrer de Sants',
                        lat: 41.377962,
                        lng: 2.134375,
                    },
                    reviews: [
                        {
                            id: 98342,
                            txt: "Omer's house is wonderful. The garden is a real highlight and we enjoyed picking fresh fruit every morning. Maria is a great host and very helpful.",
                            rate: 2,
                            by: {
                                _id: 12345,
                                fullname: 'Ido',
                                imgUrl: '../../src/imgs/imgs_test/ido.jpg',
                            },
                        },
                        {
                            id: 98432,
                            txt: 'We had a lovely stay at Garden Paradise. The house is cozy and the garden is amazing. We would definitely come back.',
                            rate: 4.5,
                            by: {
                                _id: 56789,
                                fullname: 'yuval',
                                imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
                            },
                        },
                    ],
                    likedByUsers: ['mini-user', 'user1', 'user3'],
                },
                {
                    checkIn: '2025/10/15',
                    checkOut: 1680884400000,
                    _id: '10006546',
                    name: 'Ribeira Charming Duplex',
                    type: 'House',
                    imgUrls: [
                        '../../src/imgs/imgs_test/ListImgsTest/a/3.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/a/1.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/a/2.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/a/4.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/a/5.webp',
                    ],
                    price: 80.0, // in preview!
                    summary:
                        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
                    capacity: 8, // guest number
                    equipment: { bedroomNum: 5, bedsNum: 11, bathNum: 4 },
                    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
                    labels: ['Top of the world', 'Trending', 'Play', 'Tropical', 'Castles'],
                    host: {
                        _id: 'u101',
                        fullname: 'Inon',
                        description: `Hi there, I'm Inon, a journalist who loves to write. My house has a home office and I'd be happy to share some of my writing tips with you during your stay.`,
                        imgUrl: '../../src/imgs/imgs_test/inon.jpg',
                        isSuperHost: true,
                    },
                    loc: {
                        country: 'Portugal',
                        countryCode: 'PT',
                        city: 'Porto',
                        address: '17 Kombo st',
                        lat: -8.61308,
                        lng: 41.1413,
                    },
                    reviews: [
                        {
                            id: 'madeId',
                            txt: 'Very helpful hosts. Cooked traditional...',
                            rate: 4,
                            by: {
                                _id: 'u102',
                                fullname: 'user2',
                                imgUrl: '../../src/imgs/imgs_test/omer.jpg',
                            },
                        },
                        {
                            id: 'madeId',
                            txt: 'Very helpful hosts. Cooked traditional...',
                            rate: 4,
                            by: {
                                _id: 'u102',
                                fullname: 'user2',
                                imgUrl: '../../src/imgs/imgs_test/omer.jpg',
                            },
                        },
                        {
                            id: 'u103',
                            txt: 'nice...',
                            rate: 2,
                            by: {
                                _id: 'u102yuval',
                                fullname: 'Yuval',
                                imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
                            },
                        },
                    ],
                    likedByUsers: ['mini-user'], // for user-wishlist : use $in
                },
                {
                    checkIn: '2025/10/15',
                    checkOut: 1681874400000,
                    _id: '98425306',
                    name: 'Cozy Cottage in the Woods',
                    type: 'House',
                    imgUrls: [
                        '../../src/imgs/imgs_test/ListImgsTest/b/1.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/b/2.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/b/3.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/b/4.webp',
                        '../../src/imgs/imgs_test/ListImgsTest/b/5.webp',
                    ],
                    price: '1200',
                    summary:
                        'Escape to this charming cabin surrounded by trees and wildlife. Perfect for a weekend getaway or a long-term stay. Enjoy the peace and quiet of nature, while still being close to all the amenities of town.',
                    capacity: 4,
                    equipment: { bedroomNum: 2, bedsNum: 2, bathNum: 1 },
                    amenities: ['Fireplace', 'Hot tub', 'WiFi', 'Kitchen'],
                    labels: ['Trending', 'Play', 'Tropical'],
                    host: {
                        _id: '84659731',
                        fullname: 'Omer',
                        description: `Hi, I'm Omer, a film buff who loves watching movies. My house has a home theater system and I'd be happy to share some of my favorite films with you during your visit.`,
                        imgUrl: '../../src/imgs/imgs_test/omer.jpg',
                        isSuperHost: true,
                    },
                    loc: {
                        country: 'United States',
                        countryCode: 'US',
                        city: 'Seattle',
                        address: '1234 Forest Way',
                        lat: 47.6062,
                        lng: -122.3321,
                    },
                    reviews: [
                        {
                            id: '43215',
                            txt: 'We had a great time staying at this cabin. It was so peaceful and quiet, just what we needed. The hot tub was a nice bonus.',
                            rate: 5,
                            by: {
                                _id: '265489',
                                fullname: 'Yuval',
                                imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
                            },
                        },
                        {
                            id: '4321325',
                            txt: 'We had a great time staying at this cabin. It was so peaceful and quiet, just what we needed. The hot tub was a nice bonus.',
                            rate: 2,
                            by: {
                                _id: '265489',
                                fullname: 'Ido',
                                imgUrl: '../../src/imgs/imgs_test/ido.jpg',
                            },
                        },
                    ],
                    likedByUsers: ['user1', 'user3'],
                },
            ]
        },]
        utilService.saveToStorage(USER, gUsers)
    }
    return gUsers
}

function getUsers() {
    return storageService.query('user')
    // return httpService.get(`user`)
}

function onUserUpdate(user) {
    showSuccessMsg(`This user ${user.fullname} just got updated from socket, new score: ${user.score}`)
    store.dispatch({ type: 'setWatchedUser', user })
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    // const user = await httpService.get(`user/${userId}`)

    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)

    return user
}

function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

function updateWishList(stay) {
    const user = getLoggedinUser()
    if (!user.wishList.find(s => +s._id === +stay._id)) user.wishList.push(stay)
    else {
        let idx = user.wishList.findIndex(s => s._id === stay._id)
        user.wishList.splice(idx, 1)
    }
    saveLocalUser(user)
    return save(user)
}

async function save(user) {
    let savedUser
    if (user._id) savedUser = await storageService.put(USER, user)
    else savedUser = await storageService.post(USER, user)
    saveLocalUser(savedUser)
    return savedUser
}

async function login(userCred) {
    const users = await storageService.query('user')
    let user = users.find(user => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        // socketService.login(user._id)
        return saveLocalUser(user)
    }
}

async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    // socketService.login(user._id)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    // return await httpService.post('auth/logout')
    const user = null
    return user
}

async function changeScore(by) {
    const user = getLoggedinUser()
    if (!user) throw new Error('Not loggedin')
    user.score = user.score + by || by
    await update(user)
    return user.score
}

function saveLocalUser(user) {
    user = { _id: user._id, fullname: user.fullname, username: user.username, imgUrl: user.imgUrl, wishList: user.wishList, stayList: user.stayList, trips: user.trips }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}


// ;(async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'puki', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })()