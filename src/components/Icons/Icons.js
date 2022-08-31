import './Icons.css';

import { BsPersonFill } from 'react-icons/bs';
import { IoNotificationsCircleSharp } from 'react-icons/io5';
import { IoIosHelpCircle } from 'react-icons/io';

const Icons = () => {
  return (
    <div className='icons'>
      <div className='profile__icon'><IoNotificationsCircleSharp /></div>
      <div className='profile__icon'><BsPersonFill /></div>
      <div className='profile__icon'><IoIosHelpCircle /></div>
    </div>
  );
};

export default Icons;