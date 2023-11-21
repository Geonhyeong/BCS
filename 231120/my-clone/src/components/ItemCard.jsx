const ItemCard = ({ image }) => {
  return (
    <li className="w-[51px] h-8 rounded relative flex justify-center items-center">
      <img
        className="absolute left-0 top-0 z-0 w-full h-full"
        src="https://cdn.dak.gg/er/images/item/ico-itemgradebg-04.svg"
      />
      <img className="absolute z-10 max-h-[75%] max-w-[75%]" src={image} />
    </li>
  );
};

export default ItemCard;
