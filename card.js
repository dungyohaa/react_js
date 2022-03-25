import  "../styles/card.css";
const Card = ({image, title}) => {
  return (
    <div className="card">
      <img className="image" src={image} alt="title"/>
      <span>{title}</span>
    </div>
  );
};
export default Card;