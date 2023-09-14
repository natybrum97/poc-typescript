import { db } from "../database/database.connection";
import { QueryResult } from "pg"; // Importe a tipagem apropriada para o PostgreSQL

async function userexists(name: string): Promise<QueryResult> {

  const resultado = await db.query('SELECT * FROM users WHERE name = $1;', [name]);

  return resultado;
}

async function SalveUser(name: string, email: string): Promise<QueryResult> {

  const result = await db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
  
  return result;
}

export const usersRepository = {
  userexists,
  SalveUser
};
