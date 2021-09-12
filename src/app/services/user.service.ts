import { getToken } from './../../utils/token.util';
import { generateHash, compareHash } from '../../utils/hash-password.util';
import { Messages } from './../../configs/messages';
import { Collection } from './../../models/collection';
import { getConnection } from '../../utils/connection.util';
import { HttpCodes } from './../../models/http-codes';
import { User } from './../../models/user';

export class UserService {
    status: any = null;

    signUp = async (body: User) => {
        try {
            const connection = await getConnection();            
            const user = new User(body);
            if (!user.isValid()) {
                this.status = HttpCodes.badRequest;
                throw new Error(Messages.userBadRequest)
            }
            user.password = await generateHash(user.password);
            const result = await connection.collection(Collection.users).insertOne(user);
            
            return {
                result,
                status: HttpCodes.ok,
                message: Messages.generalSuccess
            };
        } catch ({ message }) {
            return {
                result: null,
                status: this.status || HttpCodes.badRequest,
                message
            }
        }
    }

    signIn = async (username: string, password: string) => {
        try {
            const connection = await getConnection();
            const result = await connection.collection(Collection.users).findOne({ username });

            if (!result) {
                this.status = HttpCodes.notFound;
                throw new Error(Messages.notFound);
            }

            const checkPassword = compareHash(password, result.password);

            if (!checkPassword) {
                this.status = HttpCodes.badRequest;
                throw new Error(Messages.generalErorr);
            }

            const token = await getToken(result);

            return {
                result: { ...result, token },
                status: HttpCodes.ok,
                message: Messages.generalSuccess
            }
        } catch ({ message }) {
            return {
                result: null,
                status: this.status,
                message
            }
        }
    }

    userExists = async ({ username}: User) => {
        try {
            const connection = await getConnection();            
            const result = await connection.collection(Collection.users).findOne({ username });
            
            return {
                result,
                status: HttpCodes.ok,
                message: Messages.generalSuccess
            };
        } catch ({ message }) {
            return {
                result: null,
                status: this.status || HttpCodes.badRequest,
                message
            }
        }
    }
}