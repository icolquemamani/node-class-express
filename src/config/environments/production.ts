export default {
  PORT: Number(process.env.PORT),
  DB: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }
}