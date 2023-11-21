import ItemCard from "./ItemCard";

const RouteCard = ({ name, heroImg, weaponImg, items }) => {
  return (
    <li className="bg-white w-[536px] h-[70px] border border-[#e6e6e6] hover:bg-[#f0f0f0]">
      <button
        className="w-full h-full p-4 flex justify-between items-center xl:pr-6"
        onClick={(e) => e.preventDefault()}
      >
        <div className="flex items-center">
          <div className="relative mr-4">
            <img
              className="w-9 h-9 object-cover rounded-full bg-gray-200"
              src={heroImg}
            />
            <img
              className="absolute bottom-0 -right-2 w-4 h-4 bg-[#323232] p-[2px] rounded-full"
              src={weaponImg}
            />
          </div>
          <div className="text-xs font-medium">{name}</div>
        </div>
        <ul className="bg-yellow-100 flex gap-2">
          {items.map((v, i) => (
            <ItemCard key={i} image={v} />
          ))}
        </ul>
      </button>
    </li>
  );
};

export default RouteCard;
