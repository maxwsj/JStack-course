const { Client } = require("pg");

const client = new Client({
  host: "localhost", // 👈 troque de 'localhost' para '127.0.0.1'
  port: 5432,
  user: "root",
  password: "root",
  database: "mycontacts",
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
