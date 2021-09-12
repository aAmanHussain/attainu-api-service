import { sign, verify } from 'jsonwebtoken';
import { config } from 'dotenv';
import { User } from './../models/user';

export const getToken = async ({ firstName, lastName, username, email, phoneNumber, userType }: User) => {
    try {
        config();
        const { JWT_SECRET, JWT_EXPIRES_IN = 60 * 60 * 24 } = process.env;
        if (!JWT_SECRET) {
            return null;
        }
        const token = sign({ firstName, lastName, username, email, phoneNumber, userType }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        return token;
    } catch (ex) {
        return null;
    }
};

export const verifyToken = async (token: string) => {
    try {
        config();
        const { JWT_SECRET } = process.env;
        if (!JWT_SECRET) {
            return null;
        }
        const tokenDetails: any = verify(token, JWT_SECRET);

        if (!tokenDetails) {
            return null;
        }

        return Math.floor(Date.now()/1000)  < tokenDetails.exp;
    } catch (ex) {
        return null;
    }
};