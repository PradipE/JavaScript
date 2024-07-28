//this is a object file
// const d={
//     name:'pradip',
//     DOB:'24/01/2001',
//     vill:'tamra',
//     post:'parsundi',
//     dist:'birbhum'
// }

    

// Object.freeze(d)
// d.name='pradip mondal'

// console.log(d)
//this is json file that key are string and value also string
//rest or spreade operator
// function add(...num)
// {
//        return console.log(num);
// }
// add(2,3,4,5,6,7)
//filter map reducer
// const nums= [1,2,3,4,5,6,7,8,9]
// const nums1=nums.filter((num)=>
// {
//         if(num > 4)
//         {
//             return num
//         }
// } )    
// console.log(nums1)
//filter
const Cardata=[
    {
       id:1,
       image:'/Imgdata/audi-q8.jpg',
       name:'Audi Q8',
       fueltype:'petrol',
       bodytype:'Suv',
       owner:'2nd',
       transmission:'Manuel',
       kmsdriven:'10000',
       price:"35,50,000",
       location:'Kolkata'
    },
    {
        id:2,
        image:'/Imgdata/bmw-i8.jpg',
        name:'BMW i8',
        fueltype:'Electric',
        bodytype:'Sports',
        owner:'1st',
        transmission:'Automatic',
        kmsdriven:'1000',
        price:"1,35,50,000",
        location:'Durgapur'
    },
    {
       id:3,
       image:'/Imgdata/ford-ranger.webp',
       name:'Ford Ranger',
       fueltype:'Petrol',
       bodytype:'PickUp',
       owner:'2nd',
       transmission:'Manuel',
       kmsdriven:'12000',
       price:"55,50,000",
       location:'Asansol'
    },
    {
        id:4,
        image:'/Imgdata/honda-city.png',
        name:'Honda City',
        fueltype:'Petrol',
        bodytype:'Seadan',
        owner:'2nd',
        transmission:'Manuel',
        kmsdriven:'20000',
        price:"5,50,000",
        location:'Kolkata'
    },

    {
        id:5,
        image:'/Imgdata/audi-q8.jpg',
        name:'Audi Q8',
        fueltype:'petrol',
        bodytype:'Suv',
        owner:'2nd',
        transmission:'manuel',
        kmsdriven:'10000',
        price:"35,50,000",
        location:'Kolkta'
    },
    {
        id:6,
        image:'/Imgdata/Hundai_elentra.jpeg',
        name:'Hundai Elentra',
        fueltype:'Diesel',
        bodytype:'Seaden',
        owner:'1st',
        transmission:'Automatic',
        kmsdriven:'14000',
        price:"6,60,000",
        location:'Durgapur'
    },
    {
        id:7,
        image:'/Imgdata/hundai-i20.jpg',
        name:'Hundai i20',
        fueltype:'Petrol',
        bodytype:'Hatchback',
        owner:'2nd',
        transmission:'Manuel',
        kmsdriven:'1000',
        price:"8,50,000",
        location:'Dubrajpur'
    },
    {
        id:8,
        image:'/Imgdata/kia-seltos.jpg',
        name:'Kia Seltos',
        fueltype:'Petrol',
        bodytype:'Suv',
        owner:'1st',
        transmission:'Automatic',
        kmsdriven:'10600',
        price:"10,50,000",
        location:'Kolkata'
    },
    {
        id:9,
        image:'/Imgdata/scorpio-n.jpg',
        name:'Scorpio N',
        fueltype:'Petrol',
        bodytype:'Suv',
        owner:'1st',
        transmission:'Manuel',
        kmsdriven:'1000',
        price:"15,50,000",
        location:'Kolkata'
    },
    {
        id:10,
        image:'/Imgdata/Tata-Nano.webp',
        name:'Tata Nano',
        fueltype:'Petrol',
        bodytype:'Hachback',
        owner:'2nd',
        transmission:'Manuel',
        kmsdriven:'100000',
        price:"10,0000",
        location:'Durgapur'
    },
    {
        id:11,
        image:'/Imgdata/Tata-Nexon-EV.jpg',
        name:'Nexon Ev',
        fueltype:'Electric',
        bodytype:'Suv',
        owner:'1st',
        transmission:'Automatic',
        kmsdriven:'10000',
        price:"12,50,000",
        location:'Asansol'
    },
    {
        id:12,
        image:'/Imgdata/Tata-Safari.jpg',
        name:'Tata Safari',
        fueltype:'Petrol',
        bodytype:'Suv',
        owner:'1st',
        transmission:'Automatic',
        kmsdriven:'15000',
        price:"20,50,000",
        location:'Kolkata'
    },  {
      image:'/Imgdata/tatapunch.webp',
      name:'Tata Punch',
      fueltype:'Petrol',
      bodytype:'Suv',
      owner:'1st',
      transmission:'Automatic',
      kmsdriven:'12000',
      price:"6,50,000",
      location:'Kolkata'
    },
    {
        id:14,
        image:'/Imgdata/thar.webp',
        name:'Mahindra Thar',
        fueltype:'Petrol',
        bodytype:'Suv',
        owner:'1st',
        transmission:'Manuel',
        kmsdriven:'100000',
        price:"9,50,000",
        location:'Asansol'
    },
    {
        id:15,
        image:'/Imgdata/toyota_urban_cruiser.jpg',
        name:'Toyata UrbanCrusier',
        fueltype:'Petrol',
        bodytype:'Suv',
        owner:'2nd',
        transmission:'Automatic',
        kmsdriven:'20000',
        price:"12,50,000",
        location:'Kolkata'
    },
    {
        id:16,
        image:'/Imgdata/Volkswagen-virtus.webp',
        name:'Volkswagen Virtus',
        fueltype:'Petrol',
        bodytype:'Seaden',
        owner:'2nd',
        transmission:'Automatic',
        kmsdriven:'10000',
        price:"12,50,000",
        location:'Asansol'
    },
    {
        id:17,
        image:'/Imgdata/volvo-v90.webp',
        name:'Volvo V90',
        fueltype:'Petrol',
        bodytype:'Suv',
        owner:'1st',
        transmission:'Automatic',
        kmsdriven:'20000',
        price:"65,50,000",
        location:'Asansol'
    },
    {
        id:18,
        image:'/Imgdata/XUV300.jpg',
        name:'Mahindra XUV 300',
        fueltype:'Petrol',
        bodytype:'Suv',
        owner:'1st',
        transmission:'Automatic',
        kmsdriven:'14000',
        price:"8,50,000",
        location:'Durgapur'
    }

]
let data = Cardata.filter((D)=>
{
    return ( D.bodytype =='Suv' && D.kmsdriven <='20000')
    
    
})

console.log(data)