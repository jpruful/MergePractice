let pageData = {
    productName: '訂張票到月球',
    productDescription: '月球之旅是搭乘我們最高級的飛行船，可以觀看外太空的風景。',
    imageSrc:[
        "galaxy_tour/images/asteroid.jpg",
        "galaxy_tour/images/fantasy.jpg",
        "galaxy_tour/images/space.jpg",
        "galaxy_tour/images/spaceship.jpg"
    ],
    h2ClassController:{
        centered:true,
        colorFont:true
    },
    pStyleController:{
        'margin-left':'50px',
        color:'blue',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        width:'50%'
    },
    productClasses:[
        {
            name:'Coach',
            price:125000,
            seatsAvaliable:20,
            earlyBird:true
        },
        {
            name:'Business',
            price:275000,
            seatsAvaliable:6,
            earlyBird:true
        },
        {
            name:'First',
            price:430000,
            seatsAvaliable:2,
            earlyBird:false
        }
    ],
    imageAlt:"Photo from space"
};

const app = Vue.createApp({
    data(){
        return pageData;
    }
});

app.mount("#app");