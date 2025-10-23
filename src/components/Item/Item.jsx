import "./Item.css";

export const Item = ({ name, price, imageUrl }) => {
  return (
    <div className="item-card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
};
