import { FastifyInstance } from "fastify"
import knex from "knex"

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await knex('transactions')
    .select('*')
    
    return transactions
  })
}