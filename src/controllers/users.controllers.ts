import { usersServices } from "../services/users.services";
import httpStatus from "http-status";
import { Request, Response } from "express";
import { User } from "../protocols/users.protocols";
import { usersRepository } from "../repository/users.repository";


export async function postUser(req: Request, res: Response) {

    const { name, email } = req.body as User;

    await usersServices.postUser(name, email);

    res.sendStatus(httpStatus.CREATED);

}

export async function getUser (req: Request, res: Response) {

    const passengers = await usersRepository.getUser();

    return res.status(httpStatus.OK).send(passengers.rows);
}

export async function deleteUser (req: Request, res: Response) {

    const { id } = req.params;

    await usersRepository.deleteUser(id);

    res.sendStatus(httpStatus.NO_CONTENT);
}

export async function updateUser (req: Request, res: Response) {

    const { id } = req.params;

    const { name, email } = req.body as User;

    await usersRepository.updateUser(name, email, id);

    res.sendStatus(httpStatus.NO_CONTENT);
}