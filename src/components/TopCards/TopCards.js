import './TopCards.css';

import ActiveContractsCard from './ActiveContractsCard/ActiveContractsCard';
import ExpiringContractsCard from './ExpiringContractsCard/ExpiringContractsCard';
import IncomingsCard from './IncomingsCard/IncomingsCard';

const TopCards = ({ activeContracts, expiringContracts, incomings }) => {
  return (
    <div className='topCards'>
      <ActiveContractsCard content={activeContracts} />
      <ExpiringContractsCard content={expiringContracts}/>
      <IncomingsCard content={incomings}/>
    </div>
  );
};

export default TopCards;