const Item = ({ name, quantity, category, onSelect }) => {
    return (
      <li
        onClick={() => onSelect(name)}
        className="bg-gray-700 p-3 mb-2 rounded-lg cursor-pointer"
      >
        <div>
          <span className="font-bold">{name}</span>
        </div>
        <div>
          <span className="font-light">Need {quantity}</span>
          <span className="font-light"> From {category}</span>
        </div>
      </li>
    );
  };
  
  export default Item;
  