import { Address } from './Address.model';

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: Address;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.username = data.username;
        this.phone = data.phone;
        this.email = data.email;

        this.address = new Address(data.address);
    }
}
