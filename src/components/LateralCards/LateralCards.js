import './LateralCards.css';

import DelayedPaymentsCard from './DelayedPaymentsCard/DelayedPaymentsCard';
import NextPaymentsCard from './NextPaymentsCard/NextPaymentsCard';

const LateralCards = ({ delayedContract, nextPayment }) => {
  return (
    <div className='lateralCards'>
      <DelayedPaymentsCard content={delayedContract}/>
      <NextPaymentsCard content={nextPayment}/>
    </div>
  );
};

export default LateralCards;