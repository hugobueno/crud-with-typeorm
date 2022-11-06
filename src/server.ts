import * as dotenv from 'dotenv'
dotenv.config()
import "reflect-metadata"
import express from 'express';
import { AppDataSource } from './database/data-source';
import routes from './routes';

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        const app = express();
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        app.use('/api', routes)

        app.listen(3000, () => {
            console.log("Server is listening on port 3000")
        });

    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })



