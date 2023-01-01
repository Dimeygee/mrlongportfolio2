import crystpal from "./public/assets/crystpal.png"
import stery from "./public/assets/stery.png"
import groshure from "./public/assets/groshure.png"
import dreams from "./public/assets/dreams.png"
import dreamsmobile from "./public/assets/dreamsmobile.png"
import gmobile from "./public/assets/gmobile.png"
import smobile from "./public/assets/smobile.png"
import cmobile from "./public/assets/cmobile.png"
import gsap from "gsap"





export const tl = gsap.timeline()


export const projects = [
    { 
        id:1,
        title: "ValorExchange Product Overhaul",
        image: "https://res.cloudinary.com/dimejiscloud/image/upload/v1672592572/Rectangle_1_gnuzk8.png",
        content: "Complete redesign of a p2p cryptocurrency exchange platform",
        mobileImg: "https://res.cloudinary.com/dimejiscloud/image/upload/v1672592570/Frame_19852_4_y8guup.png",
        url: "https://www.figma.com/file/2gavLGb1lPAxI9G7nEVwG5/Odebiyi-Ridwan-Figma-Portfolio?node-id=0%3A1" 
    },
    { 
        id:2,
        title: "CoinLynk",
        image: "https://res.cloudinary.com/dimejiscloud/image/upload/v1672592573/Rectangle_1_1_pzp1pg.png",
        content: "A mobile app platform where you can buy, sell cryptocurrencies and NFTs.",
        mobileImg: "https://res.cloudinary.com/dimejiscloud/image/upload/v1672592575/Frame_19852_2_p6s0fy.png",
        url: "https://www.figma.com/file/2gavLGb1lPAxI9G7nEVwG5/Odebiyi-Ridwan-Figma-Portfolio?node-id=1%3A136196" 
    },
    { 
        id:3,
        title: "Point of Sales",
        image: "https://res.cloudinary.com/dimejiscloud/image/upload/v1672592572/Rectangle_1_2_sppdie.png",
        content: "A web app that helps stores manage their stocks, inventories and sales etc.",
        mobileImg: "https://res.cloudinary.com/dimejiscloud/image/upload/v1672593604/Frame_19852_cp7u7w.png",
        url: "https://www.figma.com/file/2gavLGb1lPAxI9G7nEVwG5/Odebiyi-Ridwan-Figma-Portfolio?node-id=1%3A2" 
    },
    { 
        id:4,
        title: "CryptPal",
        image: crystpal,
        content: "A crypto app that lets you tag along with latest market trends, news and prices.",
        mobileImg: cmobile,
        url: "https://www.behance.net/gallery/138452257/CryptPal" 
    },
    { 
        id:5,
        title: "Stery",
        image: stery,
        content: "Stery is an art platform for finding and purchasing original art by artists all over the world.",
        mobileImg: smobile,
        url: "https://www.behance.net/gallery/136063681/Stery" 
    },
    { 
        id:6,
        title: "Groshure",
        image: groshure,
        content:"A state of art landing page for a groshure delivery app",
        mobileImg: gmobile,
        url: "https://www.figma.com/file/2gavLGb1lPAxI9G7nEVwG5/Odebiyi-Ridwan-Figma-Portfolio?node-id=28%3A90235" 
    },
    { 
        id:7,
        title: "Dreams & Degrees",
        image: dreams,
        content: "A digital empowerment initiatives for females",
        mobileImg: dreamsmobile,
        url: "https://www.figma.com/file/2gavLGb1lPAxI9G7nEVwG5/Odebiyi-Ridwan-Figma-Portfolio?node-id=29%3A100933" 
    },
]