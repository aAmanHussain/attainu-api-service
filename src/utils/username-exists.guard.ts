import { NextFunction, Request, Response } from 'express';

import { UserService } from './../app/services/user.service';
import { Messages } from '../configs/messages';
import { HttpCodes } from '../models/http-codes';

const userService = new UserService();

export const isUsernameExists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { result } = await userService.userExists(req.body);
        if (result) {
            throw new Error(Messages.usernameError);
        }
        
        return next();
    } catch ({ message }) {
        return res.status(HttpCodes.badRequest).send({
            result: null,
            message: message || Messages.usernameError
        });
    }
}