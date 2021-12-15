export default {
  PORT: Number(process.env.PORT),
  DB: {
    username: 'postgres' || process.env.DB_USER,
    password: 'sample' || process.env.DB_PASSWORD,
    port: 5433 || Number(process.env.DB_PORT),
    database: 'correspondence' || process.env.DB_NAME,
    host: 'localhost' || process.env.DB_HOST,
  }
}