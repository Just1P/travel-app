import { CommentType } from "../types/comment.type";

type CommentShowItemProps = {
  comment: CommentType;
};

const CommentShowItem = ({ comment }: CommentShowItemProps) => {
  return (
    <div className="p-4 shadow-sm rounded-md">
      <span className="font-bold">{comment.pseudo} : </span>
      <span className="text-zinc-400">{comment.content}</span>
    </div>
  );
};

export default CommentShowItem;
