// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.local.js'
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

async function query(filterBy = { labels: '', where: '' }) {
  return httpService.get(STORAGE_KEY, filterBy)
}

function getById(stayId) {
  console.log('stayId:', stayId)
  // return storageService.get(STORAGE_KEY, stayId)
  return httpService.get(`stay/${stayId}`)
}

async function remove(stayId) {
  // await storageService.remove(STORAGE_KEY, stayId)
  return httpService.delete(`stay/${stayId}`)
}

async function save(stay) {
  var savedStay
  if (stay._id) {
    savedStay = await httpService.put(`stay/${stay._id}`, stay)
  } else {
    savedStay = await httpService.post('stay', stay)
  }
  return savedStay
}

async function addStayMsg(stayId, txt) {
  const savedMsg = await httpService.post(`stay/${stayId}/msg`, { txt })
  return savedMsg
}

function getEmptyStay() {
  let stay = {
    _id: null,
    name: '',
    type: 'House',
    imgUrls: [
      '../../src/imgs/imgs_test/ListImgsTest/a/3.webp',
      '../../src/imgs/imgs_test/ListImgsTest/a/1.webp',
      '../../src/imgs/imgs_test/ListImgsTest/a/2.webp',
      '../../src/imgs/imgs_test/ListImgsTest/a/4.webp',
      '../../src/imgs/imgs_test/ListImgsTest/a/5.webp',
    ],
    price: '', // in preview!
    summary: '',
    capacity: '', // guest number
    equipment: { bedroomNum: '', bedsNum: '', bathNum: '' },
    amenities: [],
    labels: [],
    host: {
      _id: '84659731',
      fullname: 'Omer',
      description: `Hi, I'm Omer, a film buff who loves watching movies. My house has a home theater system and I'd be happy to share some of my favorite films with you during your visit.`,
      imgUrl: '../../src/imgs/imgs_test/omer.jpg',
      isSuperHost: true,
    },
    loc: {
      country: '',
      countryCode: 'omertest',
      city: '',
      address: '',
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
  }
  return stay
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
