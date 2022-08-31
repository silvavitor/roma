import './ContractList.css';

import ContractCard from '../ContractCard/ContractCard';

import { IoIosAdd } from 'react-icons/io';

const ContractList = ({ contracts }) => {
  return (
    <div className='contractList'>
      <div className='contractList__add'>
        <div className='contractList__icon'>
          <a href='https://forms.gle/1EtQe1Zs6EU4jE9t5' target='_blank' rel="noreferrer">
            <IoIosAdd />
          </a>
        </div>
      </div>

      {
        contracts.map((contract) => {
          return (
            <ContractCard clientName={contract.name} total={contract.total} startDate={contract.startDate} expirationDate={contract.expirationDate} contractType={contract.type}/>
          )
        })
      }
    </div>
  );
};

export default ContractList;