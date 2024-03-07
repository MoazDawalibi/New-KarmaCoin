import { CarFilled, MoneyCollectOutlined, PayCircleFilled } from "@ant-design/icons"
import { TBigAdsData, TCardProduct, THeroAd, TMovesAdsData, TProduct, TSpecialProperty, TbannerData } from "../../Layout/app/Types"
import { BsCalendarDay } from "react-icons/bs"
import { IoIosFlash } from "react-icons/io"
import { FaMoneyBill, FaProductHunt } from "react-icons/fa"

 export const Product =   {
    id : 1,
    name:"Classic Coin ",
    img : "../Product/Product.jpg",
    price:200,
    brand : "karim",
    description:"Wireless Bluetooth HeadsetFM Frequency Response: 87.5 108 MHz Feature: FM Radio, Card Supported (Micro SD / TF)Made in China",
    count:1,
  }
   
  export const Product2 =   {
    id : 2,
    name:"Classic Coin ",
    img : "../Product/Product.jpg",
    price:200,
    brand : "karim",
    description:"Wireless Bluetooth HeadsetFM Frequency Response: 87.5 108 MHz Feature: FM Radio, Card Supported (Micro SD / TF)Made in China",
    count:1,
  }
  export const AllProductdata :TProduct[] = [  Product,Product,Product,Product,Product,Product,Product,Product,Product,Product ,Product,Product,Product,Product,Product  ] 
 export const data :TProduct[] = [  Product,Product,Product,Product,Product ]
 export const data2 :TProduct[] = [  Product2,Product2,Product2,Product2,Product2 ]

  export const Cartdata :TProduct[] = [  Product,Product,Product ] 

    export  const ProductSectionData: TCardProduct ={
        data :data,
        title:"Highlight" ,
        href:"/products" ,
       count:10,
       icon:<IoIosFlash />
      }
      export  const ProductSectionData2: TCardProduct ={
        data :data2,
        title:"Most Purchased" ,
        href:"/products" ,
       count:10,
       icon:<IoIosFlash />
      }
   export  const CategoriesData : string[] = ["Name","Name","Name","Name","Name","Name"]
  export const BigAdsData:TBigAdsData[]= [
    {
            header : 'Final Reduction',
            img : "../BigAds/Ads1.jpg" ,
            mainText:"Sale up to 20% Off",
            textPrice:"Only From ",
            Price:"270",
            color:"lightMood"
        },
           {
            header : 'Weekend Sale',
            img : "../BigAds/Ads2.jpg" ,
            mainText:"Fine Smart Speaker",
            textPrice:"Starting at ",
            Price:"185",
            color:"darkMood"
        }
    ]
    



const adData: THeroAd[] = [
  {
    imageUrl: '../HeroSection/ad1.jpg',
    title: 'NEW ARRIVALS',
    subtitle: 'SUMMER SALE',
    discount: '30% OFF',
    link: '/',
        btn:"shop now"

  },
  {
    imageUrl: '../HeroSection/ad2.jpg',
    title: 'NEW ARRIVALS',
    subtitle: 'SUMMER SALE',
    discount: '40% OFF',
    link: '/',
        btn:"shop now"

  },
];


const bannerData : TbannerData[] = [
  {
    imageUrl: '../Coins/coins_home_image.jpg',
    title: 'NEW ARRIVALS',
    subtitle: 'SUMMER SALE',
    discount: '20% OFF',
    link: '/',
    btn:"Shop Now"
  },
   {
    imageUrl: '../Coins/coins_home_image.jpg',
    title: 'NEW ARRIVALS',
    subtitle: 'SUMMER SALE',
    discount: '20% OFF',
    link: '/',
    btn:"Shop Now"
  },
   {
    imageUrl: '../Coins/coins_home_image.jpg',
    title: 'NEW ARRIVALS',
    subtitle: 'SUMMER SALE',
    discount: '20% OFF',
    link: '/',
    btn:"Shop Now"
  },
];
export const HeroSectionData = {  bannerData,adData};


export const specialPropertiesData: TSpecialProperty[] = [
  {
    icon: <FaMoneyBill />,
    title: 'Price',
    description: 'Lowest Price',
  },
  {
    icon: <FaProductHunt />,
    title: 'products',
    description: 'high quality products',
  },
  {
    icon: <BsCalendarDay />,
    title: 'Work Time',
    description: 'Online 24 hour',
  },
  {
    icon: <PayCircleFilled />,
    title: 'Payment',
    description: 'Secure system',
  },
];

 export const MovesAdsData :TMovesAdsData={LeftText:'Auction Incomming ...', RightText:'Register Now For Auction To Get Notification', Link:'/products'}

