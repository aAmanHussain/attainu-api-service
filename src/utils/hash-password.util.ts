import { genSalt, hash, compare } from 'bcryptjs';

export const generateHash = async (password: string) => {
    try {
        const salt = await genSalt(10);
        const passwordHash = await hash(password, salt);

        return passwordHash;                
    } catch (ex) {
        
    }
};

export const compareHash = async (password: string, hash: string) => {
    try {
        const result = await compare(password, hash);
        
        return result;                
    } catch (ex) {
        
    }
};