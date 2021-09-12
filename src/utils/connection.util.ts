import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

import { Messages } from '../configs/messages';

export const getConnection = async () => {
    try {
        config();
        const { DB_NAME, DB_HOST,  DB_PORT } = process.env;
        if (!DB_NAME) {
            throw new Error(Messages.databaseNameNotSet);
        }
        if (!DB_PORT) {
            throw new Error(Messages.databasePortNotSet);
        }

        const client = new MongoClient(`mongodb://${DB_HOST}:${DB_PORT}/`);
        
        await client.connect();
        const db = client.db(DB_NAME);

        return db;
    } catch (ex) {
        return ex;
    }
}