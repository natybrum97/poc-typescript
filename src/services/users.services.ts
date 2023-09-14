import { usersRepository } from "../repository/users.repository";
import { errors } from "../erros/erros";
import { User } from "protocols/users.protocols";

export async function postUser(sanitizedName: string, sanitizedEmail: string): Promise<void> {

        const user: { rows: User[] } = await usersRepository.userexists (sanitizedName);
      
        if (user.rows.length > 0) throw errors.conflict("Esse usuário")

        await usersRepository.SalveUser(sanitizedName,sanitizedEmail);

}

export const usersServices = { postUser };