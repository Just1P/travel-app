import { Router } from "express";
import CategoryService from "./category.service";

const CategoryController = Router();

CategoryController.get("/", CategoryService.getAll);

CategoryController.get("/:id", CategoryService.getOne);

CategoryController.post("/", CategoryService.create);

CategoryController.put("/:id", CategoryService.update);

CategoryController.delete("/", CategoryService.remove);

export default CategoryController;
