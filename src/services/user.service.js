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
            trips: [{
                isDone: false,
                checkIn: '2025/10/15',
                checkOut: '2025/10/17',
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
            },]
        }]
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
    console.log('user', user)
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
    user = { _id: user._id, fullname: user.fullname, username: user.username, imgUrl: user.imgUrl, wishList: user.wishList, stayList: user.stayList }
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