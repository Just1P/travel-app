import { useEffect, useState } from "react";
import { CommentType } from "../types/comment.type";
import { findAll } from "../services/comment.services";
import CommentShowItem from "./CommentShowItem";

const CommentList = () => {
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    fetAllComments();
  }, []);

  const fetAllComments = async () => {
    try {
      const data = await findAll();
      setComments(data);
    } catch (error) {
      console.log("Error to fetch comments", error);
    }
  };

  return comments.map((comment) => (
    <CommentShowItem comment={comment} key={comment.id} />
  ));
};

export default CommentList;
