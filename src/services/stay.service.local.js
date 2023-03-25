import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'stay'

export const stayService = {
  query,
  getById,
  save,
  remove,
  getEmptyStay,
  addStayMsg,
  labels,
}

window.cs = stayService

// TEST DATA
const gStays = [
  {
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
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Inon',
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
        rate: 9,
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
    _id: '98425306',
    name: 'Cozy Cottage in the Woods',
    type: 'House',
    imgUrls: [
      '../../src/imgs/imgs_test/ListImgsTest/b/3.webp',
      '../../src/imgs/imgs_test/ListImgsTest/b/1.webp',
      '../../src/imgs/imgs_test/ListImgsTest/b/2.webp',
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
  {
    _id: '10106546',
    name: 'Ribeira Charming Duplex',
    type: 'House',
    imgUrls: [
      '../../src/imgs/imgs_test/ListImgsTest/c/1.webp',
      '../../src/imgs/imgs_test/ListImgsTest/c/2.webp',
      '../../src/imgs/imgs_test/ListImgsTest/c/3.webp',
      '../../src/imgs/imgs_test/ListImgsTest/c/4.webp',
      '../../src/imgs/imgs_test/ListImgsTest/c/5.webp',
    ],
    price: 180,
    // in preview!
    summary:
      'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
    capacity: 2, // guest number
    equipment: { bedroomNum: 5, bedsNum: 2, bathNum: 8 },
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Yuval',
      imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
      isSuperHost: false,
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
          fullname: 'Omer',
          imgUrl: '../../src/imgs/imgs_test/omer.jpg',
        },
      },
    ],
    likedByUsers: ['mini-user'], // for user-wishlist : use $in
  },
  {
    _id: '27783059',
    name: 'Luxury Loft in the City',
    type: 'House',
    imgUrls: [
      '../../src/imgs/imgs_test/ListImgsTest/d/4.webp',
      '../../src/imgs/imgs_test/ListImgsTest/d/1.webp',
      '../../src/imgs/imgs_test/ListImgsTest/d/2.webp',
      '../../src/imgs/imgs_test/ListImgsTest/d/3.webp',
      '../../src/imgs/imgs_test/ListImgsTest/d/5.webp',
    ],
    price: '3000',
    summary:
      "Experience city living at its finest in this modern and spacious loft. With floor-to-ceiling windows and stunning views of downtown, you'll feel like you're living in a movie.",
    capacity: 2,
    equipment: { bedroomNum: 1, bedsNum: 1, bathNum: 1 },
    amenities: ['Gym', 'Pool', 'WiFi', 'Kitchen', 'TV'],
    labels: ['Top of the world', 'Play', 'Tropical'],
    host: {
      _id: '73148925',
      fullname: 'Ido',
      imgUrl: '../../src/imgs/imgs_test/ido.jpg',
      isSuperHost: true,
    },
    loc: {
      country: 'United States',
      countryCode: 'US',
      city: 'New York',
      address: '5678 Broadway',
      lat: 40.7128,
      lng: -74.006,
    },
    reviews: [
      {
        id: '43215',
        txt: 'We had a great time staying at this cabin. It was so peaceful and quiet, just what we needed. The hot tub was a nice bonus.',
        rate: 5,
        by: {
          _id: '265489',
          fullname: 'Ido',
          imgUrl: '../../src/imgs/imgs_test/ido.jpg',
        },
      },
    ],
    likedByUsers: ['user1', 'user3'],
  },
  {
    _id: '10086546',
    name: 'Lalala Hotel',
    type: 'House',
    imgUrls: [
      '../../src/imgs/imgs_test/ListImgsTest/c/1.webp',
      '../../src/imgs/imgs_test/ListImgsTest/c/2.webp',
      '../../src/imgs/imgs_test/ListImgsTest/c/3.webp',
      '../../src/imgs/imgs_test/ListImgsTest/c/4.webp',
      '../../src/imgs/imgs_test/ListImgsTest/c/5.webp',
    ],
    price: 80.0,
    // in preview!
    summary:
      'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
    capacity: 8, // guest number
    equipment: { bedroomNum: 4, bedsNum: 8, bathNum: 3 },
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Inon',
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
          fullname: 'Omer',
          imgUrl: '../../src/imgs/imgs_test/omer.jpg',
        },
      },
      {
        id: 'luul',
        txt: 'Gooood!',
        rate: 5,
        by: {
          _id: 'uyuval',
          fullname: 'Yuval',
          imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
        },
      },
    ],
    likedByUsers: ['mini-user'], // for user-wishlist : use $in
  },
  {
    _id: 'ido123',
    name: 'Ribeira Charming Duplex',
    type: 'House',
    imgUrls: [
      '../../src/imgs/imgs_test/ListImgsTest/b/1.webp',
      '../../src/imgs/imgs_test/ListImgsTest/b/2.webp',
      '../../src/imgs/imgs_test/ListImgsTest/b/3.webp',
      '../../src/imgs/imgs_test/ListImgsTest/b/4.webp',
      '../../src/imgs/imgs_test/ListImgsTest/b/5.webp',
    ],
    price: 80.0,
    // in preview!
    summary: 'Fantastic bla bla bla bla bla bla bla bla bla bla ...',
    capacity: 3, // guest number
    equipment: { bedroomNum: 1, bedsNum: 3, bathNum: 2 },
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Ido Tsehori',
      imgUrl: '../../src/imgs/imgs_test/ido_test.jpg',
      isSuperHost: false,
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
        id: 'madeId1',
        txt: `Good place bad host`,
        rate: 4,
        by: {
          _id: 'u102',
          fullname: 'Omer',
          imgUrl: '../../src/imgs/imgs_test/omer.jpg',
        },
      },
      {
        id: 'madeId2',
        txt: `Shitty place, Fuck you Ido!`,
        rate: 7,
        by: {
          _id: 'u10inon',
          fullname: 'Inon',
          imgUrl: '../../src/imgs/imgs_test/inon.jpg',
        },
      },
      {
        id: 'madeId3',
        txt: `Great place, the host Ido is very bad`,
        rate: 8,
        by: {
          _id: 'u10yuval',
          fullname: 'Yuval',
          imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
        },
      },

      {
        id: 'madeId4',
        txt: `Ido is the best`,
        rate: 10,
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
      imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
      isSuperHost: true,
    },
    loc: {
      country: 'USA',
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
        rate: 7,
        by: {
          _id: 'u10inon',
          fullname: 'Inon',
          imgUrl: '../../src/imgs/imgs_test/inon.jpg',
        },
      },
      {
        id: 'madeId3',
        txt: `Great place`,
        rate: 8,
        by: {
          _id: 'u10yuval',
          fullname: 'Yuval',
          imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
        },
      },

      {
        id: 'madeId4',
        txt: `Ido is the best`,
        rate: 10,
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
    _id: '17234367',
    name: 'Cozy Mountain Cabin',
    type: 'Cabin',
    imgUrls: [
      '../../src/imgs/imgs_test/ListImgsTest/a/2.webp',
      '../../src/imgs/imgs_test/ListImgsTest/a/3.webp',
      '../../src/imgs/imgs_test/ListImgsTest/a/1.webp',
      '../../src/imgs/imgs_test/ListImgsTest/a/4.webp',
      '../../src/imgs/imgs_test/ListImgsTest/a/5.webp',
    ],
    price: 150,
    summary: 'Quaint 2 bedroom cabin nestled in the mountains, perfect for a peaceful getaway.',
    capacity: 4,
    equipment: { bedroomNum: 3, bedsNum: 6, bathNum: 3 },
    amenities: ['TV', 'Wifi', 'Kitchen', 'Fireplace'],
    labels: ['Secluded', 'Nature', 'Romantic', 'Hiking'],
    host: {
      _id: 'u401',
      fullname: 'Inon',
      imgUrl: '../../src/imgs/imgs_test/inon.jpg',
      isSuperHost: true,
    },
    loc: {
      country: 'Canada',
      countryCode: 'CA',
      city: 'Whistler',
      address: '456 Mountain View Road',
      lat: 50.1163,
      lng: -122.9574,
    },
    reviews: [
      {
        id: 'madeId1',
        txt: `Good place bad host`,
        rate: 4,
        by: {
          _id: 'u102',
          fullname: 'Omer',
          imgUrl: '../../src/imgs/imgs_test/omer.jpg',
        },
      },
      {
        id: 'madeId2',
        txt: `Shitty place, Fuck you Ido!`,
        rate: 7,
        by: {
          _id: 'u10inon',
          fullname: 'Inon',
          imgUrl: '../../src/imgs/imgs_test/inon.jpg',
        },
      },
      {
        id: 'madeId3',
        txt: `Great place, the host Ido is very bad`,
        rate: 8,
        by: {
          _id: 'u10yuval',
          fullname: 'Yuval',
          imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
        },
      },

      {
        id: 'madeId4',
        txt: `Ido is the best`,
        rate: 10,
        by: {
          _id: 'u10ido',
          fullname: 'Ido',
          imgUrl: '../../src/imgs/imgs_test/ido.jpg',
        },
      },
    ],
    likedByUsers: ['mini-user'], // for user-wishlist : use $in
  },
]

// rate: this.reviews.reduce(
//   acc,
//   (review) => {
//     return acc + review.rate
//   },
//   0
// ),
const orders = [
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

const users = [
  {
    _id: 'u101',
    fullname: 'User 1',
    imgUrl: '/img/img1.jpg',
    username: 'user1',
    password: 'secret',
  },
  {
    _id: 'u102',
    fullname: 'User 2',
    imgUrl: '/img/img2.jpg',
    username: 'user2',
    password: 'secret',
    // "isOwner" : true // OPTIONAL
  },
]

_AddTotalRateForEachStay()
_createStays()

function _AddTotalRateForEachStay() {
  gStays.forEach((stay) => {
    const total = stay.reviews.reduce((acc, review) => {
      return (acc += review.rate)
    }, 0)
    const rateAvg = total / stay.reviews.length
    stay.rate = +rateAvg.toFixed(2).replace(/\.00$/, '').replace(/\.0$/, '')
  })
}

async function query(filterBy = { txt: '', price: 0 }) {
  let stays = await storageService.query(STORAGE_KEY)
  if (filterBy.label) {
    stays = stays.filter((stay) => stay.labels.includes(filterBy.label))
  }
  // if (filterBy.txt) {
  //   const regex = new RegExp(filterBy.txt, 'i')
  //   stays = stays.filter((stay) => regex.test(stay.vendor) || regex.test(stay.description))
  // }
  // if (filterBy.price) {
  //   stays = stays.filter((stay) => stay.price <= filterBy.price)
  // }
  return stays
}

function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId)
}

async function remove(stayId) {
  await storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
  var savedStay
  if (stay._id) {
    savedStay = await storageService.put(STORAGE_KEY, stay)
  } else {
    // Later, owner is set by the backend
    stay.owner = userService.getLoggedinUser()
    savedStay = await storageService.post(STORAGE_KEY, stay)
  }
  return savedStay
}

async function addStayMsg(stayId, txt) {
  // Later, this is all done by the backend
  const stay = await getById(stayId)
  if (!stay.msgs) stay.msgs = []

  const msg = {
    id: utilService.makeId(),
    by: userService.getLoggedinUser(),
    txt,
  }
  stay.msgs.push(msg)
  await storageService.put(STORAGE_KEY, stay)

  return msg
}

function getEmptyStay() {
  return {
    vendor: 'Susita-' + (Date.now() % 1000),
    price: utilService.getRandomIntInclusive(1000, 9000),
  }
}

function _createStays() {
  let stays = utilService.loadFromStorage(STORAGE_KEY)
  if (!stays) utilService.saveToStorage(STORAGE_KEY, gStays)
}

function labels() {
  return [
    {
      key: 'Trending',
      url: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg',
    },
    {
      key: 'Adapted',
      url: 'https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg',
    },
    {
      key: 'Tropical',
      url: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
    },
    {
      key: 'Iconic',
      url: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
    },
    {
      key: 'Beachfront',
      url: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
    },
    {
      key: 'Campers',
      url: 'https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg',
    },
    {
      key: 'Ryokans',
      url: 'https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg',
    },
    {
      key: 'Minsus',
      url: 'https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg',
    },
    {
      key: 'Play',
      url: 'https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg',
    },
    {
      key: 'Hanoks',
      url: 'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg',
    },
    {
      key: 'Private',
      url: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
    },
    {
      key: 'OMG!',
      url: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
    },
    {
      key: 'Skiing',
      url: 'https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg',
    },
    {
      key: 'Private',
      url: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg',
    },
    {
      key: 'Off-the-grid',
      url: 'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg',
    },
    {
      key: 'Luxe',
      url: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
    },
    {
      key: 'Caves',
      url: 'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg',
    },
    {
      key: 'Boats',
      url: 'https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg',
    },
    {
      key: 'Casas particulares',
      url: 'https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg',
    },
    {
      key: 'new',
      url: 'https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg',
    },
    {
      key: 'top',
      url: 'https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg',
    },
    {
      key: 'Golfing',
      url: 'https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg',
    },
    {
      key: 'Earth homes',
      url: 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg',
    },
    {
      key: 'Countryside',
      url: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
    },
  ]
}

// ;(async () => {
//   await storageService.post(STORAGE_KEY, { vendor: 'Subali Karov 1', price: 180 })
//   await storageService.post(STORAGE_KEY, { vendor: 'Subali Rahok 2', price: 240 })
// })()

// Homepage: TOP categories: Best Rate / Houses / Kitchen  - show all - link to Explore
// Renders a <StayList> with <StayPreview> with Link to <StayDetails>   url: /stay/123
// See More => /explore?topRate=true
// See More => /explore?type=House
// See More => /explore?amenities=Kitchen
// Explore page:
// stayService.query({type: 'House'})

// UserDetails
//  basic info
//  visitedStays => orderService.query({userId: 'u101'})
//  myStayOrders => orderService.query({hostId: 'u101'})
//  ownedStays => stayService.query({hostId: 'u103'})

// StayEdit - make it super easy to add Stay for development
// StayList, StayPreview
// Order, confirm Order
// Lastly: StayExplore, Filtering

// Example - figuring up if the user is an owner:
// userService.login()
//  const userStays = stayService.query({ownerId: loggeinUser._id})
//  loggeinUser.isOwner = userStays.length > 0
