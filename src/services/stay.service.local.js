import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.local.js'

const STORAGE_KEY = 'stay'

export const stayService = {
  query,
  getById,
  save,
  remove,
  getEmptyStay,
  addStayMsg,
  labels,
  // getEmptyOrder,
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
        at: '2017-10-03T04:00:00.000Z',
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
        at: '2018-01-07T05:00:00.000Z',
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
        at: '2018-01-07T05:00:00.000Z',
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

    likedByUsers: [], // for user-wishlist : use $in
  },
  {
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
        at: '2017-10-03T04:00:00.000Z',
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
        at: '2016-01-06T05:00:00.000Z',
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
    likedByUsers: [],
  },
  {
    _id: '10106546',
    name: 'Ribeira Charming Duplex',
    type: 'House',
    imgUrls: [
      '../../src/imgs/imgs_test/ListImgsTest/h/1.webp',
      '../../src/imgs/imgs_test/ListImgsTest/h/2.webp',
      '../../src/imgs/imgs_test/ListImgsTest/h/3.webp',
      '../../src/imgs/imgs_test/ListImgsTest/h/4.webp',
      '../../src/imgs/imgs_test/ListImgsTest/h/5.webp',
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
        at: '2017-08-04T04:00:00.000Z',
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
    likedByUsers: [], // for user-wishlist : use $in
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
    labels: ['Top of the world', 'Play', 'Trendings'],
    host: {
      _id: '73148925',
      fullname: 'Ido',
      description: `Hi, I'm Ido, a musician who plays the piano and guitar. My house has a small music room and I'd be happy to give you a private concert during your stay.`,
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
        at: '2015-10-01T04:00:00.000Z',
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
    likedByUsers: [],
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
    labels: ['Beachfront', 'Adapted', 'Play', 'OMG!', 'Iconic'],
    host: {
      _id: 'u101',
      fullname: 'Inon',
      description: `Hey, I'm Inon, a nature lover who enjoys hiking in the nearby hills. My house has a garden filled with native plants and I can recommend some great hiking trails in the area.`,
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
        at: '2015-10-01T04:00:00.000Z',
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
        at: '2015-10-01T04:00:00.000Z',
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
    likedByUsers: [], // for user-wishlist : use $in
  },
  {
    _id: '123',
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
    labels: ['Top of the world', 'Campers', 'Tropical', 'Tropical'],
    host: {
      _id: 'u101',
      fullname: 'Ido Tsehori',
      description: `Hello, I'm Ido, a professional chef who loves experimenting with different cuisines. My house has a fully equipped kitchen and I'd be happy to cook a meal for you during your visit.`,
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
        at: '2017-01-16T05:00:00.000Z',
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
        at: '2017-01-29T05:00:00.000Z',
        id: 'madeId2',
        txt: `Shitty place, Fuck you Ido!`,
        rate: 1,
        by: {
          _id: 'u10inon',
          fullname: 'Inon',
          imgUrl: '../../src/imgs/imgs_test/inon.jpg',
        },
      },
      {
        at: '2018-05-04T04:00:00.000Z',
        id: 'madeId3',
        txt: `Great place, the host Ido is very bad`,
        rate: 3,
        by: {
          _id: 'u10yuval',
          fullname: 'Yuval',
          imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
        },
      },

      {
        at: '2018-05-09T04:00:00.000Z',
        id: 'madeId4',
        txt: `Ido is the best`,
        rate: 5,
        by: {
          _id: 'u10ido',
          fullname: 'Ido',
          imgUrl: '../../src/imgs/imgs_test/ido.jpg',
        },
      },
    ],
    likedByUsers: [], // for user-wishlist : use $in
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
        at: '2016-12-11T05:00:00.000Z',
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
        at: '2016-12-11T05:00:00.000Z',
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
        at: '2016-12-11T05:00:00.000Z',
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
        at: '2016-12-11T05:00:00.000Z',
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
    likedByUsers: [], // for user-wishlist : use $in
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
      description: `Hi, I'm Inon, a language teacher who speaks fluent Hebrew, English and Spanish. My house is filled with books in different languages and I'd be happy to recommend some great reads during your visit.`,
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
        at: '2016-03-22T04:00:00.000Z',
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
        at: '2014-08-06T04:00:00.000Z',
        id: 'madeId3',
        txt: `Great place, the host Ido is very bad`,
        rate: 2.5,
        by: {
          _id: 'u10yuval',
          fullname: 'Yuval',
          imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
        },
      },

      {
        at: '2014-09-06T04:00:00.000Z',
        id: 'madeId4',
        txt: `Goood`,
        rate: 4.5,
        by: {
          _id: 'u10ido',
          fullname: 'Ido',
          imgUrl: '../../src/imgs/imgs_test/ido.jpg',
        },
      },
    ],
    likedByUsers: [], // for user-wishlist : use $in
  },
  //
  {
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
        at: '2012-09-06T04:00:00.000Z',
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
    likedByUsers: [],
  },
  //
  {
    _id: '90245',
    name: 'Green Oasis',
    type: 'House',
    imgUrls: [
      '../../src/imgs/imgs_test/ListImgsTest/f/1.webp',
      '../../src/imgs/imgs_test/ListImgsTest/f/2.webp',
      '../../src/imgs/imgs_test/ListImgsTest/f/3.webp',
      '../../src/imgs/imgs_test/ListImgsTest/f/4.webp',
      '../../src/imgs/imgs_test/ListImgsTest/f/5.webp',
    ],
    price: 754,
    summary:
      'Escape the hustle and bustle of the city and enjoy a relaxing stay in this green oasis. The spacious rooms and well-equipped kitchen make it perfect for families or groups of friends.',
    capacity: 6,
    equipment: { bedroomNum: 3, bedsNum: 4, bathNum: 2 },
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed', 'Cooking basics'],
    labels: ['Top of the world', 'Trending', 'Play', 'Tropical'],
    host: {
      _id: 34562,
      fullname: 'inon',
      description: `Hey, I'm Inon, a coffee enthusiast who loves trying new blends. My house has a coffee bar and I'd be happy to make you a cup during your stay.`,
      imgUrl: '../../src/imgs/imgs_test/inon.jpg',
      isSuperHost: true,
    },
    loc: {
      country: 'Spain',
      countryCode: 'ES',
      city: 'Barcelona',
      address: 'Carrer de Balmes 68',
      lat: 41.3933,
      lng: 2.1636,
    },
    reviews: [
      {
        at: '2011-09-06T04:00:00.000Z',
        id: 34521,
        txt: 'Inon was a great host and the house was perfect for our needs. Would definitely stay again!',
        rate: 2,
        by: {
          _id: 23456,
          fullname: 'Inon',
          imgUrl: '../../src/imgs/imgs_test/inon.jpg',
        },
      },
      {
        at: '2013-09-06T04:00:00.000Z',
        id: 90234,
        txt: 'Beautiful house in a great location. Highly recommended!',
        rate: 4,
        by: {
          _id: 56789,
          fullname: 'omer',
          imgUrl: '../../src/imgs/imgs_test/omer.jpg',
        },
      },
    ],

    likedByUsers: [],
  },
  //
  {
    _id: '65321',
    name: 'Cozy Retreat',
    type: 'House',
    imgUrls: [
      '../../src/imgs/imgs_test/ListImgsTest/e/1.webp',
      '../../src/imgs/imgs_test/ListImgsTest/e/2.webp',
      '../../src/imgs/imgs_test/ListImgsTest/e/3.webp',
      '../../src/imgs/imgs_test/ListImgsTest/e/4.webp',
      '../../src/imgs/imgs_test/ListImgsTest/e/5.webp',
    ],
    price: 573,
    summary:
      'A lovely house located in the heart of the city, perfect for a romantic getaway or a small family vacation.',
    capacity: 3,
    equipment: { bedroomNum: 2, bedsNum: 2, bathNum: 1 },
    amenities: ['TV', 'Wifi', 'Kitchen', 'No smoking', 'No pets', 'Washer'],
    labels: ['Relax', 'City life', 'Family-friendly'],
    host: {
      _id: 23456,
      fullname: 'Inon',
      imgUrl: '../../src/imgs/imgs_test/inon.jpg',
      isSuperHost: true,
    },
    loc: {
      country: 'Spain',
      countryCode: 'ES',
      city: 'Madrid',
      address: 'Calle Mayor 32',
      lat: 40.4154,
      lng: -3.7074,
    },
    reviews: [
      {
        at: '2012-03-06T04:00:00.000Z',
        id: 45678,
        txt: 'Great location, wonderful host, comfortable beds. Highly recommend!',
        rate: 9,
        by: {
          _id: 34567,
          fullname: 'Omer',
          imgUrl: '../../src/imgs/imgs_test/omer.jpg',
        },
      },
      {
        at: '2012-03-06T04:00:00.000Z',
        id: 78901,
        txt: 'Lovely house, but a bit small for our family of four. Would recommend for couples or small families.',
        rate: 7,
        by: {
          _id: 56789,
          fullname: 'Yuval',
          imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
        },
      },
    ],
    likedByUsers: [],
  },
  //
  {
    _id: '28174',
    name: 'Villa Sunshine',
    type: 'House',
    imgUrls: [
      '../../src/imgs/imgs_test/ListImgsTest/h/1.webp',
      '../../src/imgs/imgs_test/ListImgsTest/h/2.webp',
      '../../src/imgs/imgs_test/ListImgsTest/h/3.webp',
      '../../src/imgs/imgs_test/ListImgsTest/h/4.webp',
      '../../src/imgs/imgs_test/ListImgsTest/h/5.webp',
    ],
    price: 849,
    summary:
      'Located in the heart of the city, Villa Sunshine offers modern amenities and a sunny balcony for a relaxing stay. Enjoy the nearby attractions and explore the city at your leisure.',
    capacity: 6,
    equipment: { bedroomNum: 3, bedsNum: 3, bathNum: 2 },
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Cooking basics'],
    labels: ['Trending', 'Play', 'City', 'Modern'],
    host: {
      _id: 23405,
      fullname: 'Omer',
      imgUrl: '../../src/imgs/imgs_test/omer.jpg',
      isSuperHost: true,
    },
    loc: {
      country: 'Italy',
      countryCode: 'IT',
      city: 'Rome',
      address: 'Via del Corso 12',
      lat: 41.8955,
      lng: 12.4823,
    },
    reviews: [
      {
        at: '2017-03-06T04:00:00.000Z',
        id: 75361,
        txt: 'Beautiful villa with everything you need for a perfect holiday. The host was friendly and helpful throughout our stay.',
        rate: 9,
        by: {
          _id: 98763,
          fullname: 'yuval',
          imgUrl: '../../src/imgs/imgs_test/yuval.jpg',
        },
      },
      {
        at: '2017-08-07T04:00:00.000Z',
        id: 45962,
        txt: 'The villa was even better than we expected - spacious, clean and well equipped. The location was perfect for exploring the city. Highly recommended!',
        rate: 10,
        by: {
          _id: 87654,
          fullname: 'Ido',
          imgUrl: '../../src/imgs/imgs_test/ido.jpg',
        },
      },
    ],

    likedByUsers: [], // for user-wishlist : use $in
  },
]

const gOrders = [
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

const gUsers = [
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

async function query( filterBy = { label: '', userSpecs: '' }) {
  
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
  // console.log('filterByUserSpecs.where', filterByUserSpecs.where)
  if (filterBy.userSpecs?.where) {
    stays = stays.filter((stay) => stay.loc.country.includes(filterBy.userSpecs.where))
  }
  return stays
}

function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId)
}

async function remove(stayId) {
  await storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
  let savedStay
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
