import './Dashboard.css';

import ContractList from '../ContractList/ContractList';
import LateralCards from '../LateralCards/LateralCards';
import TopCards from '../TopCards/TopCards';

const contracts = [
  {name: 'Rodrigo Rodrigues Gomes', total:'1000,00', type:'Pacote', startDate:'24/07/2022', expirationDate:'24/08/2022'},
  {name: 'Manuela Barros Lima', total:'1000,00', type:'Mensal', startDate:'25/07/2022', expirationDate:'25/08/2022'},
  {name: 'Vinícius Cardoso Melo', total:'500,00', type:'Bimestral', startDate:'26/07/2022', expirationDate:'26/08/2022'},
  {name: 'João Rodrigues Silva', total:'700,00', type:'Trimestral', startDate:'04/05/2022', expirationDate:'09/09/2022'},
  {name: 'Clara Barros Alves', total:'300,00', type:'Semestral', startDate:'15/03/2022', expirationDate:'01/09/2022'},
  {name: 'Amanda Fernandes Melo', total:'5500,00', type:'Mensal', startDate:'20/06/2022', expirationDate:'07/10/2022'},
  {name: 'Gabriela Fernandes Rodrigues', total:'900,00', type:'Mensal', startDate:'10/08/2022', expirationDate:'14/11/2022'},
  {name: 'Murilo Lima Ferreira', total:'1120,00', type:'Pacote', startDate:'28/08/2022', expirationDate:'25/12/2022'},
];

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <TopCards activeContracts={8} expiringContracts={3} incomings={'2500,00'} />
      <div className='dashboard__main'>
        <ContractList className='dashboard__main__list' contracts={contracts}/>
        <LateralCards className='dashboard__main__lateral' delayedContract='0' nextPayment='24/08/2022'/>
      </div>
    </div>
  );
};

export default Dashboard;