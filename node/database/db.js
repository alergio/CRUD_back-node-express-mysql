import { Sequelize } from "sequelize";

const db = new Sequelize("crud_mysqlreactexpressnode", "root", "rootadmin123", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
