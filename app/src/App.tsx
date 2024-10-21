import { useEffect, useState } from "react";
import { TravelType } from "./types/travel.type";
import CardTravel from "./components/CardTravel";

function App() {
  const [travelList, setTravelList] = useState<TravelType[]>([]);

  useEffect(() => {
    fetchTravels();
  }, []);

  const fetchTravels = async () => {
    const response = await fetch("http://localhost:5173/travels.json");
    const data = await response.json();
    setTravelList(data);
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-red-400 text-4xl mb-10">Share your travel</h1>

        <div className="grid grid-cols-3 gap-4">
          {travelList.map((travel) => (
            <CardTravel travel={travel} key={travel.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
