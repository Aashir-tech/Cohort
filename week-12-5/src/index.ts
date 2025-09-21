import { Client } from "pg";

// My local postgresql password : aashir@....
// My docker postgresql password : aashir12345

const client = new Client({
  connectionString: "postgresql://postgres:aashir12345@localhost:5434/postgres",
});

// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

// createUsersTable();

// async function insertUsersTable(
//   username: string,
//   email: string,
//   password: string
// ) {
//   const insertQuery = `INSERT INTO users (username , email , password) VALUES ($1 , $2 , $3)`;

//   await client.connect();
//   const result = await client.query(insertQuery , [username , email , password]);
//   console.log(result);
// }

// insertUsersTable("Aashir", "aashir@gmail.com", "aashir@1234");

async function getUser(email: string) {
  try {
    await client.connect();
    const query = `SELECT * FROM users WHERE email=$1;`;
    const values = [email];

    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log(`User found : ${JSON.stringify(result.rows[0])}`);
      return result.rows[0]; // Return the user data
    } else {
      console.log(`No user found with that email`);
      return null;
    }
  } catch (error) {
    console.log(`Error : ${error}`)
  } finally {
    await client.end();
  }
}


getUser("aashir@gmail.com");

