import {RiDashboardFill} from 'react-icons/ri';
import {AiFillQuestionCircle} from 'react-icons/ai';
import {MdOutlineSwapHoriz, MdFilterList, MdAccountBalanceWallet} from 'react-icons/md';
import {CiCalculator1} from 'react-icons/ci';
import {ImEarth} from 'react-icons/im';
import {CgHashtag} from 'react-icons/cg';


export const sidebarData=[
    {
        name:"Dashboard",
        icon: <RiDashboardFill size={"1.3rem"}/>,
        path: '/',
    },
    {
        name:"Calculator",
        icon: <CiCalculator1 size={"1.3rem"}/>,
        path: '/calculator',
    },
    {
        name:"Swap",
        icon: <MdOutlineSwapHoriz size={"1.6rem"}/>,
        path: 'swap',
    },
    {
        name:"To Do List",
        icon: <MdFilterList size={"1.5rem"}/>,
        path: '/todo',
    },
    {
        name:"FAQ",
        icon: <AiFillQuestionCircle size={"1.3rem"}/>,
        path: '/faq',
    },
]


export const links=[
    {
        name:"Socials",
        icon: <CgHashtag size={"1.3rem"}/>,
        path: '',
    },
    {
        name:"Website",
        icon: <ImEarth size={"1.3rem"}/>,
        path: '/todo',
    },
    {
        name:"Buy Now",
        icon: <MdAccountBalanceWallet size={"1.3rem"}/>,
        path: '/faq',
    },
]