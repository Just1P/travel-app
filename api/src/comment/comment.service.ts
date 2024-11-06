import { Request, Response } from "express";
import connection from "../config/database.config";

const getAll = async (req: Request, res: Response) => {
  res.send("Get all comments");
};

const getOne = async (req: Request, res: Response) => {
  res.send("Get one comment");
};

const create = async (req: Request, res: Response) => {
  res.send("Create comment");
};

const update = async (req: Request, res: Response) => {
  res.send("Update comments");
};
const remove = async (req: Request, res: Response) => {
  res.send("Get all comments");
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
