import { useState } from "react";
import { TravelDTO } from "../types/travel.type";
import { create } from "../services/travel.service";

type FormAddTravelProps = {
  fetchTravels: () => void;
};

const FormAddTravel = ({ fetchTravels }: FormAddTravelProps) => {
  const [credentials, setCredentials] = useState<TravelDTO>({});

  const heandleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit form", credentials);

    try {
      await create(credentials);
      fetchTravels();
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Entrez un titre"
          onChange={heandleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Entrez une ville"
          onChange={heandleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Entrez un pay"
          onChange={heandleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Entrez une image"
          onChange={heandleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Entrez une description"
          onChange={heandleChange}
        />
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default FormAddTravel;
