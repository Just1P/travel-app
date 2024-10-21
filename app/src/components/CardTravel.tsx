import { Link } from "react-router-dom";
import { TravelType } from "../types/travel.type";

type CardTravelProps = {
  travel: TravelType;
};

const CardTravel = ({ travel }: CardTravelProps) => {
  return (
    <div className="shadow-md">
      <div className="h-[200px] overflow-hidden">
        <img src={travel.image} alt="" />
      </div>
      <div className="p-6">
        <Link to={`/$travel.id}`}>
          <h2 className="text-xl text-zinc-500 mt-2">{travel.name}</h2>
        </Link>

        <p>
          {travel.description.substring(0, 49)}
          {travel.description.length > 49 && "..."}
        </p>
      </div>
    </div>
  );
};

export default CardTravel;
