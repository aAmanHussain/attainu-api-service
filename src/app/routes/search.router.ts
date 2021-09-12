import { Router, Request, Response, NextFunction } from 'express';

import { isAuthenticated } from './../../utils/is-authenticated.guard';
import { HttpCodes } from './../../models/http-codes';
import { Messages } from './../../configs/messages';
import { SearchService } from '../services/search.service';

export const searchRouter = Router();
const searchService = new SearchService();

searchRouter.get('/search', isAuthenticated, async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { term = '' }: any = req.query;
        term = term.trim();
        if (!term) {
            return res.status(HttpCodes.badRequest).json({ result: null, message: Messages.noTermError });
        }
        
        const { result, message, status }: any = await searchService.search(term);
        return res.status(status).json({ result, message }); 
    } catch ({ result, message, status }) {
        console.log(`Ex: `, result, status);
        return res.status(status).json({ result, message }); 
    }
});