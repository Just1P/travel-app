import { Router } from "express";
import TravelService from "./travel.service";

const TravelController = Router();

TravelController.get("/", TravelService.getAll);

TravelController.get("/:id", TravelService.getOne);

TravelController.post("/", TravelService.create);

TravelController.put("/:id", TravelService.update);

TravelController.delete("/", TravelService.remove);

export default TravelController;
