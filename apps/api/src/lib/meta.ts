import type { ApiMeta } from '@repo/contracts'

export const apiMeta: ApiMeta = {
  name: 'bstack API',
  runtime: 'Bun',
  framework: 'Hono',
  database: 'Drizzle + SQLite',
}
