import './ExpiringContractsCard.css';

import TopCard from "../TopCard/TopCard";

const ExpiringContractsCard = ({ content }) => {
  return (
    <TopCard>
      <h1>{content}</h1> 
      <span>Contratos vencendo este mês</span>
    </TopCard>
  );
};

export default ExpiringContractsCard;