import { usersServices } from "../services/users.services";
import httpStatus from "http-status";
import { Request, Response } from "express";
import { User } from "../protocols/users.protocols";


export async function postUser(req: Request, res: Response) {

    const { name, email } = req.body as User;

    await usersServices.postUser(name, email);

    res.sendStatus(httpStatus.CREATED);

}