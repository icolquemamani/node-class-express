export default {
  PORT: Number(process.env.PORT),
  DB: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  }
}