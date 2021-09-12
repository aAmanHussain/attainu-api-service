import { UserType } from './user-type';

export class User {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    phoneNumber: number;
    userType: UserType;

    constructor({ firstName, lastName, username, password, email, phoneNumber, userType = UserType.customer }: User) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.userType = userType;
    }

    isValid = () => {
        const isValid = this.firstName && this.lastName && this.username && this.password && (this.email || (this.phoneNumber && this.phoneNumber.toString().length === 10));

        return isValid;
    }
}