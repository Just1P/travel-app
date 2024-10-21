import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TravelType } from "../types/travel.type";

const TravelSinglePage = () => {
  const { id } = useParams();
  const [travel, setTravel] = useState<TravelType>({});

  useEffect(() => {
    fetchTravels();
  }, []);

  const fetchTravels = async () => {
    const response = await fetch("http://localhost:5173/travels.json");
    const data = await response.json();
    const travelFilter = data.filter((t: TravelType) => t.id === Number(id));
    setTravel(travelFilter[0]);
  };

  return (
    <div>
      <img src={travel?.image} alt="" />
      <h1>{travel?.name}</h1>
    </div>
  );
};

export default TravelSinglePage;
