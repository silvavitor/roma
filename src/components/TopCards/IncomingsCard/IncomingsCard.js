import './IncomingsCard.css';

import TopCard from "../TopCard/TopCard";

const IncomingsCard = ({ content }) => {
  return (
    <TopCard>
      <h1>R$ {content}</h1> 
      <span>Total a receber este mês</span>
    </TopCard>
  );
};

export default IncomingsCard;