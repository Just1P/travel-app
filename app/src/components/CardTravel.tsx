import { Link } from "react-router-dom";
import { TravelType } from "../types/travel.type";

type CardTravelProps = {
  travel: TravelType;
};

const CardTravel = ({ travel }: CardTravelProps) => {
  return (
    <div className="shadow-md">
      <div className="h-[200px] overflow-hidden">
        <Link to={`/${travel.id}`}>
          <img src={travel.image} alt="" />
        </Link>
      </div>
      <div className="p-6">
        <Link to={`/${travel.id}`}>
          <h2 className="text-xl text-zinc-500 font-bold mt-2">
            {travel.title}
          </h2>
        </Link>

        <p>
          {travel?.description?.substring(0, 50)}
          {travel?.description?.length > 50 && "..."}
        </p>
      </div>
    </div>
  );
};

export default CardTravel;
