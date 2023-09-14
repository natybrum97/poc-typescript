import { Router } from "express";
import { validationschema } from "../middlewares/validateSchema";
import { usersSchema } from "../schemas/users.schemas";
import { postUser } from "../controllers/users.controllers";

const usersRouter = Router();

usersRouter.post("/users", validationschema(usersSchema), postUser );
// passengersRouter.get("/passengers/travels", getAllPassengersAndYourTravels);

export default usersRouter;