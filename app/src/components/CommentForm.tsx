import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { CommentDTO } from "../types/comment.type";
import { create } from "../services/comment.services";

const CommentForm = () => {
  const [credentials, setCredentials] = useState<CommentDTO>({
    pseudo: "",
    content: "",
  });

  const heandleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await create(credentials);
      console.log("Success to create comment", response);
    } catch (error) {
      console.log("Error to create comment", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Votre pseudo"
        name="pseudo"
        onChange={heandleChange}
      />
      <Input
        type="text"
        placeholder="Votre commetaire"
        name="content"
        onChange={heandleChange}
      />
      <Button type="submit" text="Envoyer" />
    </form>
  );
};

export default CommentForm;
