import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CategoryType } from "../types/category.type";
import { findOneById, remove } from "../services/category.service";
import Button from "../components/Button";

const CategorySinglePage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState<CategoryType>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) fetchCategory();
  }, [id]);

  const fetchCategory = async () => {
    try {
      const category = await findOneById(id as string);
      setCategory(category);
    } catch (error) {
      console.log("Error to fetch categories", error);
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
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <Link to={`/edit/${id}`}>Editer</Link>

      <Button text="Delete" variant="danger" onClick={handleDelete} />
    </div>
  );
};
export default CategorySinglePage;
