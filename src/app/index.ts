import { HttpCodes } from './../models/http-codes';
import { resetDatabase } from '../utils/bootstrap-app.util';
import { Messages } from './../configs/messages';
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { userRouter, searchRouter, errorRouter } from './routes';

(async () => {
    try {
        await resetDatabase();

        config();
        const { PORT } = process.env;
        if (!PORT) {
            throw new Error(Messages.applicationPortNotSet);
        }

        const app = express();
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
        
        app.use('/api/user-service', userRouter);
        app.use('/api/search-service', searchRouter);
        app.use('/api/error-service', errorRouter);
        app.use('**', (req, res, next) => res.redirect(`/api/error-service/${HttpCodes.notFound}`));

        app.on('unhandledException', (parent) => {
            console.error(`Error `, parent);
        })
    } catch (ex) {
        
    }
})();