import img1 from './images/tour-1.jpeg';
import img2 from './images/tour-2.jpeg';
import img3 from './images/tour-3.jpeg';
import img4 from './images/tour-4.jpeg';

export const pageLinks = [
    { id:1, href:'#home', text:'home'},
    { id:2, href:'#about', text:'about'},
    { id:3, href:'#services', text:'services'},
    { id:4, href:'#tours', text:'tours'}
]

export const socialLinks = [
    {id:1, href:'https://www.twitter.com', icons:'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', icons:'fab fa-twitter'},
    {id:3, href:'https://www.twitter.com', icons:'fab fa-squarespace'}
]

export const services = [
    {
        id:1,
        icon:'fas fa-wallet fa-fw',
        name:'saving money',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
    {
        id:2,
        icon:'fas fa-tree fa-fw',
        name:'endless hiking',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    },
    {
        id:3,
        icon:'fas fa-socks fa-fw',
        name:'amazing comfort',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'
    }
]

export const tours = [
    {
        id:1,
        img:img1,
        date:'august 26th, 2020',
        title:'Tibet Adventure',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location:'china',
        duration:'6 days',
        cost:'$2100'
    },
    {
        id:2,
        img:img2,
        date:'august 26th, 2020',
        title:'Tibet Adventure',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location:'china',
        duration:'6 days',
        cost:'$2100'
    },
    {
        id:3,
        img:img3,
        date:'august 26th, 2020',
        title:'Tibet Adventure',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location:'china',
        duration:'6 days',
        cost:'$2100'
    },
    {
        id:4,
        img:img4,
        date:'august 26th, 2020',
        title:'Tibet Adventure',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
        location:'china',
        duration:'6 days',
        cost:'$2100'
    }
];