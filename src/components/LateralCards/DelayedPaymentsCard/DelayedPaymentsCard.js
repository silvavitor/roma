import './DelayedPaymentsCard.css';

import LateralCard from "../LateralCard/LateralCard";

const DelayedPaymentsCard = ({ content }) => {
  return (
    <LateralCard className='delayedPaymentsCard'>
      <h3>{content} </h3>
      <span>Pagamentos atrasados</span>
    </LateralCard>
  );
};

export default DelayedPaymentsCard;