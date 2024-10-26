import images from "./images"

const menu = {
    커피: [
        {
            id: 0,
            name: '아메리카노',
            description: '에스프레소에 물을 섞은 커피',
            price: 3500,
            img: images.americano
        },
        {
            id: 1,
            name: '카페라떼',
            description: '에스프레소에 우유을 섞은 커피',
            price: 4000,
            img: images.cafeLatte
        },
        {
            id: 2,
            name: '바닐라라떼',
            description: '에스프레소에 우유와 바닐라 시럽을 넣은 커피',
            price: 4200,
            img: images.vanillaLatte
        },
        {
            id: 3,
            name: '카페모카',
            description: '에스프레소에 우유와 초콜릿 시럽을 넣은 커피',
            price: 4500,
            img: images.cafeMocha
        },
    ],
    논커피: [
        {
            id: 4,
            name: '초코라떼',
            description: '우유에 초콜렛이 듬뿍',
            price: 4800,
            img: images.chocoLatte
        },
        {
            id: 5,
            name: '딸기라떼',
            description: '우유에 딸기가 듬뿍',
            price: 5500,
            img: images.strawberryLatte
        },
        {
            id: 6,
            name: '바나나라떼',
            description: '우유에 바나나가 듬뿍',
            price: 5000,
            img: images.bananaLatte
        },
        {
            id: 7,
            name: '녹차라떼',
            description: '우유에 녹차가 듬뿍',
            price: 5200,
            img: images.greenTeaLatte
        },
    ],
}

const options = {
    온도: ['HOT', 'ICE'],
    진하기: ['연하게', '보통', '진하게'],
    사이즈: ['Small', 'Medium', 'Large'],
}

const data =  { menu, options }

export default data