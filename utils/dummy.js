import {FiChevronDown} from 'react-icons/fi'
import {TiTick} from 'react-icons/ti'

export const navItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Product',
    link: '/products',
    Icon: FiChevronDown,
    subMenu: [
      {
        title: ' Payments',
        subLinks: [
          {
            title: 'Payment Gateway',
            link: '/paymentGateway',
          },
          {
            title: 'Invoice',
            link: '/invoice',
          },
          {
            title: 'Wallet',
            link: '/wallet',
          },
          {
            title: 'Instant Settlements',
            link: '/settlement',
          },
        ],
      },
      {
        title: 'Disbursals',
        subLinks: [
          {
            title: 'Split Payments',
            link: '/splitPayments',
          },
          {
            title: 'Vendor Payment System',
            link: '/vendor',
          },
        ],
      },
      {
        title: 'More',
        subLinks: [
          {
            title: 'UPI',
            link: '/upi',
          },
          {
            title: 'Bharat QR',
            link: '/bharatQR',
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    link: '/company',
  },
]


export const payTakenBy=[
    {
        title:'GPay',
        Icon:'/img/gpay.jpg'
    },
    {
        title:'Paytm',
        Icon:'/img/paytm.jpg'
    },
    // {
    //     title:'Phonpe',
    //     Icon:'/img/phonpe.webp'
    // },
    {
        title:'Amazon Pay',
        Icon:'/img/amazonpay.jpg'
    },

]


export const pricings =[
    {
        title:'startup',
        plan:'$99/month',
        subPoints:[
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
        ]
    },
    {
        title:'startup',
        plan:'$99/month',
        subPoints:[
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
        ]
    },
    {
        title:'startup',
        plan:'$99/month',
        subPoints:[
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
            {
                title:'lorem porem',
                Icon:TiTick
            },
        ]
    },
]


export const services=[
  {
    title:'Payment Gateway',
    img:'https://www.fintola.com/images/others/payment-getway.svg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis facere sequi dolorum .'
  },
  {
    title:'Invoice Challan',
    img:'https://www.fintola.com/images/others/invoice.svg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis facere sequi dolorum .'
  },
  
  {
    title:'Prepaid Cards',
    img:'https://www.fintola.com/images/others/cards.svg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis facere sequi dolorum .'
  },
  {
    title:'Payment Gateway',
    img:'https://www.fintola.com/images/others/payment-getway.svg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis facere sequi dolorum .'
  },
  {
    title:'Invoice Challan',
    img:'https://www.fintola.com/images/others/invoice.svg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis facere sequi dolorum .'
  },
  
  {
    title:'Prepaid Cards',
    img:'https://www.fintola.com/images/others/cards.svg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis facere sequi dolorum .'
  },
  {
    title:'Payment Gateway',
    img:'https://www.fintola.com/images/others/payment-getway.svg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis facere sequi dolorum .'
  },
  {
    title:'Invoice Challan',
    img:'https://www.fintola.com/images/others/invoice.svg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis facere sequi dolorum .'
  },
  
  {
    title:'Prepaid Cards',
    img:'https://www.fintola.com/images/others/cards.svg',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis facere sequi dolorum .'
  },
  
]