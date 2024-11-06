import { Router } from "express";
import CommentService from "./comment.service";

const CommentController = Router();

CommentController.get("/", CommentService.getAll);

CommentController.get("/:id", CommentService.getOne);

CommentController.post("/", CommentService.create);

CommentController.put("/:id", CommentService.update);

CommentController.delete("/", CommentService.remove);

export default CommentController;
