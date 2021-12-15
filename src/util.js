import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Minor",
            cover: "https://i1.sndcdn.com/avatars-R7UCfNMLdPtpvyva-LHeIQg-t500x500.jpg",
            author: "Miyagi, Andy Panda",
            path: "https://down.t9music.ru/mp3/532343917/456239086.mp3",
            color: ["#131313", "#828282"],
            id: uuidv4(),
            uid: 0,
            active: true,
        },
        {
            name: "Танцуй",
            cover: "https://i1.sndcdn.com/artworks-000394419963-uwn82z-t500x500.jpg",
            author: "Масло Черного Тмина",
            path: "https://down.t9music.ru/mp3/-119503374/456239372.mp3",
            color: ["#501414", "#BC1310"],
            id: uuidv4(),
            uid: 1,
            active: false,
        },
        {
            name: "Gods Plan",
            cover: "https://i1.sndcdn.com/artworks-000320909619-9zfyo9-t500x500.jpg",
            author: "Drake",
            path: "https://down.t9music.ru/mp3/371745467/456539548.mp3",
            color: ["#131313", "#828282"],
            id: uuidv4(),
            uid: 2,
            active: false,
        },
        {
            name: "Sight Lo-Fi",
            cover: "https://i.scdn.co/image/ab67616d00001e02fa547f17a47312f2f27b26a0",
            author: "None",
            path: "https://down.t9music.ru/mp3/-2001032963/69032963.mp3",
            color: ["#1A0D53", "#F22F76"],
            id: uuidv4(),
            uid: 3,
            active: false,
        },
        {
            name: "Underwater",
            cover: "https://i1.sndcdn.com/artworks-000641008732-u2hv3h-t500x500.jpg",
            author: "LiQWYD",
            path: "https://down.t9music.ru/mp3/227680496/456240262.mp3",
            color: ["#05043d", "#1a08a7"],
            id: uuidv4(),
            uid: 4,
            active: false,
        },
        {
            name: "Это любовь",
            cover: "https://i1.sndcdn.com/artworks-000139180462-3z4p8o-t500x500.jpg",
            author: "Скриптонит",
            path: "https://mp3uk.net/mp3/files/skriptonit-eto-lyubov-mp3.mp3",
            color: ["#8C850F", "#F0FE01"],
            id: uuidv4(),
            uid: 5,
            active: false,
        },
    ];
}

export default chillHop();
