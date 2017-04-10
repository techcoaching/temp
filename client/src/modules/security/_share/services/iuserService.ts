import { PromiseFactory, Promise } from "@app/common";
export interface IUserService {
    getUsers(): Promise;
    createUser(user: any): Promise;
}