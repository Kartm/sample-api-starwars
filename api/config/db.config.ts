export default {
  host: process.env.DATABASE_HOST || "127.0.0.1",
  user: "root",
  password: "123",
  database: "SW_DB",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
