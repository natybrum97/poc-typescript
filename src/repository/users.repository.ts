import { db } from "../database/database.connection";
import { QueryResult } from "pg"; // Importe a tipagem apropriada para o PostgreSQL

async function userexists(sanitizedName: string): Promise<QueryResult> {

  const resultado = await db.query('SELECT * FROM users WHERE name = $1;', [sanitizedName]);

  return resultado;
}

async function SalveUser(sanitizedName: string, sanitizedEmail: string): Promise<QueryResult> {

  const result = await db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [sanitizedName, sanitizedEmail]);
  
  return result;
}

export const usersRepository = {
  userexists,
  SalveUser
};
