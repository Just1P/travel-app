import { useEffect, useState } from "react";
import { TravelDTO } from "../types/travel.type";
import { findOneById, update } from "../services/travel.service";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

type FormTravelProps = {
  fetchTravels?: () => void;
};

const FormTravel = ({ fetchTravels }: FormTravelProps) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<TravelDTO>({
    title: "",
    city: "",
    country: "",
    image: "",
    description: "",
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchTravel();
  }, []);

  const fetchTravel = async () => {
    try {
      const travel = await findOneById(id as string);
      setCredentials(travel);
    } catch (error) {
      console.log("Error to fetch travels", error);
    }
  };

  const heandleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut

    try {
      if (id) {
        // Assurez-vous que l'ID est correct
        console.log("Updating travel with ID:", id);

        await update(credentials, id); // Appel à la fonction update
        console.log("Travel updated successfully");

        if (fetchTravels) fetchTravels();
        navigate("/"); // Actualise la liste des voyages si nécessaire
      } else {
        console.error("ID is missing. Cannot update travel.");
      }
    } catch (error) {
      console.error("Failed to update travel:", error);
      alert("An error occurred while updating the travel. Please try again."); // Affiche une alerte pour l'utilisateur
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="flex flex-col gap-2 mb-5">
          <Input
            type="text"
            name="title"
            placeholder="Entrez un titre"
            onChange={heandleChange}
            value={credentials.title}
            required={true}
          />
          <Input
            type="text"
            name="city"
            placeholder="Entrez une ville"
            value={credentials.city}
            onChange={heandleChange}
          />
          <Input
            type="text"
            name="country"
            placeholder="Entrez un pays"
            value={credentials.country}
            onChange={heandleChange}
          />
          <Input
            type="text"
            name="image"
            placeholder="Entrez une image"
            value={credentials.image}
            onChange={heandleChange}
          />
          <Input
            type="text"
            name="description"
            placeholder="Entrez une description"
            value={credentials.description}
            onChange={heandleChange}
          />
        </div>

        <div>
          <Button type="submit" text={`${id ? "Editer" : "Ajouter"}`}>
            {" "}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormTravel;
