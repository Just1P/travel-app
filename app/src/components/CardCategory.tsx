import { Link } from "react-router-dom";
import { CategoryType } from "../types/category.type";

type CardCategoryProps = {
  category: CategoryType;
};

const CardCategory = ({ category }: CardCategoryProps) => {
  return (
    <div className="shadow-md">
      <div className="p-6">
        <Link to={`/categories/${category.id}`}>
          <h2 className="text-xl text-zinc-500 font-bold mt-2">
            {category.name}
          </h2>
        </Link>

        <p>
          {category?.description?.substring(0, 50)}
          {category?.description?.length > 50 && "..."}
        </p>
      </div>
    </div>
  );
};

export default CardCategory;
