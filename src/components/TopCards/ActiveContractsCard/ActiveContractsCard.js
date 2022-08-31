import './ActiveContractsCard.css';

import TopCard from "../TopCard/TopCard";

const ActiveContractsCard = ( { content } ) => {
  return (
    <TopCard>
      <h1>{content}</h1> 
      <span>Contratos ativos</span>
    </TopCard>
  );
};

export default ActiveContractsCard;