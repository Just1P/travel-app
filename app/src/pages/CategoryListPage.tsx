import { useState } from "react";
import FormCategory from "../components/FormCategory";
import CategoryList from "../components/CategoryList";
import { CategoryType } from "../types/category.type";
import { findAll } from "../services/category.service";

const CategoryListPage = () => {
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);

  const fetchCategories = async () => {
    try {
      const categories = await findAll();
      setCategoryList(categories);
    } catch (error) {
      console.log("Error to fetch categories", error);
    }
  };

  return (
    <div className="">
      <h1 className="text-4xl text-red-400 mb-10">Share your category</h1>

      <FormCategory fetchCategories={fetchCategories} />

      <CategoryList
        categoryList={categoryList}
        fetchCategories={fetchCategories}
      />
    </div>
  );
};

export default CategoryListPage;
