import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import { FaUserTie, FaUserFriends, FaPhoneAlt } from 'react-icons/fa'
import { IoMdCart } from 'react-icons/io'

// FaPowerOff

export const navbarData = [
  { id: 1, path: '/', title: 'Home', icon: <AiOutlineHome /> },
  { id: 2, path: '/about', title: 'About', icon: <FaUserFriends /> },
  { id: 3, path: '/contact', title: 'Contact', icon: <FaPhoneAlt /> },
  {
    id: 4,
    path: '/products',
    title: 'Collection',
    icon: <AiOutlineSearch />,
  },
  { id: 5, path: '/user', title: 'Member', icon: <FaUserTie /> },

  { id: 6, path: '/cart', title: 'Cart', icon: <IoMdCart /> },
]

// category for gender
export const gender = [
  {
    id: 1,
    title: 'Women’s Glasses',
    link: 'https://res.cloudinary.com/inam6530/image/upload/v1659543265/photo-1658437902644-e5414badf0f2_xasajc.jpg',
  },
  {
    id: 2,
    title: 'Kids’ Glasses',
    link: 'https://res.cloudinary.com/inam6530/image/upload/v1659543359/photo-1658752648780-bab3cea5766f_mkcgsp.jpg',
  },
  {
    id: 1,
    title: 'men’s Glasses',
    link: 'https://res.cloudinary.com/inam6530/image/upload/v1659543186/photo-1651218859577-97abc369d12f_cyltc4.jpg',
  },
]
