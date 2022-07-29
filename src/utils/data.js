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
