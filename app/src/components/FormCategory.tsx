import { useEffect, useState } from "react";
import { CategoryDTO } from "../types/category.type";
import { create, findOneById, update } from "../services/category.service";
import { useParams } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

type FormCategoryProps = {
  fetchCategories?: () => void;
};

const FormCategory = ({ fetchCategories }: FormCategoryProps) => {
  const [credentials, setCredentials] = useState<CategoryDTO>({
    name: "",
    description: "",
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const category = await findOneById(id as string);
      setCredentials(category);
    } catch (error) {
      console.log("Error to fetch categories", error);
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
    e.preventDefault();
    console.log("Submit form", credentials);

    try {
      if (id) {
        await update(credentials, id);
      } else {
        await create(credentials);
        fetchCategories();
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="flex flex-col gap-2 mb-5">
          <Input
            type="text"
            name="name"
            placeholder="Entrez un nom"
            onChange={heandleChange}
            value={credentials.name}
            required={true}
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

export default FormCategory;
