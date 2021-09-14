import { ObjectId } from 'mongodb';
import { Restaurant } from './../models/restaurants';

export const restaurants: Restaurant[] = [
    {
        name: 'Midnight Mania',
        place: 'Koramangala 6th Block, Bangalore',
        image: 'restaurant-1.jpg',
        cuisines: [
            new ObjectId('100000000000000000000000'),
            new ObjectId('100000000000000000000001'),
            new ObjectId('100000000000000000000002'),
            new ObjectId('100000000000000000000003'),
            new ObjectId('100000000000000000000017'),
            new ObjectId('100000000000000000000018')
        ]
    },
    {
        name: 'Simpli Namdhari\'s',
        place: 'Jayanagar, Bangalore',
        image: 'restaurant-2.jpg',
        cuisines: [
            new ObjectId('100000000000000000000004'),
            new ObjectId('100000000000000000000005'),
            new ObjectId('100000000000000000000006'),
            new ObjectId('100000000000000000000019')
        ]
    },
    {
        name: 'Moshi\'s Kitchen',
        place: 'Whitefield, Bangalore',
        image: 'restaurant-3.jpg',
        cuisines: [
            new ObjectId('100000000000000000000007'),
            new ObjectId('100000000000000000000008'),
            new ObjectId('100000000000000000000009'),
            new ObjectId('100000000000000000000010'),
            new ObjectId('100000000000000000000016')
        ]
    },
    {
        name: 'Raffaele\'s Ristorante Pizzeria',
        place: 'Koramangala 6th Block, Bangalore',
        image: 'restaurant-4.jpg',
        cuisines: [
            new ObjectId('100000000000000000000011')
        ]
    },
    {
        name: 'The Downtown Pizzeria',
        place: 'Majestic, Bangalore',
        image: 'restaurant-5.jpg',
        cuisines: [
            new ObjectId('100000000000000000000012'),
            new ObjectId('100000000000000000000013'),
            new ObjectId('100000000000000000000014'),
            new ObjectId('100000000000000000000015')
        ]
    },
    {
        name: 'Burger King',
        place: 'Marathahalli, Bangalore',
        image: 'restaurant-6.jpg',
        cuisines: [
            new ObjectId('100000000000000000000020'),
            new ObjectId('100000000000000000000021'),
            new ObjectId('100000000000000000000022'),
            new ObjectId('100000000000000000000023')
        ]
    },
    {
        name: 'KFC',
        place: 'Indiranagar, Bangalore',
        image: 'restaurant-7.jpg',
        cuisines: [
            new ObjectId('100000000000000000000024'),
            new ObjectId('100000000000000000000025'),
            new ObjectId('100000000000000000000026'),
            new ObjectId('100000000000000000000027')
        ]
    },
    {
        name: 'Domino\'s',
        place: 'Silk Board, Bangalore',
        image: 'restaurant-8.jpg',
        cuisines: [
            new ObjectId('100000000000000000000028'),
            new ObjectId('100000000000000000000029'),
            new ObjectId('100000000000000000000030')
        ]
    },
];