export class Address {
    street: string;
    city: string;
    postcode: string;

    constructor(data: any) {
        this.street = data.street;
        this.city = data.city;
        this.postcode = data.zipcode;
    }
}
