import { User } from './User.model';

export class Post {
    id: number;
    user: User;
    title: string;
    body: string;

    constructor(postData: any, userData: any) {
        this.id = postData.id;
        this.user = new User(userData);
        this.title = postData.title;
        this.body = postData.body;
    }
}
