import { useState } from "react";
import { TravelDTO } from "../types/travel.type";

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
      const response = await fetch("http://localhost:8000/travels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      console.log("response data : ", data);
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
          name="name"
          placeholder="Entrez un nom"
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
