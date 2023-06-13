import config from "../config";
import mysql from "mysql2";

const connection = mysql.createPool(config.mysql);

export default connection;
