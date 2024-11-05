import { TravelDTO } from "../types/travel.type";

const API_URL = import.meta.env.VITE_API_URL;

export const findAll = async () => {
  const response = await fetch(`${API_URL}/travels`);
  const data = await response.json();
  return data;
};

export const findOneById = async (id: string) => {
  const response = await fetch(`${API_URL}/travels/${id}`);
  const data = await response.json();
  return data;
};

export const create = async (travel: TravelDTO) => {
  const response = await fetch(`${API_URL}/travels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(travel),
  });
  const data = await response.json();
  return data;
};

export const remove = async (id: string) => {
  return await fetch(`${API_URL}/travels/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
