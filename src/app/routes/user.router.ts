import { Router, Request, Response, NextFunction } from 'express';

import { Messages } from './../../configs/messages';
import { HttpCodes } from './../../models/http-codes';
import { isUsernameExists } from './../../utils/username-exists.guard';
import { UserService } from '../services/user.service';

export const userRouter = Router();
const userService = new UserService();

userRouter.post('/sign-up', isUsernameExists, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { result, message, status }: any = await userService.signUp(req.body);
        return res.status(status).json({ result, message }); 
    } catch ({ result, message, status }) {
        return res.status(status).json({ result, message }); 
    }
});

userRouter.post('/sign-in', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(HttpCodes.badRequest).json({ result: null, message: Messages.userBadRequest });
        }

        const { result, message, status }: any = await userService.signIn(username, password);
        return res.status(status).json({ result, message }); 
    } catch ({ result, message, status }) {
        return res.status(status).json({ result, message }); 
    }
});