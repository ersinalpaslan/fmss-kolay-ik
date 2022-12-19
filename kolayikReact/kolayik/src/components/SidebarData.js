import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { MdCalendarToday } from "react-icons/md";
export const SidebarData = [
//   {
//     title: 'Home',
//     path: '/',
//     icon: <AiIcons.AiFillHome />,
//     cName: 'nav-text'
//   },
  {
    title: 'Users',
    path: '/users',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Leaves',
    path: '/leaves',
    icon: <MdCalendarToday />,
    cName: 'nav-text'
  },
  {
    title: 'Expenses',
    path: '/expenses',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  }
];