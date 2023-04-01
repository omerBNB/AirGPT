// import { storageService } from './async-storage.service.js'
import { httpService } from "./http.service.js"
// const USER_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const API = 'auth/'
const USER = 'user/'

export const userService = {
    getLoggedinUser,
    login,
    logout,
    signup,
    getById,
    getUsers,
    // update,
    save
}

function getUsers(){
    return httpService.get(`user`)
}

function getLoggedinUser() {
    const str = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
    return JSON.parse(str)
}


async function login(credentials) {
    console.log('credentials',credentials)
    const user = await httpService.post(API + 'login', credentials)
    if (user) return saveLocalUser(user)
}

async function logout() {

    try {
        httpService.post(API + 'logout')
    }
    catch (err) {
        console.error(err);
    }
}

// async function update(user) {
//     user = await httpService.put(`user/${user._id}`, user)
//     if (getLoggedinUser()._id === user._id) saveLocalUser(user)
//     return user
// }
async function save(user) {
    user = await httpService.put(`user/${user._id}`, user)
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

function signup(credentials) {
    try {
        return httpService.post(API + 'signup', credentials)
    }
    catch {
        console.error(err)
    }
}

function getById(userId) {
    return axios.get(`/api/user/${userId}`).then(res => res.data)
}

function saveLocalUser(userBack) {
    const user = {
        _id: userBack._id,
        fullname: userBack.fullname,
        username: userBack.username,
        imgUrl: userBack.imgUrl,
        stayList: userBack.stayList,
    }
    if (userBack.isAdmin) user.isAdmin = true
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}