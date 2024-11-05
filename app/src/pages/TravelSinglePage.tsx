import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TravelType } from "../types/travel.type";
import { findOneById, remove } from "../services/travel.service";

const TravelSinglePage = () => {
  const { id } = useParams();
  const [travel, setTravel] = useState<TravelType>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) fetchTravel();
  }, []);

  const fetchTravel = async () => {
    try {
      const travel = await findOneById(id as string);
      setTravel(travel);
    } catch (error) {
      console.log("Error to fetch travels", error);
    }
  };

  const handleDelete = async () => {
    if (!id) return;

    try {
      await remove(id);
      navigate("/");
    } catch (error) {
      console.log("Success to delete", error);
    }
  };

  return (
    <div>
      <img src={travel?.image} alt="" />
      <h1>{travel?.title}</h1>

      <button
        onClick={handleDelete}
        className="bg-red-400 text-white text-xl px-4 py-2 hover:bg-red-500 transition-all"
      >
        Delete
      </button>
    </div>
  );
};

export default TravelSinglePage;
