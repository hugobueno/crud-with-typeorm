import * as dotenv from 'dotenv'
dotenv.config()
import { DataSource } from "typeorm"

console.log({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
});


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "crud_test",
    entities: [
        "src/entities/**/*{.js,.ts}"
     ],
     migrations: [
        "src/database/migrations/**/*{.js,.ts}"
     ],
     subscribers: [
        "src/subscriber/**/*{.js,.ts}"
     ],

})

