import { Router, Request, Response, NextFunction } from 'express';

import { Messages } from './../../configs/messages';
import { HttpCodes } from './../../models/http-codes';

export const errorRouter = Router();

errorRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.redirect(`/${HttpCodes.notFound}`); 
    } catch ({ result, message, status }) {
        return res.status(status).json({ result, message }); 
    }
});

errorRouter.get('/:code', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const status = parseInt(req.params.code, 10);
        return res.status(status).json({ result: null, message: Messages.routeNotFound }); 
    } catch ({ result, message, status }) {
        return res.status(status).json({ result, message }); 
    }
});