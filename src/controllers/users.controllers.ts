import { usersServices } from "../services/users.services";
import httpStatus from "http-status";
import { Request, Response } from "express";
import { User } from "../protocols/users.protocols";

export async function postUser(req: Request, res: Response) {

    const { stripHtml } = await import("string-strip-html");

    const { name, email } = req.body as User;

    const sanitizedName = stripHtml(name).result.trim();
    const sanitizedEmail = stripHtml(email).result.trim();

    await usersServices.postUser(sanitizedName, sanitizedEmail);

    res.sendStatus(httpStatus.CREATED);

}