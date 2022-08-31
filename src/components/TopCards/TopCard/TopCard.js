import './TopCard.css';

import Card from "../../Card/Card";

const TopCard = ({ children }) => {
  return (
    <Card classNameParent='topCard' textColor={'#fffdf5'} bgColor={'#a23334'}>
      {children}
    </Card>
  );
};

export default TopCard;