import { NextFunction, Request, Response } from 'express';

import { verifyToken } from './token.util';
import { Messages } from '../configs/messages';
import { HttpCodes } from '../models/http-codes';

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;
        const [, token ]: any = authorization?.split(' ');
        if (!token) {
            throw new Error(Messages.userNotAuthenticated);
        }
        const result = verifyToken(token);

        if (!result) {
            throw new Error(Messages.userNotAuthenticated);
        }
        return next();
    } catch ({ message }) {
        return res.status(HttpCodes.unAuthorized).send({
            result: null,
            message: message || Messages.userNotAuthenticated
        });
    }
}