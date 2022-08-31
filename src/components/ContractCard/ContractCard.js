import './ContractCard.css';
import { BsPersonFill } from 'react-icons/bs';

import Card from '../Card/Card';

const ContractCard = ({ clientName, contractType, total, startDate, expirationDate}) => {
  return (
    <Card  bgColor='#a23334' textColor='#fffdf5' classNameParent='contractCard'>
      <div className='contractCard'>
        <div className='contractCard__client'>
          <div className='contractCard__client__item'><h3>{clientName}</h3></div>
          <div className='contractCard__client__item'><BsPersonFill /></div>
        </div>
        <div className='contractCard__info'>
          <div className='contractCard__info__item'>{contractType}</div>
          <div className='contractCard__info__item'>Prazo: {startDate} até {expirationDate}</div>
          <div className='contractCard__info__item'>R$ {total}</div>
        </div>
      </div>
    </Card>
  );
};

export default ContractCard;