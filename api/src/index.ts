import express, { Request, Response } from "express";
const app = express();
const port = 8000;

const travels = [
  {
    id: 1,
    name: "Paris",
    city: "Paris",
    country: "France",
    image:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    description:
      "Paris is known for its iconic landmarks like the Eiffel Tower, art museums like the Louvre, and its romantic atmosphere.",
  },
  {
    id: 2,
    name: "New York City",
    city: "New York",
    country: "USA",
    image:
      "https://www.planetware.com/photos-large/USNY/new-york-city-empire-state-building.jpg",
    description:
      "New York City is famous for its skyline, Central Park, Times Square, and vibrant cultural life.",
  },
];

// Get all travels
app.get("/travels", (req: Request, res: Response) => {
  res.send(travels);
});

//Get One travel (app.get) (/travels/:id)
app.get("/travels/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const travel = travels.find((t) => t.id === id);

  if (travel) {
    res.send(travel);
  } else {
    res.status(404).send({ message: "Travel not found" });
  }
});

//Create travel (app.post) (/travels)
app.get("/travels", (req: Request, res: Response) => {
  const { name, city, country, image, description } = req.body;
  const newTravel = {
    id: travels.length > 0 ? travels[travels.length - 1].id + 1 : 1,
    name,
    city,
    country,
    image,
    description,
  };

  travels.push;
  newTravel;
  res.status(201).send(newTravel);
});
//Update travel (app.put) (/travels/:id)

//Delete travel (app.delete) (/travels/:id)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
