import { User } from './user.model';

export class Comment {
    id: string;
    content: string;
    status: string;
    createTime: string;
    createUser: User;
    updateTime: string;
    updateuser: User;
}