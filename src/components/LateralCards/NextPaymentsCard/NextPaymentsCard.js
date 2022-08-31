import LateralCard from '../LateralCard/LateralCard';
import './NextPaymentsCard.css';

const NextPaymentsCard = ({ content }) => {
  return (
    <LateralCard className='NextPaymentsCard'>
        <p>Próximo pagamento</p>
        {content}
    </LateralCard>
  );
};

export default NextPaymentsCard;