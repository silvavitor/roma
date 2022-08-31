import './Card.css';

const Card = ({ children, bgColor, textColor, classNameParent }) => {
  return (
    <div className={'card ' + classNameParent} 
      style={
        { 
          backgroundColor: bgColor, 
          color: textColor
        }
      }
    >
      {children}
    </div>
  );
};

export default Card;