import { useEffect } from "react";
import CardCategory from "./CardCategory";
import { CategoryType } from "../types/category.type";

type CategoryListProps = {
  categoryList: CategoryType[];
  fetchCategories: () => void;
};

const CategoryList = ({ categoryList, fetchCategories }: CategoryListProps) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {categoryList.map((category) => (
        <CardCategory category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryList;
