import { useEffect } from "react";
import { TravelType } from "../types/travel.type";
import CardTravel from "./CardTravel";

type TravelListProps = {
  travelList: TravelType[];
  fetchTravels: () => void;
};

const TravelList = ({ travelList, fetchTravels }: TravelListProps) => {
  useEffect(() => {
    fetchTravels();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {travelList.map((travel) => (
        <CardTravel travel={travel} key={travel.id} />
      ))}
    </div>
  );
};

export default TravelList;
