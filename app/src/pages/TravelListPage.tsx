import { useState } from "react";
import FormAddTravel from "../components/FormAddTravel";
import TravelList from "../components/TravelList";
import { TravelType } from "../types/travel.type";

const TravelListPage = () => {
  const [travelList, setTravelList] = useState<TravelType[]>([]);

  const fetchTravels = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/travels`);
    const data = await response.json();
    setTravelList(data);
  };

  return (
    <div className="">
      <h1 className="text-4xl text-red-400 mb-10">Share your travel</h1>

      <FormAddTravel fetchTravels={fetchTravels} />

      <TravelList travelList={travelList} fetchTravels={fetchTravels} />
    </div>
  );
};

export default TravelListPage;
