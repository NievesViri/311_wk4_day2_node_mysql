const mysql = require("mysql");
require("dotenv").config();
console.log(process.env);

const host = process.env.HOST;
const userName = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
console.log(host, userName, password, database);

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: "admin",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
