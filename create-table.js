import { sql } from "./db.js";

sql`DROP TABLE IF EXISTS videos;`.then(() => {
  console.log("table dropped");
});

// Create a table in the database, if it doesn't already exist.
sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    duration INT
);
`.then(() => {
  console.log("table created");
});
