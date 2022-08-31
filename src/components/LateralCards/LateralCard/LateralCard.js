import './LateralCard.css';

import Card from "../../Card/Card";

const LateralCard = ({ children }) => {
  return (
    <Card classNameParent='lateralCard' textColor={'#3b3a3a'} bgColor={'#ffc736'}>
      {children}
    </Card>
  );
};

export default LateralCard;