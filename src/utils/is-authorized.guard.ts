import { Messages } from '../configs/messages';
import { HttpCodes } from '../models/http-codes';
import { NextFunction, Request, Response } from 'express';
import { sign, verify } from 'jsonwebtoken';

export const isAuthorized = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorization } = req.headers;
        
    } catch (ex) {
        return res.status(HttpCodes.forbidden).send({
            message: Messages.userNotAuthorized
        });
    }
}