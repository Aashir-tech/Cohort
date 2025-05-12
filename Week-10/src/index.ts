// Write a function to create a users table in your database

import { Client } from "pg";

const client = new Client({
    connectionString : "postgresql://aashirharis6%40gmail.com:7eBPEcOvGmI1@ep-patient-thunder-a1ooidiw-pooler.ap-southeast-1.aws.neon.tech/AashuDB?sslmode=require"
})

async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) UNIQUE NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
        `)
        console.log(result);
}

async function insertUsersTable() {
    await client.connect()
    const result = await client.query(`
            INSERT INTO users (username , email , password)
            VALUES ('Aashir' , 'aashir@gmail.com' , 'password');  
        `)

        console.log(result);
}



// createUsersTable();
insertUsersTable();